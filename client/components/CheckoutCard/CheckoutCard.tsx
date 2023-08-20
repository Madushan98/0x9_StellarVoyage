import React from "react";
import {Text, StyleSheet,Image,View } from "react-native";
import color from "../../config/color";
import { Devider } from "../Devider/Devider";
import Ionicons from "@expo/vector-icons/Ionicons"
import icon from "../../config/icon";

interface chCard{
  arrivalDate:string,
  departureDate:string,
  arrivalTime:string,
  departureTime:string,
  price:string,
  passenger:string,
  from:string,
  to:string,
  flightType:string,
  seat:string,
  flightClass:string,
  flightMode:string
}


export const CheckoutCard = ({flightClass,arrivalDate,arrivalTime,departureDate,departureTime,from,passenger,price,to,flightMode,flightType,seat}:chCard) => {
  const cardIcon:any = flightMode=="Portal"?icon.Portal:icon.Ship
    const timeComp=(title:string,value:string)=>{
        return(
            <View>
                <Text style={[styles.fontFamily,styles.titleText]}>{title}</Text>
                <Text style={[styles.fontFamily,styles.TimeDateText]}>{value}</Text>
            </View>
        )
    }

  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={[styles.fontFamily,styles.mainTitle]}>{from}</Text>
            <Ionicons style={{fontSize:24,color:color.checkOutTitle}} name="airplane"/>
            <Text style={[styles.fontFamily,styles.mainTitle]}>{to}</Text>
        </View>
        <View style={styles.detailContainer}>
            <View style={styles.imageBox}>
                <Image style={styles.image} source={cardIcon}/>
                <Text style={[styles.imageText,styles.fontFamily]}>{flightType}</Text>
            </View>
            <View style={styles.detailBox}>
                    {timeComp("Departure",`${departureDate} ${departureTime}`)}
                    {timeComp("Arrival",`${arrivalDate} ${arrivalTime}`)}
                {/* <Text style={[styles.fontFamily,styles.Pricing]}>$ {9999}</Text> */}
            </View>
        </View>
        <View style={styles.flightDetail}>
            {timeComp("Seat",seat)}
            {timeComp("Class",flightClass)}
            {timeComp("Flight No",flightClass)}
        </View>
        <Devider></Devider>
        <View style={styles.pricingDetail}>
            <Text style={[styles.fontFamily,styles.Pricing]}>${price}/<Text style={[styles.fontFamily,styles.titleText]}>Passenger</Text></Text>
            <Text style={[styles.fontFamily,styles.titleText]}>{passenger} Passenger</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    width:"90%",
    paddingVertical: 12,
    backgroundColor: color.paperWhite,
    alignItems: "center",
    borderRadius:12,
    height:240,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignContent:"flex-start"
  },
  titleContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"baseline",
    width:"100%",
  },

  detailContainer:{
    display:"flex",
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-between"
  },
  imageBox:{
    display:'flex',
    flexDirection:'column',
    height:"100%",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flightDetail:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%"

  },
  pricingDetail:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between",alignItems:"flex-end"},
  mainTitle:{fontSize:24,fontWeight:"700",color:color.checkOutTitle},
  detailBox:{display:'flex',height:"100%",flexDirection:'column',justifyContent:'space-between'},
  image:{height:60,width:60},
  fontFamily:{fontFamily:'Mulish'},
  imageText:{fontSize:16,fontWeight:"600"},
  titleText:{fontSize:10,fontWeight:"800",color:color.pricingTitle},
  TimeDateText:{fontWeight:"600",fontSize:14,color:"#000"},
  Pricing:{fontWeight:"700",fontSize:15,color:color.pricingColor},

});
