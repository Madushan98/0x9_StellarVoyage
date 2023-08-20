import React from "react";
import {Text, StyleSheet,Image,View, TouchableOpacity } from "react-native";
import color from "../../config/color";
import { ButtonModel } from "../../Models/Button";
import  planets from '../../config/planetIcon'


export const PlanetCard = ({onPress}:ButtonModel) => {
    const planetKeysArray:string[] = Object.keys(planets);
  return (
    <View style={styles.container}>
        {planetKeysArray.map((planet,index)=>(
            <TouchableOpacity key={index} style={{width:"25%",height:42}} onPress={onPress}>
                 <Image style={{flex:1,width:52,height:52,alignSelf:"center"}} source={planets[planet]}/>
            </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    width:"85%",
    paddingVertical: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    borderColor:color.planetCardBorder,
    alignItems: "center",
    borderRadius:30,
    borderWidth:2,
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-around",
    height:140,
    rowGap:24,
    
  },
  text: { color: "white",fontFamily:"Monserrata", fontSize: 32,fontWeight:"800",marginBottom:8},
  detailText:{color:"white",fontFamily:"Monserrata",fontSize:16,fontWeight:"400"}
});
