import Constants from "expo-constants";
import * as Font from 'expo-font';
import CommonView from "./screens/CommonView";
import { useFonts } from 'expo-font';
import { AuthProvider, useAuth } from "./contexts/auth.context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import BottomBar from "./screens/BottomBar";
import { useCallback, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import Register from "./screens/Register";

const Stack = createStackNavigator();

function App() {

  const [fontLoaded, fontError] = useFonts({
    'Monserrata': require('./assets/fonts/Mon.ttf'),
    'Mulish': require('./assets/fonts/Mulish.ttf'),
    'MazzardH': require('./assets/fonts/Mazzard.ttf'),
    'Mazzard': require('./assets/fonts/MazzardH.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError]);

  if (!fontLoaded && !fontError) {
    return null;
  }

  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

export const Layout = () => {
  const { authState, onLogout } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>{authState?.authenticated ? (
        <Stack.Screen name="Main" options={{ headerShown: false }} component={BottomBar} />
      ) : (
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      )}
        <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}



export default AppEntryPoint;

