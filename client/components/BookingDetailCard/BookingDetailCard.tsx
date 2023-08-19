import React from "react";
import {Text, StyleSheet,Image,View } from "react-native";
import color from "../../config/color";
import Ionicons from "@expo/vector-icons/Ionicons"


export const BookingDetailCard = () => {

  return (
    <View style={styles.container}>
        <Ionicons style={styles.icon} name="airplane"></Ionicons>
        <View>
            <Text style={[styles.title]}>Title</Text>
            <Text style={[styles.infor]}>Information</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    width:"40%",
    paddingVertical: 12,
    backgroundColor: color.paperWhite,
    alignItems: "center",
    borderRadius:12,
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignContent:"flex-start"
  },
  icon:{
    fontSize:32,
    transform: [{ rotate: '90deg' }],
    marginRight:"6%"
  },
  title:{
    fontSize:16,
    fontFamily:'Mulish',
    fontWeight:"600",
    color:color.pricingTitle
  },
  infor:{
    fontSize:20,
    fontFamily:'Mulish',
    fontWeight:"600",
    color:'black',
  }

});
