import { View, Text, StyleSheet, ImageBackground,Animated } from 'react-native';
import React from 'react';
import CommonView from './CommonView';
import { common, commonColor, commonFonts } from '../config/style';
import image from '../config/image';
import { SearchTextInput } from '../components/SearchTextInput/SearchTextInput';
import { PlanetCard } from '../components/PlanetCard/PlanetCard';


const Home = () => {

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
        <SearchTextInput lable='Where are you going next' onChange={onChange} />
      </View>
      <View style={styles.planetContainer}>
        <PlanetCard></PlanetCard>
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