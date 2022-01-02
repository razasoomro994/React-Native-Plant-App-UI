import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ImageBackground, View, FlatList, TextInput, TouchableOpacity ,ScrollView} from 'react-native';

import Navigater from './src/config/Navigater';
import Home from './src/screen/Home';

export default function App() {
  return (
    
    <Navigater/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // marginTop:150
  },

  text:{
    fontSize:40,
    color:'blue'
    

  },

  card:{
    
    alignItems:'center',
    justifyContent:'center',
    width:300,
    height:100,
    
shadowColor: "blue",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 14,
  }
  // main1: {
  //   backgroundColor: 'orange',
  //   flex: 1,
  //   width: '100%'
  // },


  // main2: {
  //   backgroundColor: 'green',
  //   flex: 6,
  //   width: '100%'
  // },


  // main3: {
  //   backgroundColor: 'blue',
  //   flex: 1,
  //   width: '100%'
  // },
  // boxes:{
  
  //    marginTop:20,
  //    flexDirection:'row',
  //    flexWrap:'wrap',
  //    justifyContent:'space-around',
  //    alignItems:'center'

  // },

  // item:{
  //   backgroundColor:'white',
  //   width:100,
  //   height:100,
  //   alignItems:'center',
  //   justifyContent:'center',
  //   marginBottom:10

  // }

  // inputa: {
  //   marginTop: 60,
  //   height: 40,
  //   width: 280,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  // },
  // input: {
  //   height: 40,
  //   width: 280,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  // },
  // btn:{
  //   backgroundColor: 'teal' ,
  //   color: 'white',
  //   borderWidth: 1,
  //  width:'78%',
  //   marginTop:10,
  //   padding:8,
  //   alignItems:'center'

  // }

});
