import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import CommonView from './CommonView';
import { common } from '../config/style';
import { MainButton } from '../components/MainButton/MainButton';
import { CheckoutCard } from '../components/CheckoutCard/CheckoutCard';
import { BasicCheckoutCard} from '../components/CheckoutCard/CheckoutCard.stories';
import { api } from '../api/api';
import * as SecureStore from 'expo-secure-store';
import { BookingInfoRequest } from '../types/booking.type';

const Checkout = ({ route, navigation }) => {
    const { flight } = route.params;

  const handleCheckout = async () => {
    const userId = await SecureStore.getItemAsync('user').then((user) => {
      return user ? JSON.parse(user).id : null;
    });
    const bookingData: BookingInfoRequest = {
      userId: userId,
      flightId: flight.flightId,
      numOfPassengers: 0
    };
    
    const result = await api.post('/booking/create', bookingData);
    navigation.navigate('Main');
  }

  return (
     <CommonView>
      <View style={[common.middleArea, common.topArea]}>
          <Text style={[common.mainTitle, { color: 'white', marginBottom: 12 }]}>Checkout</Text>
      </View>
      <View style={[common.centerVertical, { height: "20%", justifyContent: "space-around" }]}>
          <CheckoutCard arrivalDate={''} departureDate={''} arrivalTime={''} departureTime={''} price={''} passenger={''} from={''} to={''} flightType={''} seat={''} flightClass={''} flightMode={''} />
        </View>
    <View style={[common.centerVertical, { height: 300, justifyContent: "space-around" }]}>
                    <MainButton text='Checkout' onPress={handleCheckout} />
                </View>
     </CommonView>
  );
};

export default Checkout;