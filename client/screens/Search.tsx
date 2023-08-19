import { View, Text, StyleSheet } from 'react-native';
import React, {useState } from 'react';
import { common } from '../config/style';
import CommonView from './CommonView';
import { NavigationProps } from '../Models/Navigation';
import { SearchTextInput } from '../components/SearchTextInput/SearchTextInput';
import { Destination } from '../types/Destination.types';
import { DestinationCard } from '../components/DestinationCard/DestinationCard';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const SearchScreen = ({ navigation }: NavigationProps) => {

    const desti: Destination[] = [
        {
          name: "Paris",
          culture: "European",
          climate: "Temperate",
          touristAttractions: "Eiffel Tower, Louvre Museum",
          planet: "Earth"
        },
        {
          name: "Tokyo",
          culture: "Japanese",
          climate: "Temperate",
          touristAttractions: "Shibuya Crossing, Tokyo Tower",
          planet: "Earth"
        }
      ];

    const [keyWord, setKeyWord] = useState<string>("")
    const [planet, setPlanetName] = useState<string>("Mercury")
    const [destinations,setDestinations] = useState<Destination[]>(desti)

    const renderItems = ({item}:any) => (
        <View>
          <DestinationCard {...item}/>
        </View>
      );

    const searchHandler = async () => {

    }

    const onChange = (test: string) => { }

    return (
        <>
            <CommonView>
                <View style={[styles.title, {height:120}]}>
                    <Text style={[common.mainTitle, { color: "white", marginBottom: 12 }]}>Search for "{planet}"</Text>
                </View>
                <View style={[common.centerVertical,styles.searchContainer]}>
                    <SearchTextInput onPress={()=>searchHandler()} lable='Where are you going next' onChange={onChange} />
                </View>
                <View style={[common.centerVertical,{height:"60%"}]}>
                    {/* <FlatList
                        data={desti}
                        renderItem={renderItems}
                    /> */}
                    <ScrollView  showsVerticalScrollIndicator={false}>
                    {destinations.map((data:Destination,index)=>(
                        <DestinationCard key={index} {...data}/>
                    ))}
                    </ScrollView>
                </View>
            </CommonView>
        </>
    )
}

const styles = StyleSheet.create({

    searchContainer: {
      justifyContent: "flex-start",
      height:120
    },
    title:{
        ...common.middleArea,
        justifyContent:"flex-end"
    }
  });

export default SearchScreen;