import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

interface LableInputFeildProps {
  label: string;
  placeholder: string;
  inputType: "text" | "creditCard" | "expirationDate" | "cvv";
  inputValue?: string;
}

const LableInputFeild = ({
  label,
  placeholder,
  inputType,
  inputValue,
}: LableInputFeildProps) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.inputText}
          placeholder={placeholder}
          placeholderTextColor="#9b9b9b"
          value={inputValue}
          keyboardType={
            inputType === "creditCard"
              ? "numeric"
              : inputType === "expirationDate"
              ? "numeric"
              : "default"
          }
          secureTextEntry={inputValue === "cvv"}
          maxLength={
            inputType === "creditCard"
              ? 19
              : inputType === "expirationDate"
              ? 5
              : 100
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    marginBottom: 8,
  },
  label: {
    color: "#474a56",
    fontFamily: "Mazzard",
    fontSize: 14,
  },
  inputBox: {
    height: 40,
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "#c8d1e1",
    borderWidth: 1,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    width: "80%",
  },
  inputText: {
    flex: 1,
    color: "#474a56",
    fontFamily: "Mazzard",
    fontSize: 14,
  },
  inputContainer: {
    marginBottom: 20,
  },
});

export default LableInputFeild;
