import { View, Text, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/auth.context';
import { api } from '../api/api';
import { common, commonColor, commonFonts } from '../config/style';
import icon from '../config/icon';
import { ImageButton } from '../components/ImageButton/ImageButton';
import { MainButton } from '../components/MainButton/MainButton';
import { UserInput } from '../components/UserInputCard/UserInput';
import { ToggleSwitch } from '../components/Switch/Switch';


const Register = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confiremPassword, setconfiremPassword] = useState<string>("")

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

    const oncange = (test: string) => { }

    return (
        <>
            <View style={[common.middleArea, common.topArea]}>
                <Text style={[common.mainTitle, { color: "white",marginBottom:12  }]}>Sign Up</Text>
                <Text style={[{ color: "white" }]}>Let’s Create Your Account !</Text>
            </View>
            <View style={[common.centerVertical, { height: "40%", justifyContent: "space-around" }]}>
            <UserInput lable='Email' onChange={(value)=>setName(value)} />
                <UserInput lable='Email' onChange={(value)=>setEmail(value)} />
                <UserInput lable='password' onChange={(value)=>setPassword(value)} />
                <UserInput lable='Cofirem Password' onChange={(value)=>setconfiremPassword(value)} />
            </View>
            <View style={[common.centerVertical, { height: "30%", justifyContent: "space-around" }]}>
                <MainButton text='SIGN UP' onPress={handleLogin} />
                {/* <Text style={[commonFonts.mulish, commonColor.white, { fontSize: 16, fontWeight: "500" }]}>OR</Text> */}
                {/* <ImageButton text='Login with Goole' icon={icon.GoogleIcon}></ImageButton>
                <ImageButton text='Login with Facebook' icon={icon.FaceBookIcon}></ImageButton> */}
                <Text style={[commonColor.white, commonFonts.mulish]}>Already have an account?</Text>
            </View>
        </>
    )
}

export default Register;