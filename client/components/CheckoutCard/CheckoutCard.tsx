import React from "react";
import {Text, StyleSheet,Image,View } from "react-native";
import color from "../../config/color";
import { Devider } from "../Devider/Devider";
import Ionicons from "@expo/vector-icons/Ionicons"


export const CheckoutCard = () => {

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
            <Text style={[styles.fontFamily,styles.mainTitle]}>Earth</Text>
            <Ionicons style={{fontSize:24,color:color.checkOutTitle}} name="airplane"/>
            <Text style={[styles.fontFamily,styles.mainTitle]}>Mercury</Text>
        </View>
        <View style={styles.detailContainer}>
            <View style={styles.imageBox}>
                <Image style={styles.image} source={{uri:'https://s3-alpha-sig.figma.com/img/53d9/c37a/f32eea9272ebaa3d2ee17808b07130c5?Expires=1693180800&Signature=WS0EWs8aLwKETiFqYOXeImlb4VmtSOrsOKXrsY7HVxcdH2Ip6ujotYW9BKCeDvknVMVaThuCJXKxP571A-E9-XMUr7C~mPmyMSFG99IyBFjYWFZhvuxumDV49CvK0L~MopIzmy7qlpR6sOjY0qHRTnvORri5JZOWa2k8R2tpwJxLCQwuw0TAXausyPahc4eh3a2xzlylPBBBT5EJwpi3L7QyWODc5tkn4U4hedj3k5Att4u3RWDpKkt3eOOccAgJ3QJXnvN~56uiavb5NF2ldtyey~Au720PVqq~TlQRvAOFrRMb48zWOlBMzd7zHmErZKLDw3aVWzZkM7sqBq43wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}/>
                <Text style={[styles.imageText,styles.fontFamily]}>Star Ship</Text>
            </View>
            <View style={styles.detailBox}>
                    {timeComp("Departure","2023/08/12 5.30 a.m")}
                    {timeComp("Departure","2023/08/12 5.30 a.m")}
                {/* <Text style={[styles.fontFamily,styles.Pricing]}>$ {9999}</Text> */}
            </View>
        </View>
        <View style={styles.flightDetail}>
            {timeComp("Seat","9A")}
            {timeComp("Class","Economy")}
            {timeComp("Flight No","EM369")}
        </View>
        <Devider></Devider>
        <View style={styles.pricingDetail}>
            <Text style={[styles.fontFamily,styles.Pricing]}>$999/<Text style={[styles.fontFamily,styles.titleText]}>Passenger</Text></Text>
            <Text style={[styles.fontFamily,styles.titleText]}>1 Passenger</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    width:"40%",
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
