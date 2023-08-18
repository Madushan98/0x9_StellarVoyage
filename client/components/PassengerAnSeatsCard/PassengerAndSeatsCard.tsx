import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import PassengerListItem from "../PassengerListItem/PassengerListItem";

const PassengerAndSeatsCard = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout1]}
        onPress={() => {}}
      >
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Text style={[styles.addPassenger, styles.selectSeatTypo]}>
          Add Passenger
        </Text>
        <Image
          style={[styles.groupInner, styles.rectangleLayout]}
          resizeMode="cover"
          source={require("../../assets/Icons/plus.png")}
        />
      </Pressable>
      <View style={[styles.passengersSeatsParent, styles.rectangleLayout]}>
        <Text
          style={[styles.passengersSeats1, styles.saraFernandoTypo]}
        >{`Passengers & Seats`}</Text>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={styles.flightClassIcon1}
            resizeMode="cover"
            source={require("../../assets/Icons/iion2.png")}
          />
        </View>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <PassengerListItem
          imageSource={require("../../assets/Icons/profile.png")}
          passengerName={"Sara Fernando"}
        ></PassengerListItem>

        {/* <PassengerListItem
          imageSource={require("../../assets/Icons/profile.png")}
          passengerName={"Sara Fernando"}
        ></PassengerListItem> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    backgroundColor: "#d9d9d9",
    left: 0,
    top: 0,
  },
  groupLayout1: {
    height: 37,
    width: 149,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: "#aaafd5",
    left: 0,
    top: 0,
  },
  selectSeatTypo: {
    textAlign: "left",
    color: "#4f59a4",
    fontSize: 12,
    fontFamily: "Mulish-Bold",
    fontWeight: "700",
    position: "absolute",
  },
  rectangleLayout: {
    height: 25,
    position: "absolute",
  },
  saraFernandoTypo: {
    color: "#5b4658",
    fontSize: 14,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 41,
    width: 265,
    position: "absolute",
  },
  groupChild2Layout: {
    height: 26,
    width: 78,
    position: "absolute",
  },
  groupChild3Layout: {
    height: 33,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 10,
    width: 308,
    position: "absolute",
    height: 144,
  },
  groupItem: {
    borderRadius: 20,
    height: 37,
    width: 149,
    position: "absolute",
  },
  addPassenger: {
    top: 11,
    left: 45,
    width: 102,
    height: 21,
  },
  groupInner: {
    top: 6,
    left: 7,
    width: 25,
    height: 25,
  },
  rectangleGroup: {
    top: 92,
    left: 35,
    width: 149,
  },
  passengersSeats1: {
    width: 150,
    top: 4,
    fontFamily: "Mulish-Bold",
    fontWeight: "700",
    fontSize: 14,
    left: 35,
  },
  rectangleView: {
    borderRadius: 6,
    backgroundColor: "#ebc1bb",
    width: 25,
    height: 25,
    left: 0,
    top: 0,
  },
  flightClassIcon1: {
    height: "48%",
    width: "48%",
    top: "24%",
    right: "28%",
    bottom: "28%",
    left: "24%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleContainer: {
    width: 25,
    height: 25,
    left: 0,
    top: 0,
  },
  passengersSeatsParent: {
    top: 9,
    left: 11,
    width: 250,
  },
  groupChild1: {
    borderRadius: 23,
    borderStyle: "solid",
    borderColor: "#e8a9a0",
    borderWidth: 1,
    backgroundColor: "#d9d9d9",
    left: 0,
    top: 0,
  },
  groupChild2: {
    borderRadius: 13,
    backgroundColor: "#aaafd5",
    left: 0,
    top: 0,
  },
  selectSeat: {
    top: 5,
    width: 73,
    left: 5,
  },
  rectangleParent1: {
    left: 180,
    top: 7,
  },
  saraFernando: {
    left: 47,
    fontWeight: "600",
    fontFamily: "Mulish-SemiBold",
    width: 100,
    top: 7,
  },
  groupChild3: {
    width: 34,
    left: 0,
    top: 0,
  },
  saraFernandoParent: {
    width: 146,
    left: 5,
    top: 4,
  },
  groupView: {
    top: 41,
    left: 29,
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 144,
  },
});

export default PassengerAndSeatsCard;
