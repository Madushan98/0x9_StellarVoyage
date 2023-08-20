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


const Home = () => {
  const [destinations, setDestinations] = React.useState<Destination[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
        const fetchData = async () => {
            try {
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

  function onChange(text: string) { }

  return (
    <CommonView>
      <View style={[styles.profileContainer, common.centerEndHorizontal]}>
        <Text style={[commonFonts.profile, commonColor.white]} >Hi Name !</Text>
        <ImageBackground
          source={image.Titan} // Replace with your image path
          style={styles.image}
          imageStyle={{ borderRadius: 24 }}
        />
      </View>
      <View style={[common.centerVertical, styles.searchContainer]}>
        <SearchTextInput lable='Where are you going next' onChange={onChange} onPress={function (): void {
          throw new Error('Function not implemented.');
        } } />
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