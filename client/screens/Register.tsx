import {View, Text, TextInput, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAuth} from '../contexts/auth.context';


const Register = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState('');
    const {onRegister} = useAuth();

    const handleRegister = async () => {
        if (!name || !email || !password || !confirmPassword) {
            setError('All fields are required');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        const result = await onRegister!({name, email, password});
        if (result?.error) {
            setError(result.message);
        }
    };

    return (
        <View>
            <TextInput placeholder="Email" onChangeText={setName}/>
            <TextInput placeholder="Email" onChangeText={setEmail}/>
            <TextInput placeholder="Password" secureTextEntry={true} onChangeText={setPassword}/>
            <TextInput placeholder="ConfirmPassword" secureTextEntry={true} onChangeText={setConfirmPassword}/>
            {error ? <Text>{error}</Text> : null}
            <Button title="Register" onPress={handleRegister}/>
        </View>
    )
}

export default Register;