import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { ButtonModel } from "../../Models/Button";
import color from "../../config/color";


export const ProfilePageBtn = ({ onPress, text }: ButtonModel) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.text}>{text}</Text>
      </View>
        <Image source={require('../../assets/Images/ArrowForward.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    width:"90%",
    paddingVertical: 8,
    backgroundColor: color.paperWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius:12,
    height:56
  },
  text: { 
    color: "black", 
    fontSize: 16, 
    fontWeight:"400" 
  },
  content: {
    flexDirection: "row", 
    alignItems: "center", 
  },
});
