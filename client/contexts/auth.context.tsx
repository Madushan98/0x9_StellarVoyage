import React, {createContext, useState, useEffect, useContext} from 'react';
import { registerUser,loginUser } from '../types/auth.type';
import { User } from '../types/user.type';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import { api } from '../api/api';


interface AuthContextData {
  authState?: { token: string | null; authenticated: boolean | null};
  onRegister?: (registerUser: registerUser) => Promise<any>;
  onVerify?: () => Promise<any>;
  onLogin?: (loginUser: loginUser) => Promise<any>;
  onLogout?: () => Promise<any>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}:any) => {
   const [authState, setAuthState] = useState<{ 
    token: string | null;
    userId: string | null; 
    authenticated: boolean | null}>({
    token: null,
    userId: null,
    authenticated: null,
    });

    useEffect(() => {
      const loadToken = async () => {
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
      };
      loadToken();
    }, []);

    const register = async (registerUser: registerUser) => {
        try {
            const result =  await api.post('/register', registerUser);

            await SecureStore.setItemAsync('user', JSON.stringify(result.data));
            return result;

        } catch (error) {
            return {error: true, message: (error as any).response.data.message};
        }
    };

    const login = async (loginUser: loginUser) => {
        try {
            const result =  await axios.post('https://dummyjson.com/auth/login', loginUser);
            setAuthState({
                token: result.data.token,
                userId: result.data.id,
                authenticated: true,
            });
            api.defaults.headers.common['Authorization'] = `Bearer ${result.data.accessToken}`;
            await SecureStore.setItemAsync('token', result.data.access_token);
            await SecureStore.setItemAsync('user', JSON.stringify(result.data));
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
        authState,
    };

  return (
    <AuthContext.Provider
      value={value}>
      {children}
    </AuthContext.Provider>
  );
};

