import React, {createContext, useState, useEffect, useContext} from 'react';
import {RegisterUser, LoginUser, EmailVerification} from '../types/auth.type';
import {User} from '../types/user.type';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import {api} from '../api/api';
import * as SplashScreen from 'expo-splash-screen';
import SplashScreenComponent from '../screens/Splash';


interface AuthContextData {
    authState?: { token: string | null; authenticated: boolean | null };
    onRegister?: (registerUser: RegisterUser) => Promise<any>;
    onVerify?: (emailVerification: EmailVerification) => Promise<any>;
    onLogin?: (loginUser: LoginUser) => Promise<any>;
    onLogout?: () => Promise<any>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}: any) => {
    const [loading, setLoading] = useState(true);
    const [authState, setAuthState] = useState<{
        token: string | null;
        userId: string | null;
        authenticated: boolean | null
    }>({
        token: null,
        userId: null,
        authenticated: null,
    });

    useEffect(() => {
        const loadToken = async () => {
            try {
                await SecureStore.deleteItemAsync('token');
                const token = await SecureStore.getItemAsync('token');
                const userId = await SecureStore.getItemAsync('user').then((user) => {
                    return user ? JSON.parse(user).id : null;
                });
                if (token) {
                    setAuthState({
                        token,
                        userId: userId,
                        authenticated: true,
                    });
                    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                }
                // Handle token loading error
            } finally {
                setLoading(false); // Set loading to false when done
                SplashScreen.hideAsync(); // Hide the splash screen
            }

        };
        loadToken();
    }, []);

    if (loading) {
        // Show splash screen while loading
        SplashScreen.preventAutoHideAsync(); // Prevent auto-hiding the splash screen
        return <SplashScreenComponent/>;
    }

    const register = async (registerUser: RegisterUser) => {
        try {
            const result = await api.post('/auth/register', registerUser);
            if (result.data.error) {
                return {error: true, message: result.data.message};
            }
            await SecureStore.setItemAsync('userEmail', registerUser.email);
            return registerUser;
        } catch (error) {
            return {error: true, message: (error as any).response.data.message};
        }
    };

    const verify = async (emailVerification: EmailVerification) => {
        try {
            const result = await api.post(`/auth/verifyEmail?userEmail=${emailVerification.userEmail}&verificationCode=${emailVerification.verificationCode}`,);
            api.defaults.headers.common['Authorization'] = `Bearer ${result.data.accessToken}`;
            await SecureStore.setItemAsync('token', result.data.access_token);
            await SecureStore.setItemAsync('user', JSON.stringify(result.data));
            setAuthState({
                token: result.data.access_token,
                userId: result.data.id,
                authenticated: true,
            });
            return result;

        } catch (error) {
            return {error: true, message: (error as any).response.data.message};
        }
    };


    const login = async (loginUser: LoginUser) => {
        try {
            const result = await api.post('/auth/login', loginUser);
            api.defaults.headers.common['Authorization'] = `Bearer ${result.data.accessToken}`;
            await SecureStore.setItemAsync('token', result.data.access_token);
            await SecureStore.setItemAsync('user', JSON.stringify(result.data));
            setAuthState({
                token: result.data.access_token,
                userId: result.data.id,
                authenticated: true,
            });
            return result;

        } catch (error) {
            return {error: true, message: (error as any).response.data.message};
        }
    };

    const logout = async () => {
        await SecureStore.deleteItemAsync('token');
        axios.defaults.headers.common['Authorization'] = '';

        setAuthState({
            token: null,
            userId: null,
            authenticated: false,
        });
    };

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        onVerify: verify,
        authState,
    };

    return (
        <AuthContext.Provider
            value={value}>
            {children}
        </AuthContext.Provider>
    );
};
