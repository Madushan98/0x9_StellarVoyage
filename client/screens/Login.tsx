import { View, Text, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/auth.context';
import { common, commonColor, commonFonts } from '../config/style';
import { UserInput } from '../components/UserInputCard/UserInput';
import { ToggleSwitch } from '../components/Switch/Switch';
import { ImageButton } from '../components/ImageButton/ImageButton';
import { MainButton } from '../components/MainButton/MainButton';
import icon from '../config/icon';
import CommonView from './CommonView';
import { NavigationProps } from '../Models/Navigation';

const Login = ({navigation}:NavigationProps) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { onLogin } = useAuth();

    const handleLogin = async () => {
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        const result = await onLogin!({ email, password });
        if (result?.error) {
            alert(result.message)
        }
    }

    return (
        <>
            <CommonView>
                <View style={[common.middleArea, common.topArea]}>
                    <Text style={[common.mainTitle, { color: "white", marginBottom: 12 }]}>Login</Text>
                    <Text style={[{ color: "white" }]}>Hi Welcome Back</Text>
                </View>
                <View style={[common.centerVertical, { height: 150, justifyContent: "space-around" }]}>
                    <UserInput  lable='Email' onChange={(value) => setEmail(value)} />
                    <UserInput  lable='password' onChange={(value) => setPassword(value)} />
                </View>
                <View style={[common.centerHorizontal, { justifyContent: 'space-between' }]}>
                    <ToggleSwitch lable='Remember Me' />
                    <Text style={[commonColor.white, commonFonts.mulish]}>Forgate Password?</Text>
                </View>
                <View style={[common.centerVertical, { height: 300, justifyContent: "space-around" }]}>
                    <MainButton text='SIGN IN' onPress={handleLogin} />
                    <Text style={[commonFonts.mulish, commonColor.white, { fontSize: 16, fontWeight: "500" }]}>OR</Text>
                    <ImageButton text='Login with Goole' icon={icon.GoogleIcon}></ImageButton>
                    <ImageButton text='Login with Facebook' icon={icon.FaceBookIcon}></ImageButton>
                    <Text onPress={()=>navigation.navigate('Register')} style={[commonColor.white, commonFonts.mulish]}>Don't have an Account? Sign Up</Text>
                </View>
            </CommonView>
        </>
    )
}

export default Login;