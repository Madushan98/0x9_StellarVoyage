import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import CommonView from './CommonView';
import { common } from '../config/style';

const Checkout = (navigate) => {
  return (
     <CommonView>
      <View style={[common.middleArea, common.topArea]}>
          <Text style={[common.mainTitle, { color: 'white', marginBottom: 12 }]}>Search</Text>
        </View>
     </CommonView>
  );
};

export default Checkout;