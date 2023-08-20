import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


export const PayNowBtn = ({ onPress, text }: { onPress: ()=>void, text: string }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Pay Now</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4F59A4",
    alignSelf: "center",
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20,
    borderRadius: 20,
    marginBottom: 30,
    marginRight: 20,
    marginLeft:20,
  },
  text: {
    marginRight: 35,
    marginLeft: 35,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default PayNowBtn;