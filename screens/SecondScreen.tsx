import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './HomeScreen';

type SecondNavProp = NativeStackScreenProps<RootStackParamList, 'SecondScreen'>;

const SecondScreen = ({navigation, route}: SecondNavProp) => {

  const {name, userId} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
  })
  }, [])

  return (
    <View>
      <Text>{name}</Text>
      <TextInput/>
    </View>
  )
}

export default SecondScreen;