import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export interface LabelInputFieldCardProps {
  //input types could be email, password, text, number, etc
  inputType: string;
  //label text
  labelText: string;
  //placeholder text
  placeholderText: string;
  //value of the input field
  value: string;
}

const LabelInputFieldCard = ({
  inputType,
  labelText,
  placeholderText,
  value,
}: LabelInputFieldCardProps) => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <TextInput
        placeholder={placeholderText}
        secureTextEntry={inputType === "password" ? true : false}
        style={[styles.sarafernandogmailcom, styles.emailPosition]}
      >
        {value}
      </TextInput>
      <Text style={[styles.email, styles.emailPosition]}>{labelText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emailPosition: {
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    //border color
    borderColor: "#212542",
    //border width
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    width: 308,
    position: "absolute",
    height: 56,
  },
  sarafernandogmailcom: {
    top: 28,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Mulish-Medium",
    color: "#000",
    width: 202,
  },
  email: {
    top: 9,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Mulish-Bold",
    color: "#5b4658",
    width: 100,
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 56,
  },
});

export default LabelInputFieldCard;
