import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const ChangeBtn = ({ onPress, text }: { onPress: ()=>void,text: string }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
  },
  text: { 
    color: "#4F59A4", 
    fontSize: 16, 
    fontWeight: "bold" 
  },
});

export default ChangeBtn;