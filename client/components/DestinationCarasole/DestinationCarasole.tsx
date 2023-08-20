import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Carousel, { CarouselProps } from 'react-native-snap-carousel';
import { DestinationCard } from '../DestinationCard/DestinationCard';
import { common } from '../../config/style';
import { Destination } from '../../types/destination.types';


interface carasolDataProp{
  destinations:Destination[]
}

const DestinationCarousel = ({destinations}:carasolDataProp) => {
  let finalData:Destination[] = destinations.map((obj,index)=>({...obj,id:index+1}))

   const renderItems = (item:any) => {
      console.log(item);
      return (<DestinationCard climate={item.climate} name={"tem.name"} culture={"item.culture"} touristAttractions={"asdas"} planet={"earth"} />)
};
  return (
    <Carousel
    layout={'stack'}
      data={finalData}
      contentContainerCustomStyle={{display:"flex",flexDirection:"row",justifyContent:"center",marginLeft:20,top:12}}
      layoutCardOffset={12}
      renderItem={renderItems}
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