import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Destination } from '../../types/destination.types';
import Carousel from 'react-native-snap-carousel';
import { DestinationCard } from '../DestinationCard/DestinationCard';

const DestinationCarousel = (destinations:Destination[]) => {

    const data = [
  { id: 1, climate: 'adadad' },
  { id: 2, climate: 'adadad' },
  { id: 3, climate: 'adadad' },
];

   const renderItem = (item:Destination) => (
      <DestinationCard climate={item.climate} name={''} culture={''} touristAttractions={''} planet={''} />
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={300}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 300,
    height: 150,
  },
  itemText: {
    fontSize: 18,
  },
});

export default DestinationCarousel;