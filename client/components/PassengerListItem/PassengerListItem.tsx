import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

interface PassengerListItemProps {
  imageSource: any;
  passengerName: string;
}

const PassengerListItem = ({
  imageSource,
  passengerName,
}: PassengerListItemProps) => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.selectSeat, styles.selectSeatFlexBox]}>
          Select Seat
        </Text>
      </View>
      <View style={[styles.saraFernandoParent, styles.groupInnerLayout]}>
        <Text style={[styles.saraFernando, styles.selectSeatFlexBox]}>
          {passengerName}
        </Text>
        <Image
          style={[styles.groupInner, styles.groupInnerLayout]}
          resizeMode="cover"
          source={imageSource}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    top: 0,
  },
  groupLayout: {
    height: 26,
    width: 78,
    position: "absolute",
  },
  selectSeatFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupInnerLayout: {
    //border radios
    borderRadius: 100,
    height: 33,
    position: "absolute",
  },
  groupChild: {
    borderRadius: 23,
    backgroundColor: "#d9d9d9",
    borderStyle: "solid",
    borderColor: "#e8a9a0",
    borderWidth: 1,
    width: 265,
    position: "absolute",
    top: 0,
    height: 41,
  },
  groupItem: {
    borderRadius: 13,
    backgroundColor: "#aaafd5",
    left: 0,
    top: 0,
  },
  selectSeat: {
    top: 5,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Mulish-Bold",
    color: "#4f59a4",
    width: 73,
    left: 5,
  },
  rectangleGroup: {
    left: 180,
    top: 7,
  },
  saraFernando: {
    left: 47,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Mulish-SemiBold",
    color: "#5b4658",
    width: 100,
    top: 7,
  },
  groupInner: {
    width: 34,
    left: 0,
    top: 0,
  },
  saraFernandoParent: {
    top: 4,
    width: 146,
    left: 5,
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 41,
  },
});

export default PassengerListItem;
