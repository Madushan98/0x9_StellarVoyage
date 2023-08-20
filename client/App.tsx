import Constants from "expo-constants";
import * as Font from 'expo-font';
import CommonView from "./screens/CommonView";
import { useFonts } from 'expo-font';
import { AuthProvider, useAuth } from "./contexts/auth.context";
import { NavigationContainer } from "@react-navigation/native";
import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import BottomBar from "./screens/BottomBar";
import { useCallback, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import Register from "./screens/Register";
import EmailVerification from "./screens/EmailVerification";
import BookFlight from "./screens/FlightFilter";
import FlightSearchList from "./screens/FlighSearchtList";
import FlightFilter from "./screens/FlightFilter";
import Home from "./screens/Home";
import SearchScreen from "./screens/Search";
import Checkout from "./screens/Checkout";
import DestinationSearchList from "./screens/DestinationSearchList";


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
      <Stack.Navigator
       screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' },
        ...TransitionPresets.SlideFromRightIOS, // Apply fade transition
          transitionSpec: {
          open: { animation: 'timing', config: { duration: 400 } }, // Increase the duration as needed
          close: { animation: 'timing', config: { duration: 400 } }, // Increase the duration as needed
        },
      }}
      >{authState?.authenticated ? (
        <Stack.Screen name="Main" component={BottomBar} />
      ) : (
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      )}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="EmailVerification" component={EmailVerification} />
        <Stack.Screen name="FlightFilter" component={FlightFilter} />
        <Stack.Screen name="FlightSearchList" component={FlightSearchList} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="DestinationSearchList" component={DestinationSearchList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.ondevice").default;
}



export default AppEntryPoint;

