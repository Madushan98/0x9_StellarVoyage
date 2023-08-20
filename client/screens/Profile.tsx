import { View, Text, TextInput, Button, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { common, commonColor, commonFonts } from '../config/style';
import CommonView from './CommonView';
import { ProfilePageBtn } from '../components/ProfilePageBtn/ProfilePageBtn';
import { SignOutBtn } from '../components/SignOutBtn/SignOutBtn';
import { useAuth } from '../contexts/auth.context';

const ProfileScreen = () => {
  
  const { onLogout } = useAuth();
  

  function signOut(){
    onLogout!();
  }

  return (
    <CommonView>
      <View style={[common.middleArea, common.topArea, {marginTop: 20}]}>
        <Image source={require('../assets/Images/ProfPic.png')} />
        <Text style={[common.mainTitle, { color: "white" }]}>Sarah Fernando</Text>
      </View>
      <View style={[common.centerVertical, { height: 85 }]}>
        <ProfilePageBtn text='Personal Details'></ProfilePageBtn>
      </View>
      <View style={[common.centerVertical, { height: 85 }]}>
        <ProfilePageBtn text='Payment Methods'></ProfilePageBtn>
      </View>
      <View style={[common.centerVertical, { height: 85 }]}>
        <ProfilePageBtn text='Language'></ProfilePageBtn>
      </View>
      <View style={[common.centerVertical, { height: 85 }]}>
        <ProfilePageBtn text='Notifications'></ProfilePageBtn>
      </View>
      <View style={[common.centerVertical, { height: 85}]}>
        <SignOutBtn onPress={signOut} text='Sign Out'></SignOutBtn>
      </View>
    </CommonView>
  )
}

export default ProfileScreen;