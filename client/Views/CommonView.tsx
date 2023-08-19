import { StyleSheet, Text, View,Image } from "react-native";
import image from "../config/image";
import themecolor from "../config/themecolor";

function CommonView(children:any) {

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}/>
        <Image
          source={image.TopStra}
          style={styles.maskingImage}
        />
        <Image
          source={image.Star}
          style={styles.overlayImage}
          resizeMode="contain"
        />
        {children}
      </View>
    );
  };

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themecolor.maingbg,
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-end",
      height:"100%"
    },
    overlayImage: {
      top: 0,
      left: 0,
      width: '100%',
      height:"70%"
      
    },
    topContainer:{
      height:"30%",
      backgroundColor:themecolor.topContainer,
      borderBottomLeftRadius: 42, 
      borderBottomRightRadius: 42,
    },
    maskingImage: {
      width: "100%",
      height: "30%",
      position: 'absolute', // Position the masking image over the view
      top: 0,
      left: 0,
      resizeMode: 'cover', // Adjust the image's resizeMode as needed
    },
  });


  export default CommonView;