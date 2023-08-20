import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import AddBtn from "./AddBtn";

const AddPayBS = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");

  const AddBtnClick = () => {
    console.log("Card Number:", cardNumber);
    console.log("Expiration Date:", expDate);
    console.log("CVV/CVC:", cvv);
  };

  function handleExp(e:any){
    
    let expD = e.target.value;
    let newExp;
    newExp = expD.replace(
      /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
    ).replace(
      /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
    ).replace(
      /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
    ).replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
    ).replace(
      /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
    ).replace(
      /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
    ).replace(
      /\/\//g, '/' // Prevent entering more than 1 `/`
    );

    setExpDate(newExp);
  }

  return (
   
    <View style={styles.container}>
      <Text style={styles.title}>Add New Card</Text>
      <Text style={styles.field}>16 digit number</Text>
      <TextInput
        onChangeText={text => setCardNumber(text)}
        value={cardNumber}
        maxLength={16}
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.row}>
        <View style={styles.expColumn}>
          <Text style={styles.field}>Expiration Date</Text>
          <TextInput
            onChangeText={handleExp}
            value={expDate}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <View style={styles.cvvColumn}>
          <Text style={styles.field}>CVV/CVC</Text>
          <TextInput
            onChangeText={text => setCvv(text)}
            value={cvv}
            maxLength={3}
            keyboardType="numeric"
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
      </View>

      <AddBtn onPress={AddBtnClick} text={"Add"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  field: {
    fontSize: 14,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  expColumn: {
    flex: 1,
    marginRight: 10,
    marginTop: 40,

  },
  cvvColumn: {
    flex: 1,
    marginLeft: 10,
    marginTop: 40,
  },
});

export default AddPayBS;