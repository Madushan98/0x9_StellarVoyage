import React from "react";
import { TouchableOpacity, Text, StyleSheet,Image } from "react-native";
import {ImageButtonModel } from "../../Models/Button";
import color from "../../config/color";


export const ImageButton = ({ onPress, text, icon }: ImageButtonModel) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image style={styles.image} source={icon}/>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "20%",
    width:"90%",
    paddingVertical: 8,
    backgroundColor: color.paperWhite,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:12,
    height:56,
    display:"flex",
    flexDirection:"row",
  },
  image:{
    height:32,
    width:32,
    marginRight:12
    },
  text: { color: "black",fontFamily:"Monserrata", fontSize: 16,fontWeight:"400" },
});
