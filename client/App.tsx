import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useFonts } from 'expo-font';
import { AuthProvider, useAuth } from "./contexts/auth.context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import BottomBar from "./screens/BottomBar";

const Stack = createStackNavigator();

function App() {

  const [fontsLoaded, fontError] = useFonts({
    'Monserrata': require('./assets/fonts/Mon.ttf'),
  });

  return (
   <AuthProvider>
      <Layout></Layout>
   </AuthProvider>
  );
}

export const Layout = () => {
  const {authState, onLogout} = useAuth();
  return (
    <BottomBar/>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
