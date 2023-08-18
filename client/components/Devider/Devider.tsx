import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { DeviderModel } from "../../Models/Devider";
import color from "../../config/color"


export const Devider = ({ width="100%" }: DeviderModel) => {
    const containerStyle: ViewStyle = { width };
  return (
    <View style={[styles.container,containerStyle]}></View>
  );
};

const styles = StyleSheet.create({
  container:{
    height:1,
    backgroundColor: color.deviderColor,
    alignSelf: "flex-start",
    borderRadius:1
  },
});
