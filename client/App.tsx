import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from "react-native";
import Constants from "expo-constants";
import image from "./config/image";
import themecolor from "./config/themecolor";
import CommonView from "./Views/CommonView";
import LoginPage from "./Views/LoginPage";


function App() {

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      keyboardVerticalOffset={-290} // You can adjust this value if needed
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
          <LoginPage></LoginPage>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}



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
    height: "70%"

  },
  topContainer: {
    flex: 1,
    height: "30%",
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


export default AppEntryPoint;

