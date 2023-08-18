import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from "../../config/color";
import * as Animatable from 'react-native-animatable';
import Icon from "@expo/vector-icons/Ionicons"
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/Home';
import ProfileScreen from '../../screens/Profile';
import BookingScreen from '../../screens/Bookings';

const TabArr = [
  { route: 'Home', label: 'Home', type: "home-outline", icon: 'home', component: HomeScreen },
  { route: 'Bookings', label: 'Bookings', type: "bookmarks-outline", icon: 'bookings', component: BookingScreen },
  { route: 'Profile', label: 'Profile', type: "person-outline", icon: 'Profile', component: ProfileScreen },
];

const Tab = createBottomTabNavigator();

const TabButton = (props:any) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
 const viewRef = useRef<any>(null);
  const textViewRef = useRef<any>(null);

  useEffect(() => {
    if (focused) { // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
      viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
      textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
    } else {
      viewRef.current.animate({ 0: { scale: 1, }, 1: { scale: 0, } });
      textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, {flex: focused ? 1 : 0.65}]}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={[StyleSheet.absoluteFillObject, { backgroundColor: Colors.selectdTabColor, borderRadius: 16 }]} />
        <View style={[styles.btn, { backgroundColor: focused ? Colors.selectdTabColor : Colors.white }]}>
          <Icon type={item.type} name={item.icon} color={focused ? Colors.white : Colors.selectdTabColor} />
          <Animatable.View
            ref={textViewRef}>
            {focused && <Text style={{
              color: Colors.white, paddingHorizontal: 8
            }}>{item.label}</Text>}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default function AnimTab3() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16
        }
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  }
})