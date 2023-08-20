import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CommonView from './CommonView';
import { common } from '../config/style';
import { PricingCard } from '../components/PricingCard/PricingCard';
import { Destination } from '../types/destination.types';
import { DestinationCard } from '../components/DestinationCard/DestinationCard';

const DestinationSearchList = ({ route, navigation }) => {
    const { destinations } = route.params;

    useEffect(() => {
        console.log(destinations)
    }, [destinations])

    const destinationHandler = (item: Destination) => {
        navigation.navigate('FlightFilter', {
            destination: item
        });
    }

    const renderItem = (item: Destination) => (
        <TouchableOpacity style={[{marginBottom:16}]} onPress={(evt) => {
            destinationHandler(item);
        }}>
            <DestinationCard name={item.name} culture={item.culture} climate={item.climate}
                touristAttractions={item.touristAttractions} planet="Earth" />
        </TouchableOpacity>
    );

    return (
        <CommonView>
            <View style={[styles.title, {height:120}]}>
                <Text style={[common.mainTitle, { color: 'white', marginBottom: 12 }]}>Search Result</Text>
            </View>
            <View style={[common.centerVertical,{flex:1}]}>
                <FlatList
                    style={[{ flex: 1 }]} 
                    contentContainerStyle={[common.centerVertical,{width:"90%",marginLeft:0}]}
                    data={destinations}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </CommonView>
    );
};

const styles = StyleSheet.create({

    searchContainer: {
      justifyContent: "flex-start",
      height:120
    },
    title:{
        ...common.middleArea,
        justifyContent:"flex-end"
    },
  });

export default DestinationSearchList;