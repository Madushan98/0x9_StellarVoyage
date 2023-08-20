import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { BottomSheet } from '@rneui/themed';
import ChangeBtn from './ChangeBtn';
import ChangePayBS from '../ChangePay/ChangePayBS';

type BottomSheetComponentProps = {};

const BottomSheetComponent: React.FunctionComponent<BottomSheetComponentProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Images/mastercard.png')}
        style={styles.cardImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.cardType}>Credit / Debit Card</Text>
        <Text style={styles.cardName}>Master Card</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ChangeBtn
        text="Change"
        onPress={() => setIsVisible(true)}
        />
        <BottomSheet modalProps={{}} isVisible={isVisible}
          onBackdropPress={()=>{
          setIsVisible(false)
        }}
        >
            <ChangePayBS/>
        </BottomSheet>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    height: 72,
    width: 308,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    marginBottom: 16,
  },
  textContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center', 
  },
  cardType: {
    height: 15,
    width: 95,
    fontWeight: 'bold',
    color: '#8C778A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardName: {
    height: 18,
    width: 90,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  cardImage: {
    width: 89,
    height: 63,
    marginRight: 10,
  },
  button: {
  },
});

export default BottomSheetComponent;
