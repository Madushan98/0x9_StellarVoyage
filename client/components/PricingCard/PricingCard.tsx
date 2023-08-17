import React from "react";
import {Text, StyleSheet,Image,View } from "react-native";
import color from "../../config/color";
import { CardModel } from "../../Models/Card";


export const PricingCard = ({  title, detail }: CardModel) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.detailText} >{detail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    width:"40%",
    paddingVertical: 16,
    backgroundColor: color.paperWhite,
    alignItems: "center",
    borderRadius:12,
    display:"flex",
    flexDirection:"column"
  },
  text: { color: "white",fontFamily:"Monserrata", fontSize: 32,fontWeight:"800",marginBottom:8},
  detailText:{color:"white",fontFamily:"Monserrata",fontSize:16,fontWeight:"400"}
});
