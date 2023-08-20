import { View, Text, StyleSheet, ImageBackground,Animated } from 'react-native';
import React, { useEffect } from 'react';
import CommonView from './CommonView';
import { common, commonColor, commonFonts } from '../config/style';
import image from '../config/image';
import { SearchTextInput } from '../components/SearchTextInput/SearchTextInput';
import { PlanetCard } from '../components/PlanetCard/PlanetCard';
import DestinationCarousel from '../components/DestinationCarasole/DestinationCarasole';
import { api } from '../api/api';
import { Destination } from '../types/destination.types';
import * as SecureStore from 'expo-secure-store';
import { NavigationProps } from '../Models/Navigation';

const Home = ({navigation}:NavigationProps) => {
  const [destinations, setDestinations] = React.useState<Destination[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [searchTextInput, setSearchTextInput] = React.useState<string>("");
  const [user, setUser] = React.useState<any>(null);

  useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await SecureStore.getItemAsync('token');
                const id = await SecureStore.getItemAsync('user').then((user) => {
                    return user ? JSON.parse(user).id : null;
                });
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
                const userResponse = await api.get(`/user/${id}`);
                setUser(userResponse.data.name);

                // Fetch all detination names
                const response = await api.get('/destinations/all');
                // let data = await JSON.parse(response.data)
                setDestinations(response.data);
              
            } catch (error: any) {
                alert(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

  const handleSearch = async () => {
    setLoading(true);
    const result = await api.get(`/destinations/search?query=${searchTextInput}`,);
    const destinationList = result.data;
    navigation.navigate('DestinationSearchList', {
      destinations: result.data,
      searchName: searchTextInput
    });
  }

  const handleSearchChange = (text: string) => {
    setSearchTextInput(text);
  }

  return (
    <CommonView>
      <View style={[styles.profileContainer, common.centerEndHorizontal]}>
        <Text style={[commonFonts.profile, commonColor.white]} >Hi {user}!</Text>
        <ImageBackground
          source={image.Titan} // Replace with your image path
          style={styles.image}
          imageStyle={{ borderRadius: 24 }}
        />
      </View>
      <View style={[common.centerVertical, styles.searchContainer]}>
        <SearchTextInput lable='Where are you going next' onChange={handleSearchChange} onPress={handleSearch} />
      </View>
      <View style={styles.planetContainer}>
        <PlanetCard></PlanetCard>
      </View>
       <View style={[{height:"36%"}]}>
         <DestinationCarousel destinations={destinations} /> 
      </View>
    </CommonView>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    height: "18%",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 12
  },
  image: {
    height: 48,
    width: 48,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  searchContainer: {
    height: "10%",
    justifyContent: "flex-end",
  },
  planetContainer:{
    height:200,
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-end"
  }
});

export default Home;