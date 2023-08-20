import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/auth.context';
import { common, commonColor, commonFonts } from '../config/style';
import { MainButton } from '../components/MainButton/MainButton';
import { UserInput } from '../components/UserInputCard/UserInput';
import { View, Text, TextInput, Button } from 'react-native';
import CommonView from './CommonView';
import { NavigationProps } from '../Models/Navigation';


const Register = ({ navigation }:NavigationProps) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState('');
    const { onRegister } = useAuth();

    const handleRegister = async () => {
        if (!name || !email || !password || !confirmPassword) {
            setError('All fields are required');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        const result = await onRegister!({ name, email, password })
            if (result?.error) {
                alert(result.message);
            }else{
                navigation.navigate('EmailVerification', {
                    email: email,
                });
            }
};

    return (
        <>
            <CommonView>
                <View style={[common.middleArea, common.topArea]}>
                    <Text style={[common.mainTitle, { color: "white", marginBottom: 12 }]}>Sign Up</Text>
                    <Text style={[{ color: "white" }]}>Let’s Create Your Account !</Text>
                </View>
                <View style={[common.centerVertical, { height: "40%", justifyContent: "space-around" }]}>
                    <UserInput lable='Name' onChange={(value) => setName(value)} />
                    <UserInput lable='Email' onChange={(value) => setEmail(value)} />
                    <UserInput lable='password' onChange={(value) => setPassword(value)} />
                    <UserInput lable='Confirm Password' onChange={(value) => setConfirmPassword(value)} />
                </View>
                <View style={[common.centerVertical, { height: "30%", justifyContent: "space-around" }]}>
                    <MainButton text='SIGN UP' onPress={handleRegister} />
                    <Text onPress={() => navigation.navigate('Login')} style={[commonColor.white, commonFonts.mulish]}>Already have an account? Sign In</Text>
                </View>
            </CommonView>
        </>
    )
}

export default Register;