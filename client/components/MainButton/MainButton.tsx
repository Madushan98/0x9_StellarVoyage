import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { ButtonModel } from "../../Models/Button";
import color from "../../config/color";


export const MainButton = ({ onPress, text }: ButtonModel) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    width:"90%",
    paddingVertical: 8,
    backgroundColor: color.buttonBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:12,
    height:56
  },
  text: { color: "white",fontFamily:"Monserrata", fontSize: 16,fontWeight:"400" },
});
