import {StyleSheet, Text, View, Image, KeyboardAvoidingView, Platform} from "react-native";
import image from "../config/image";
import themecolor from "../config/themecolor";


function CommonView(props:any) {

    return (
        <KeyboardAvoidingView
            style={{flex:1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={0}
            // You can adjust this value if needed
        >
            <View style={styles.container}>
                <View style={styles.topContainer} />
                <Image
                    source={image.TopStra}
                    style={styles.maskingImage}
                />
                <Image
                    source={image.Star}
                    style={styles.overlayImage}
                    resizeMode="contain"
                />
                <View style={styles.viewContainer}>
                    {props.children}
                </View>
            </View>
        </KeyboardAvoidingView>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themecolor.maingbg,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      height: "100%"
    },
    overlayImage: {
      top: 0,
      left: 0,
      width: '100%',
      height: "75%"
  
    },
    topContainer: {
      flex: 1,
      height: "25%",
      backgroundColor: themecolor.topContainer,
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
    viewContainer: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  });
  

  export default CommonView;