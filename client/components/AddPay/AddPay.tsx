import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import AddPayBtn from '../ChangePay/AddPayBtn';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddPayBS from '../AddPay/AddPayBS';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

const BottomSheetComponent: React.FunctionComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.buttonContainer}>
          <AddPayBtn
            text="Add Payment Method"
            onPress={() => setIsVisible(true)}
          />
          <BottomSheet
            isVisible={isVisible}
            onBackdropPress={() => {
              setIsVisible(false);
            }}
          >
            <AddPayBS />
          </BottomSheet>
        </View>
    );
};
    
const styles = StyleSheet.create({
buttonContainer: {
    flex: 1,
    justifyContent: 'center', 
  },
})

export default BottomSheetComponent;
