import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import CommonView from './CommonView';
import {common} from '../config/style';
import {PricingCard} from '../components/PricingCard/PricingCard';
import { Destination } from '../types/destination.types';
import { DestinationCard } from '../components/DestinationCard/DestinationCard';

const DestinationSearchList = ({route, navigation}) => {
    const {destinations} = route.params;

    const destinationHandler = (item: Destination) => {
        navigation.navigate('FlightFilter', {
            destination: item
        });
    }

    const renderItem = (item: Destination) => (
        <TouchableOpacity onPress={destinationHandler}>
            <DestinationCard name={item.name} culture={item.culture} climate={item.climate} 
            touristAttractions={item.touristAttractions} planet="Earth" />
        </TouchableOpacity>    
    );

    return (
        <CommonView>
            <View style={[common.middleArea, common.topArea]}>
                <Text style={[common.mainTitle, {color: 'white', marginBottom: 12}]}>Search Result</Text>
            </View>
            <View>
                <FlatList
                    data={destinations}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </CommonView>
    );
};

export default DestinationSearchList;