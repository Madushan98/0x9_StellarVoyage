import { View, Text, StyleSheet, TextInput } from "react-native";
import { UserInputLableModel } from "../../Models/Input";
import Ionicons from "@expo/vector-icons/Ionicons"
import { TouchableOpacity } from "react-native-gesture-handler";



export const SearchTextInput= ({onChange,lable,onPress}:UserSearchlableModel) => {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>{lable}</Text>
            <View style={{display:"flex",width:"100%",paddingHorizontal:12,borderRadius:32,backgroundColor:"white",flexDirection:"row",height:"100%",alignItems:"center"}}>
              <TextInput onChangeText={text=>onChange(text)} style={styles.input}/>
              <TouchableOpacity onPress={onPress}>
               <Ionicons style={styles.icon} name="search-sharp"></Ionicons>
              </TouchableOpacity>
            </View>
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
        width:"90%",
        paddingHorizontal:12,
        display:'flex',
        flexDirection:"row-reverse",
      },
      icon:{fontSize:32},
      text: { fontFamily:"Monserrata", marginBottom:12, color:"white", fontSize: 16,fontWeight:"800" },
  });

  