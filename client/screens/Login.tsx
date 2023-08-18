import { View, Text, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/auth.context';
import { api } from '../api/api';

const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const {onLogin,onRegister} = useAuth();

    useEffect(() => {
        // const testCall = async () => {
        //     const result = await api.get('/destinations/all');
        //     console.log(result.data);
        // }
        // testCall();
    }, [])

    const handleLogin = async () => {
        const result = await onLogin!({email,password});
        if (result?.error) {
            alert(result.message)
        }
    }

    return(
        <View>
            <TextInput placeholder="Email" onChangeText={setEmail}/>
            <TextInput placeholder="Password" secureTextEntry={true} onChangeText={setPassword}/>
            <Button title="Login" onPress={handleLogin}/>
        </View>
    )
}

export default Login;