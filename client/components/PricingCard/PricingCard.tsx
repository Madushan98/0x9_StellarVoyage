import React from "react";
import {Text, StyleSheet,Image,View } from "react-native";
import color from "../../config/color";


export const PricingCard = () => {

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
            <Image style={styles.image} source={{uri:'https://s3-alpha-sig.figma.com/img/53d9/c37a/f32eea9272ebaa3d2ee17808b07130c5?Expires=1693180800&Signature=WS0EWs8aLwKETiFqYOXeImlb4VmtSOrsOKXrsY7HVxcdH2Ip6ujotYW9BKCeDvknVMVaThuCJXKxP571A-E9-XMUr7C~mPmyMSFG99IyBFjYWFZhvuxumDV49CvK0L~MopIzmy7qlpR6sOjY0qHRTnvORri5JZOWa2k8R2tpwJxLCQwuw0TAXausyPahc4eh3a2xzlylPBBBT5EJwpi3L7QyWODc5tkn4U4hedj3k5Att4u3RWDpKkt3eOOccAgJ3QJXnvN~56uiavb5NF2ldtyey~Au720PVqq~TlQRvAOFrRMb48zWOlBMzd7zHmErZKLDw3aVWzZkM7sqBq43wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}}/>
            <Text style={[styles.imageText,styles.fontFamily]}>Star Ship</Text>
        </View>
        <View style={styles.detailBox}>
           <View style={{display:'flex',flexDirection:"column"}}>
            {timeComp("Departure","2023/08/12 5.30 a.m")}
            {timeComp("Arrival","2023/08/12 5.30 a.m")}
           </View>
            <Text style={[styles.fontFamily,styles.Pricing]}>$ {9999}</Text>
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
    height:110,
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
  imageText:{fontSize:16,fontWeight:"600"},
  titleText:{fontSize:10,fontWeight:"800",color:color.pricingTitle},
  TimeDateText:{fontWeight:"600",fontSize:14,color:"#000"},
  Pricing:{fontWeight:"700",fontSize:15,color:color.pricingColor},

});
