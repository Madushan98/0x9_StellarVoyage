import React from "react";
import { TouchableOpacity, Text, StyleSheet,Image } from "react-native";
import {IconButtonModel } from "../../Models/Button";
import color from "../../config/color";
import Ionicons from "@expo/vector-icons/Ionicons"



export const IconButton = ({ onPress, text, icon }: IconButtonModel) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
        <Ionicons style={styles.icon} name={icon}></Ionicons>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width:"90%",
    paddingVertical: 8,
    backgroundColor: color.iconButtonbg,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius:16,
    display:"flex",
    flexDirection:"row"
  },
  text: { color: "white",fontFamily:"Monserrata", fontSize: 10,fontWeight:"600" },
  icon:{
    color: "white",
    fontSize:16
  }
});
