import React from "react";
import { Text, StyleSheet, Image, View, ImageBackground } from "react-native";
import color from "../../config/color";
import planetImg from '../../config/image'
import { Destination } from "../../types/destination.types";
import planets from "../../config/planetIcon"
import { IconButton } from "../IconButton/IconButton";
import { BookingListCardModel } from "../../Models/Card";


export const BookingListCard = ({ DepartureDate, DepartureTime, destination, from, image, passangerCount, price }: BookingListCardModel) => {



    return (
        <View style={[styles.container]}>
            <ImageBackground
                source={image} // Replace with your image path
                style={styles.image}
                imageStyle={{ borderRadius:16}}
            >
                <View style={styles.textContainer}>
                        <View style={{width:"60%"}}>
                            <Text style={[styles.text,{fontSize:16,fontWeight:"800"}]}>{from}</Text>
                            <Text style={[styles.text,{fontSize:12,fontWeight:"800"}]}>{destination}</Text>
                            <Text style={[styles.text,{display:"flex",flexDirection:"row"},{fontSize:12,fontWeight:"800"}]}>{DepartureDate} {DepartureTime}</Text>
                        </View>
                        <View style={{width:"40%",display:"flex",justifyContent:"center",flexDirection:"row-reverse",alignItems:"flex-end"}}>
                            <View style={[styles.pricebox]}>
                                <Text style={{fontFamily:"Mulish",fontSize:20,fontWeight:"600"}}>{900}$</Text>
                                <Text style={{fontFamily:"Mulish",fontSize:12,fontWeight:"600"}}>For {passangerCount} passengers</Text>
                            </View>
                        </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        width: "94%",
        height:220,
        borderRadius:16,
    },
    image: { 
        paddingHorizontal: 16,
        paddingVertical: 16,
        alignItems: "center",
        flex: 1,
        resizeMode: 'cover',
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    text:{fontFamily:"Monserrata",color:"white"},
    textContainer:{
        width:"100%",
        height:"30%",
        display:"flex",
        flexDirection:"row",
        alignItems:"baseline"
    },
    pricebox:{
        width:"100%",
        backgroundColor:"white",
        borderRadius:16,
        height:"100%",
        padding:8,
        paddingLeft:12
    }

});
