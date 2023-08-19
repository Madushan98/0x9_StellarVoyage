import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export interface BookingSummaryCardSmallProps {
  imageSource: any;
  price: string;
  passengerCount: string;
  flightNumber: string;
  seatNumber: string;
  flightClass: string;
  destinationImageSource: any;
  destinationName: string;
  fromName: string;
  arrivalTime: string;
  departureTime: string;
}

const BookingSummmaryCardSmall = ({
  imageSource,
  price,
  passengerCount,
  flightNumber,
  seatNumber,
  flightClass,
  destinationImageSource,
  destinationName,
  fromName,
  arrivalTime,
  departureTime,
}: BookingSummaryCardSmallProps) => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Text style={[styles.passenger, styles.passengerTypo]}>
        <Text style={styles.textClr}>${price}</Text>
        <Text style={styles.passengerClr}>/passenger</Text>
        <Text style={styles.textClr}>{` `}</Text>
      </Text>
      <Text style={[styles.passenger2, styles.passengerClr]}>
        {passengerCount} passenger
      </Text>
      <View style={[styles.flightNoParent, styles.em369Layout]}>
        <Text style={[styles.flightNo, styles.seatTypo]}>Flight No</Text>
        <Text style={[styles.em369, styles.aTypo]}>{flightNumber}</Text>
      </View>
      <View style={[styles.seatParent, styles.parentPosition]}>
        <Text style={[styles.seat, styles.seatTypo]}>seat</Text>
        <Text style={[styles.a, styles.aTypo]}>{seatNumber}</Text>
      </View>
      <View style={[styles.classParent, styles.economyLayout]}>
        <Text style={[styles.class, styles.seatTypo]}>Class</Text>
        <Text style={[styles.economy, styles.economyLayout]}>
          {flightClass}
        </Text>
      </View>
      <View
        style={[
          styles.uniqueMartianLandscapeVectoParent,
          styles.groupItemPosition,
        ]}
      >
        <Image
          style={[
            styles.uniqueMartianLandscapeVectoIcon,
            styles.groupChildPosition,
          ]}
          resizeMode="cover"
          source={destinationImageSource}
        />
        <Text style={[styles.starship, styles.textClr]}>Starship</Text>
      </View>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.arrivalParent, styles.parentLayout]}>
          <Text style={[styles.arrival, styles.seatTypo]}>Arrival</Text>
          <Text style={[styles.am, styles.parentLayout]}>{arrivalTime}</Text>
        </View>
        <View style={[styles.departureParent, styles.parentLayout]}>
          <Text style={[styles.departure, styles.seatTypo]}>Departure</Text>
          <Text style={[styles.am, styles.parentLayout]}>{departureTime}</Text>
        </View>
      </View>
      <View
        style={[styles.airplanemodeActiveParent, styles.airplanemodeLayout]}
      >
        <Image
          style={[styles.airplanemodeActiveIcon1, styles.airplanemodeLayout]}
          resizeMode="cover"
          source={imageSource}
        />
        <Text style={[styles.earth, styles.earthTypo]}>{fromName}</Text>
        <Text style={[styles.mercury, styles.earthTypo]}>
          {destinationName}
        </Text>
      </View>
      <View style={[styles.groupItem, styles.groupItemPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    borderRadius: 10,
    top: 0,
    position: "absolute",
  },
  passengerTypo: {
    textAlign: "left",
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    position: "absolute",
  },
  passengerClr: {
    color: "#5b4658",
    fontSize: 12,
  },
  em369Layout: {
    width: 60,
    position: "absolute",
  },
  seatTypo: {
    color: "#8c778a",
    fontSize: 10,
    left: 1,
    textAlign: "left",
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    top: 0,
    position: "absolute",
    width: 60,
  },
  aTypo: {
    fontSize: 14,
    top: 14,
    color: "#000",
    textAlign: "left",
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    left: 0,
    width: 60,
  },
  parentPosition: {
    top: 201,
    height: 32,
  },
  economyLayout: {
    width: 70,
    position: "absolute",
  },
  groupItemPosition: {
    left: 24,
    position: "absolute",
  },
  textClr: {
    color: "#000",
    fontSize: 16,
  },
  parentLayout: {
    width: 160,
    position: "absolute",
  },
  airplanemodeLayout: {
    height: 34,
    position: "absolute",
  },
  earthTypo: {
    fontFamily: "Mulish-Bold",
    fontWeight: "700",
    fontSize: 24,
    color: "#5b4658",
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "#d9d9d9",
    width: 308,
    left: 0,
    height: 320,
  },
  passenger: {
    top: 275,
    left: 27,
    width: 120,
  },
  passenger2: {
    top: 279,
    left: 211,
    width: 71,
    textAlign: "left",
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    position: "absolute",
  },
  flightNo: {
    width: 44,
  },
  em369: {
    width: 47,
    position: "absolute",
  },
  flightNoParent: {
    top: 199,
    left: 229,
    height: 32,
  },
  seat: {
    width: 30,
  },
  a: {
    width: 19,
    position: "absolute",
  },
  seatParent: {
    width: 23,
    left: 37,
    position: "absolute",
  },
  class: {
    width: 26,
  },
  economy: {
    fontSize: 14,
    top: 14,
    color: "#000",
    textAlign: "left",
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    left: 0,
  },
  classParent: {
    left: 124,
    top: 201,
    height: 32,
  },
  uniqueMartianLandscapeVectoIcon: {
    left: 2,
    width: 58,
    height: 61,
  },
  starship: {
    top: 61,
    width: 64,
    textAlign: "left",
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    position: "absolute",
    left: 0,
  },
  uniqueMartianLandscapeVectoParent: {
    top: 93,
    height: 81,
    width: 64,
  },
  arrival: {
    width: 33,
  },
  am: {
    fontSize: 14,
    top: 14,
    color: "#000",
    textAlign: "left",
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    left: 0,
  },
  arrivalParent: {
    top: 46,
    height: 32,
    left: 0,
  },
  departure: {
    width: 50,
  },
  departureParent: {
    height: 32,
    left: 0,
    top: 0,
  },
  groupParent: {
    top: 96,
    left: 131,
    height: 78,
  },
  airplanemodeActiveIcon1: {
    left: 81,
    width: 35,
    top: 0,
  },
  earth: {
    top: 3,
    width: 64,
    left: 0,
  },
  mercury: {
    top: 2,
    left: 128,
    width: 95,
  },
  airplanemodeActiveParent: {
    top: 25,
    width: 223,
    left: 37,
  },
  groupItem: {
    top: 258,
    borderStyle: "solid",
    borderColor: "#c2b7b7",
    borderTopWidth: 1,
    width: 259,
    height: 1,
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 320,
  },
});

export default BookingSummmaryCardSmall;
