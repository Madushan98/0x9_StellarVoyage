import { View, Text, StyleSheet, TextInput } from "react-native";
import color from "../../config/color";
import { UserInputLableModel } from "../../Models/Input";



export const SearchTextInput= ({onChange,lable}:UserInputLableModel) => {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>{lable}</Text>
            <TextInput onChangeText={text=>onChange(text)} style={styles.input}/>
        </View>
      );
  };

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        width:"100%",
        paddingVertical: 8,
        alignItems: "flex-start",
        justifyContent: "space-between",
        borderRadius:8,
        height:72
      },
      input:{
        color: "#474a56",
        fontFamily: "Monserrata",
        fontSize: 16,
        fontWeight:"800",
        paddingTop:2,
        height:"100%",
        width:"100%",
        backgroundColor:"white",
        borderRadius:32,
        paddingHorizontal:24
      },
      text: { fontFamily:"Monserrata", marginBottom:12, color:"white", fontSize: 16,fontWeight:"800" },
  });

  