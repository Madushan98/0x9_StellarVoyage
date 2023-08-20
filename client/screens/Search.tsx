import { View, Text, StyleSheet } from 'react-native';
import React, {useState } from 'react';
import { common } from '../config/style';
import CommonView from './CommonView';
import { NavigationProps } from '../Models/Navigation';
import { SearchTextInput } from '../components/SearchTextInput/SearchTextInput';
import { DestinationCard } from '../components/DestinationCard/DestinationCard';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Destination } from '../types/destination.types';

const SearchScreen = ({ navigation }: NavigationProps) => {

    const desti: Destination[] = [
        {
          name: "Paris",
          culture: "European",
          climate: "Immerse yourself in the mysteries of Neptune's moon and its dynamic geysers.",
          touristAttractions: "Eiffel Tower, Louvre Museum",
          planet: "Earth"
        },
        {
          name: "Tokyo",
          culture: "Japanese",
          climate: "Immerse yourself in the mysteries of Neptune's moon and its dynamic geysers.",
          touristAttractions: "Shibuya Crossing, Tokyo Tower",
          planet: "Earth"
        },
        {
          name: "Ausri",
          culture: "Japanese",
          climate: "Immerse yourself in the mysteries of Neptune's moon and its dynamic geysers.",
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
                <View style={[common.centerVertical,{flex:1}]}>
                    {/* <FlatList
                        data={desti}
                        renderItem={renderItems}
                    /> */}
                    <ScrollView style={[{flex:1}]} contentContainerStyle={common.centerVertical}  >
                    {destinations.map((data:Destination,index)=>(
                        <View style={{marginBottom:16}} key={index} >
                          <DestinationCard{...data}/>
                        </View>
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