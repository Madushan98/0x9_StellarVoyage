import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import BottomSheetComponent from "../AddPay/AddPay";

const ChangePayBS = ({MCNumber = '12341234'}, {VCNumber = '56785678'}) => {

  const MClastFourDigits = MCNumber.slice(-4);
  const VClastFourDigits = VCNumber.slice(-4);

  return (
    <View style={styles.BScontainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Change Payment Method</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={require('../../assets/Images/mastercard.png')}
          style={styles.cardImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardNumber}>****{MClastFourDigits}</Text>
        </View>
        <Image
          source={require('../../assets/Images/ink_pen.png')}
          style={styles.penImage}
        />
      </View>
      <View style={styles.container}>
        <Image
          source={require('../../assets/Images/visa.png')}
          style={styles.cardImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardNumber}>****{VClastFourDigits}</Text>
        </View>
        <Image
          source={require('../../assets/Images/ink_pen.png')}
          style={styles.penImage}
        />
      </View>
        <View>  
          <BottomSheetComponent/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BScontainer: {
    padding: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 5,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    marginBottom: 30,
    marginRight: 20,
    marginLeft:20,
  },
  cardImage: {
    width: 89,
    height: 63,
    marginRight: 30,
  },
  penImage: {
    width: 20,
    height: 15,
    marginRight: 30,
  },
  textContainer: {
    flex: 10,
  },
  cardNumber: {
    fontSize: 24,
    height: 24,
    width: 120,
    fontWeight: 'bold',
    color: '#8C778A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignItems: 'center', 
    justifyContent: 'center', 
    color: '#474A56',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleContainer: {
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: 20,
    marginTop: 15,
    flex: 1, 
  },
});

export default ChangePayBS;