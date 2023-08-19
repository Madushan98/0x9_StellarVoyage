import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export interface TicketCardProps {
  imageSource: any;
  imageText: string;
  arrivalTime: string;
  departureTime: string;
  price: string;
}
const TicketCard: React.FC<TicketCardProps> = ({
  imageSource,
  imageText,
  arrivalTime,
  departureTime,
  price,
}) => {
  return (
    <View style={styles.to}>
      <View style={styles.toChild} />
      <Image
        style={styles.uniqueMartianLandscapeVectoIcon}
        resizeMode="cover"
        source={imageSource}
      />
      <Text style={[styles.teleport, styles.amFlexBox]}>{imageText}</Text>
      <View style={styles.groupParent}>
        <View style={[styles.arrivalParent, styles.parentLayout]}>
          <Text style={[styles.arrival, styles.amFlexBox]}>Arrival</Text>
          <Text style={[styles.am, styles.amFlexBox]}>{arrivalTime}</Text>
        </View>
        <View style={[styles.departureParent, styles.parentLayout]}>
          <Text style={[styles.arrival, styles.amFlexBox]}>Departure</Text>
          <Text style={[styles.am, styles.amFlexBox]}>{departureTime}</Text>
        </View>
        <Text style={[styles.text1, styles.amFlexBox]}>$ {price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  parentLayout: {
    height: 32,
    width: 143,
    left: 0,
    position: "absolute",
  },
  toChild: {
    borderRadius: 12,
    backgroundColor: "#d9d9d9",
    width: 293,
    left: 0,
    top: 0,
    position: "absolute",
    height: 106,
  },
  uniqueMartianLandscapeVectoIcon: {
    top: 15,
    left: 19,
    borderRadius: 10,
    width: 49,
    height: 57,
    position: "absolute",
  },
  teleport: {
    top: 75,
    left: 13,
    fontSize: 16,
    color: "#000",
    textAlign: "left",
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
  },
  arrival: {
    left: 1,
    fontSize: 10,
    color: "#8c778a",
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    textAlign: "left",
    top: 0,
  },
  am: {
    top: 14,
    fontSize: 14,
    color: "#000",
    textAlign: "left",
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    left: 0,
  },
  arrivalParent: {
    top: 36,
  },
  departureParent: {
    top: 0,
  },
  text1: {
    top: 74,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Mulish-Bold",
    color: "#00950f",
    left: 0,
  },
  groupParent: {
    top: 7,
    left: 118,
    height: 93,
    width: 143,
    position: "absolute",
  },
  to: {
    flex: 1,
    width: "100%",
    height: 106,
  },
});

export default TicketCard;
