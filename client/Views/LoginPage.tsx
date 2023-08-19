import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { UserInput } from '../components/UserInputCard/UserInput'
import { common, commonFonts, commonColor } from '../config/style'
import { MainButton } from '../components/MainButton/MainButton'
import { ImageButton } from '../components/ImageButton/ImageButton'
import icon from '../config/icon'
import { ToggleSwitch } from '../components/Switch/Switch'

export default function LoginPage() {

    const oncange = (test: string) => { }

    return (
        <>
            <View style={[common.middleArea, common.topArea]}>
                <Text style={[common.mainTitle, { color: "white" }]}>Login</Text>
                <Text style={[{ color: "white" }]}>Hi Welcome Back</Text>
            </View>
            <View style={[common.centerVertical, { height: "20%", justifyContent: "space-around" }]}>
                <UserInput lable='Email' onChange={oncange} />
                <UserInput lable='password' onChange={oncange} />
            </View>
            <View style={[common.centerHorizontal, { justifyContent: 'space-between' }]}>
                <ToggleSwitch lable='Remember Me' />
                <Text style={[commonColor.white, commonFonts.mulish]}>Forgate Password?</Text>
            </View>
            <View style={[common.centerVertical, { height: "40%", justifyContent: "space-around" }]}>
                <MainButton text='SIGN IN' />
                <Text style={[commonFonts.mulish, commonColor.white, { fontSize: 16, fontWeight: "500" }]}>OR</Text>
                <ImageButton text='Login with Goole' icon={icon.GoogleIcon}></ImageButton>
                <ImageButton text='Login with Facebook' icon={icon.FaceBookIcon}></ImageButton>
                <Text style={[commonColor.white, commonFonts.mulish]}>Don't have an Account</Text>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    inputArea: {
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        alignItems: "center"
    },
});
