import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export interface FlightDetailsInputCardProps {
  mainImage: any;
  secondaryImage: any;
  from: string;
  actionName: string;
}

const FlightDetailsInputCard = ({
  mainImage,
  secondaryImage,
  from,
  actionName,
}: FlightDetailsInputCardProps) => {
  return (
    <View style={styles.from}>
      <View style={styles.fromChild} />
      <Text style={[styles.earth, styles.earthTypo]}>{from}</Text>
      <Image
        style={[styles.moreVertIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={mainImage}
      />
      <Image
        style={[styles.airplanemodeActiveIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={secondaryImage}
      />
      <Text style={[styles.from1, styles.earthTypo]}>From</Text>
      <Text style={[styles.change1, styles.change1Typo]}>Change</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  earthTypo: {
    textAlign: "left",
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
    position: "absolute",
  },
  change1: {
    color: "#4f59a4",
    width: 43,
    fontSize: 10,
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
  },
  iconLayout: {
    height: 24,
    width: 24,
    left: 27,
    position: "absolute",
  },
  change1Typo: {
    textAlign: "left",
    fontFamily: "Mulish-SemiBold",
    fontWeight: "600",
  },
  fromChild: {
    top: 0,
    left: 0,
    borderRadius: 12,
    backgroundColor: "#d9d9d9",
    width: 293,
    position: "absolute",
    height: 76,
  },
  earth: {
    top: 33,
    left: 64,
    fontSize: 20,
    color: "#000",
  },
  moreVertIcon1: {
    top: 38,
  },
  airplanemodeActiveIcon1: {
    top: 11,
  },
  from1: {
    top: 8,
    left: 65,
    fontSize: 16,
    color: "#827e64",
  },
  from: {
    flex: 1,
    width: "100%",
    height: 76,
  },
});

export default FlightDetailsInputCard;
