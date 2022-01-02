
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import Home from '../screen/Home';
import About from '../screen/About';
import Contact from '../screen/Contact';

const Stack = createNativeStackNavigator();

function Navigater() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen  options={{title:'My Home Screen', header:()=>null, 
      }
    }
        
        name="Home" component={Home} />



        <Stack.Screen options={{title:'Home Detail',header:()=>null, 
      }} name="About" component={About} />


        <Stack.Screen name="Contact" component={Contact} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigater;