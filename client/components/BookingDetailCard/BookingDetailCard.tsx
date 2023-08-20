import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import color from "../../config/color";

interface BookingDetailCardModel {
  onPress?: () => void;
  iconName?: any;
  title?: string;
  infomation?: any;
}

export const BookingDetailCard = ({ onPress,title,infomation,iconName }:BookingDetailCardModel) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons style={styles.icon} name={iconName} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{infomation}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    width: "80%",
    paddingVertical: 12,
    backgroundColor: color.paperWhite,
    alignItems: "center",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  icon: {
    fontSize: 32,
    transform: [{ rotate: "90deg" }],
    marginRight: "6%",
  },
  title: {
    fontSize: 16,
    fontFamily: "Mulish",
    fontWeight: "600",
    color: color.pricingTitle,
  },
  info: {
    fontSize: 20,
    fontFamily: "Mulish",
    fontWeight: "600",
    color: "black",
  },
});

export default BookingDetailCard;