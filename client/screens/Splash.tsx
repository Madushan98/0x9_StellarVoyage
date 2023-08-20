import React from 'react';
import { View, Text,StyleSheet, ImageBackground } from 'react-native';
import image from '../config/image';
import { common } from '../config/style';
import themecolor from '../config/themecolor';

const SplashScreenComponent = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image.Front} // Update the image file path
        style={styles.imageBackground}
      >
        <View style={[styles.box,common.centerVertical]}>
            <Text style={{fontSize:38,color:"white",fontWeight:"800"}}>Steller{<Text style= {{fontSize:38,color:"#FFD55F"}}>Voyage</Text>}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' for different image resizing options
 // or 'flex-start', 'flex-end', 'space-between', etc.
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  },
  box:{
    top:"38%",
    height:160,
    width:"90%",
    backgroundColor:themecolor.topContainer,
    borderRadius:32,
    justifyContent:'center'
}

});

export default SplashScreenComponent;