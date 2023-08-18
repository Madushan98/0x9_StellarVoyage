import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { RoundButtonModel } from "../../Models/Button";
import color from "../../config/color";
import { UserInputModel } from "../../Models/Input";


export const UserInput= ({lable,onChange}:UserInputModel) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.userInputArea}>
        <Text style={[styles.text]}>{lable}</Text>
        <TextInput onChangeText={text=>onChange(text)} style={styles.input}/>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width:"90%",
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius:8,
    backgroundColor:color.paperWhite
  },
  input:{
    flex: 1,
    color: "#474a56",
    fontFamily: "Mazzard",
    fontSize: 14,
    fontWeight:"500",
    outlineWidth: 0,
    paddingTop:2
  },
  userInputArea:{width:"100%"},
  text: { fontFamily:"Mulish", fontSize: 12,fontWeight:"700" },
});
