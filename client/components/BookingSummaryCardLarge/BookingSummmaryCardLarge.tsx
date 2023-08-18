import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import BookingSummmaryCardSmall from "../BookingSummaryCardSmall/BookingSummmaryCardSmall";

export interface BookingSummaryCardLargeProps {
  imageSource: any;
  passengerCount: string;
  flightNumber: string;
  seatNumber: string;
  flightClass: string;
  destinationImageSource: any;
  destinationName: string;
  fromName: string;
  arrivalTime: string;
  departureTime: string;
  QRCode: any;
  NetTotal: string;
  Insurance: string;
  Total: string;
  TravelligOption: string;
}

const BookingSummaryCardLarge = ({
  imageSource,
  passengerCount,
  flightNumber,
  seatNumber,
  flightClass,
  destinationImageSource,
  destinationName,
  fromName,
  arrivalTime,
  departureTime,
  QRCode,
  TravelligOption,
  NetTotal,
  Insurance,
  Total,
}: BookingSummaryCardLargeProps) => {
  return (
    <View style={styles.rectangleParent}>
      <BookingSummmaryCardSmall
        price="1000"
        imageSource={require("../../assets/Icons/Ship.png")}
        passengerCount="1"
        flightNumber="123"
        seatNumber="A1"
        flightClass="Economy"
        destinationImageSource={require("../../assets/Icons/Ship.png")}
        destinationName="Mercury"
        fromName="Earth"
        arrivalTime="2023/08/12 6.50 a.m."
        departureTime="2023/08/12 6.30 a.m."
        TravelligOption="Teleport"
        isSmall={false}
      />

      <View style={[styles.groupItem, styles.groupItemPosition]} />
      <Image
        style={styles.uniqueMartianLandscapeVectoIcon1}
        resizeMode="cover"
        source={QRCode}
      />
      <View style={[styles.parent, styles.groupLayout]}>
        <Text style={[styles.text3, styles.textPosition]}>${Total}</Text>
        <Text style={styles.total}>Total</Text>
      </View>
      <View style={[styles.group, styles.groupLayout]}>
        <Text style={[styles.text4, styles.textTypo]}>${NetTotal}</Text>
        <Text style={styles.passengers}>{passengerCount} passengers</Text>
      </View>
      <View style={[styles.container, styles.groupLayout]}>
        <Text style={[styles.text5, styles.textTypo]}>${Insurance}</Text>
        <Text style={styles.passengers}>Insurance</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    borderRadius: 10,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 15,
    width: 400,
    left: 31,
    position: "absolute",
  },
  textPosition: {
    width: 60,
    left: 210,
    color: "#0a0a0a",
    fontSize: 12,
    top: 0,
  },
  textTypo: {
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  em369Layout: {
    width: 47,
    position: "absolute",
  },
  seatTypo: {
    color: "#8c778a",
    fontSize: 10,
    left: 1,
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  aTypo: {
    fontSize: 14,
    top: 14,
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    left: 0,
  },
  parentPosition: {
    top: 190,
    height: 32,
  },
  economyLayout: {
    width: 61,
    position: "absolute",
  },
  groupItemPosition: {
    left: 24,
    position: "absolute",
  },
  parentLayout: {
    width: 145,
    position: "absolute",
  },
  airplanemodeLayout: {
    height: 34,
    position: "absolute",
  },
  earthTypo: {
    fontSize: 24,
    color: "#5b4658",
    textAlign: "left",
    fontFamily: "Mulish-Bold",
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "#d9d9d9",
    width: 308,
    left: 0,
    height: 440,
  },
  text3: {
    textAlign: "left",
    fontFamily: "Mulish-Bold",
    fontWeight: "700",
    width: 80,
    left: 210,
    position: "absolute",
  },
  total: {
    width: 90,
    color: "#000",
    textAlign: "left",
    fontFamily: "Mulish-Bold",
    fontWeight: "700",
    fontSize: 12,
    left: 0,
    top: 0,
    position: "absolute",
  },
  parent: {
    top: 401,
  },
  text4: {
    width: 50,
    left: 210,
    color: "#0a0a0a",
    fontSize: 12,
    top: 0,
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
  },
  passengers: {
    color: "#5b4658",
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    width: 100,
    textAlign: "left",
    fontSize: 12,
    left: 0,
    top: 0,
    position: "absolute",
  },
  group: {
    top: 348,
  },
  text5: {
    left: 210,
    width: 60,
    color: "#0a0a0a",
    fontSize: 12,
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    top: 0,
  },
  container: {
    top: 373,
  },
  flightNo: {
    width: 44,
  },
  em369: {
    width: 47,
    position: "absolute",
  },
  flightNoParent: {
    top: 188,
    left: 229,
    height: 32,
  },
  seat: {
    width: 22,
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
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    left: 0,
  },
  classParent: {
    left: 124,
    top: 190,
    height: 32,
  },
  uniqueMartianLandscapeVectoIcon: {
    left: 2,
    width: 58,
    height: 61,
  },
  starship: {
    top: 61,
    fontSize: 16,
    width: 64,
    color: "#000",
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    left: 0,
  },
  uniqueMartianLandscapeVectoParent: {
    top: 82,
    height: 81,
    width: 64,
  },
  arrival: {
    width: 33,
  },
  am: {
    fontSize: 14,
    top: 14,
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    left: 0,
  },
  arrivalParent: {
    top: 46,
    height: 32,
    left: 0,
  },
  departure: {
    width: 49,
  },
  departureParent: {
    height: 32,
    left: 0,
    top: 0,
  },
  groupParent: {
    top: 85,
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
    width: 223,
    left: 37,
    top: 14,
    height: 34,
  },
  groupItem: {
    top: 237,
    borderStyle: "solid",
    borderColor: "#c2b7b7",
    borderTopWidth: 1,
    width: 259,
    height: 1,
  },
  uniqueMartianLandscapeVectoIcon1: {
    top: 240,
    left: 85,
    borderRadius: 9,
    width: 146,
    height: 101,
    position: "absolute",
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 800, // Adjusted height
  },
});

export default BookingSummaryCardLarge;
