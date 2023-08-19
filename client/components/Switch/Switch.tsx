import React from "react";
import { Switch,View, Text, StyleSheet } from "react-native";
import { ButtonModel } from "../../Models/Button";
import { SwitchModel } from "../../Models/Input";


export const ToggleSwitch = ({ lable, value,onPressed }: SwitchModel) => {
  return (
    <View style={styles.container}>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onPressed}
        value={value}
      />
      <Text style={styles.text}>{lable}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  text: { color: "white", fontSize: 14,fontFamily:'Mulish' },
});
