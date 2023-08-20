import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
import { ButtonModel } from "../../Models/Button";
import color from "../../config/color";


export const SignOutBtn = ({ onPress, text }: ButtonModel) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <Image source={require('../../assets/Images/SignOut.png')} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    height: 50,
    width:"60%",
    paddingVertical: 8,
    backgroundColor: color.buttonBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:12,
  },
  content: {
    flexDirection: "row", 
    alignItems: "center", 
  },
  text: { 
    color: "white", 
    fontSize: 20, 
    fontWeight:"400", 
    marginLeft: 10
  },

});
