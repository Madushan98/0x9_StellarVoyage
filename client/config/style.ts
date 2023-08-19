import {StyleSheet } from 'react-native'

export const  common = StyleSheet.create({
    centerVertical: {
      width:"100%",
      display:'flex',
      flexDirection:"column",
      alignItems:"center"
    },
    centerHorizontal: {
        width:"85%",
        display:'flex',
        flexDirection:"row",
        alignItems:"center"
      },
    middleArea:{
        width:"95%",
        display:'flex',
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    mainTitle:{
        fontSize:32,
        fontWeight:"700",
        fontFamily:"Mulish"
    },
    topArea:{
        height:"28%",
    }
  });

export const  commonColor = StyleSheet.create({
    white: {
      color:"white"
    },
    mainTitle:{
        fontSize:32,
        fontWeight:"700",
        fontFamily:"Mulish"
    }
  });

  export const commonFonts = StyleSheet.create({
    mulish:{
        fontFamily:"Mulish"
    }
  })