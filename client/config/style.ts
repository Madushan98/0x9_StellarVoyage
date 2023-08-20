import {StyleSheet } from 'react-native'

export const  common = StyleSheet.create({
    centerVertical: {
      width:"100%",
      display:'flex',
      flexDirection:"column",
      alignItems:"center"
    },
    centerHorizontal: {
        width:"85%",
        display:'flex',
        flexDirection:"row",
        alignItems:"center"
      },
    middleArea:{
        width:"95%",
        display:'flex',
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    mainTitle:{
        fontSize:32,
        fontWeight:"700",
        fontFamily:"Mulish"
    },
    topArea:{
        height:"28%",
    },
    
     modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark semi-transparent background
  },

  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxWidth: 400,
  },

  modalHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  modalCloseButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },

  modalCloseButtonText: {
    color: 'blue', // Customize the color
  },

  });

export const  commonColor = StyleSheet.create({
    white: {
      color:"white"
    },
    mainTitle:{
        fontSize:32,
        fontWeight:"700",
        fontFamily:"Mulish"
    }
  });

  export const commonFonts = StyleSheet.create({
    mulish:{
        fontFamily:"Mulish"
    }
  })


export const commonListTile = StyleSheet.create({
    tileContainer: {
        // New style for the tile container
        backgroundColor: '#e1e1e1',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    tileText: {
        // New style for the tile text
        fontSize: 16,
    },
})