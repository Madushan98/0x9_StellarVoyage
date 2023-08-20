import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


export const AddBtn = ({ onPress, text }: { onPress: ()=>void,text: string }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 200,
    paddingHorizontal: 170,
    paddingVertical: 15,
    backgroundColor: "#334D8F",
    alignSelf: "center",
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});


export default AddBtn;