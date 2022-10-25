import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';

import { HomeScreen, SecondScreen } from './screens';


import { createNativeStackNavigator } from '@react-navigation/native-stack';


type RootStackParamList = {
  HomeScreen: undefined;
  SecondScreen: {
    userId: string;
    name: string;
  },
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;