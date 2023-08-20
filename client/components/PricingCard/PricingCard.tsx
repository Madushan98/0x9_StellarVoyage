import React from "react";
import {Text, StyleSheet,Image,View } from "react-native";
import color from "../../config/color";
import icon from "../../config/icon";

export const PricingCard = ({flightId,flightMode,departureDate,arrivalDate,price}:FlightInfo) => {
    const cardIcon:any = flightMode=="Portal"?icon.Portal:icon.Ship
    const timeComp=(title:string,date:string)=>{
        return(
            <View>
                <Text style={[styles.fontFamily,styles.titleText]}>{title}</Text>
                <Text style={[styles.fontFamily,styles.TimeDateText]}>{date}</Text>
            </View>
        )
    }

  return (
    <View style={styles.container}>
        <View style={styles.imageBox}>
            <Image style={styles.image} source={cardIcon}/>
            <Text style={[styles.imageText,styles.fontFamily]}>Star Ship</Text>
        </View>
        <View style={styles.detailBox}>
           <View style={{display:'flex',flexDirection:"column"}}>
            {timeComp("Departure",departureDate!)}
            {timeComp("Arrival",arrivalDate!)}
           </View>
            <Text style={[styles.fontFamily,styles.Pricing]}>$ {9999}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    width:"85%",
    paddingVertical: 12,
    backgroundColor: color.paperWhite,
    alignItems: "center",
    height:120,
    borderRadius:12,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignContent:"flex-start"
  },
  imageBox:{
    display:'flex',
    flexDirection:'column',
    height:"100%",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  detailBox:{display:'flex',height:"100%",flexDirection:'column',justifyContent:'space-between'},
  image:{height:60,width:60},
  fontFamily:{fontFamily:'Mulish'},
  imageText:{fontSize:16,fontWeight:"700"},
  titleText:{fontSize:10,fontWeight:"800",color:color.pricingTitle},
  TimeDateText:{fontWeight:"700",fontSize:14,color:"#000"},
  Pricing:{fontWeight:"700",fontSize:15,color:color.pricingColor},

});
