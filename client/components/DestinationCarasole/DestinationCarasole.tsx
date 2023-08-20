import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Destination } from '../../types/destination.types';
import Carousel from 'react-native-snap-carousel';
import { DestinationCard } from '../DestinationCard/DestinationCard';

interface DestinationCarouselProps {
  destinations: Destination[]; 
}

const DestinationCarousel: React.FC<DestinationCarouselProps> = ({ destinations }) => {
  const renderItem = (item: Destination) => (
    <DestinationCard
      climate={item.climate}
      name={item.name}
      culture={item.culture}
      touristAttractions={item.touristAttractions}
      planet={item.planet}
    />
  );

  return (
    <Carousel
      data={destinations}
      renderItem={({ item }) => renderItem(item)}
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