import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import CommonView from './CommonView';
import { common } from '../config/style';
import { MainButton } from '../components/MainButton/MainButton';
import { CheckoutCard } from '../components/CheckoutCard/CheckoutCard';
import { BasicCheckoutCard} from '../components/CheckoutCard/CheckoutCard.stories';
import { api } from '../api/api';

const Checkout = ({ route, navigation }) => {
    const { flight } = route.params;

  const handleCheckout = async () => {
    const result = await api.post('/booking/create', flight);
    if (result?.error) {
      alert(result.message);
    }

  }

  return (
     <CommonView>
      <View style={[common.middleArea, common.topArea]}>
          <Text style={[common.mainTitle, { color: 'white', marginBottom: 12 }]}>Checkout</Text>
      </View>
      <View style={[common.centerVertical, { height: "20%", justifyContent: "space-around" }]}>
          <BasicCheckoutCard />
        </View>
    <View style={[common.centerVertical, { height: 300, justifyContent: "space-around" }]}>
                    <MainButton text='Checkout' onPress={handleCheckout} />
                </View>
     </CommonView>
  );
};

export default Checkout;