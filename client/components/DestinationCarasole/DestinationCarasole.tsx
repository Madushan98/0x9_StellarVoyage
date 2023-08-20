import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Carousel, { CarouselProps } from 'react-native-snap-carousel';
import { DestinationCard } from '../DestinationCard/DestinationCard';
import { common } from '../../config/style';
import { Destination } from '../../types/destination.types';


interface carasolDataProp{
  data:Destination[]
}

const DestinationCarousel = ({data}:carasolDataProp) => {

//     const data = [
//   { id: 1, climate: 'adadad' },
//   { id: 2, climate: 'adadad' },
//   { id: 3, climate: 'adadad' },
// ];

   const renderItem = (item:Destination) => (
      <DestinationCard climate={item.climate} name={"tem.name"} culture={"item.culture"} touristAttractions={"asdas"} planet={"earth"} />
  );

  return (
    <Carousel
    layout={'stack'} 
      data={data}
      contentContainerCustomStyle={{display:"flex",flexDirection:"row",justifyContent:"center",marginLeft:20,top:12}}
      layoutCardOffset={12}
      renderItem={renderItem}
      sliderWidth={500}
      itemWidth={370}
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