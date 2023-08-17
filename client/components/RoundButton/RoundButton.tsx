import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { RoundButtonModel, RoundButtonType } from "../../Models/Button";
import color from "../../config/color";


export const RoundButton:React.FC<RoundButtonModel> = ({ onPress, text , type}) => {
  return (
    <TouchableOpacity style={[styles.container,type==RoundButtonType.Deactive?styles.deactive:styles.active]} onPress={onPress}>
      <Text style={[styles.text,type==RoundButtonType.Deactive?styles.deactive_color:styles.active_color]}>{text}</Text>
    </TouchableOpacity>
  );
};

RoundButton.defaultProps={
    type: RoundButtonType.Active
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    width:"40%",
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:16,
    height:32
  },
  text: { fontFamily:"Monserrata", fontSize: 16,fontWeight:"400" },
  deactive:{backgroundColor:color.paperWhite},
  active:{backgroundColor:color.buttonBlue},
  active_color:{color:"white"},
  deactive_color:{color:"black"}
});
