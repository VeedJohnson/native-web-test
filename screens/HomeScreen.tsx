import React, {useLayoutEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { Input, Image } from '@rneui/themed';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import UserCard from '../components/UserCard';

import {Users} from "../data/data";

export type RootStackParamList = {
  HomeScreen: undefined;
  SecondScreen: {
    userId: string;
    name: string;
  },
};

export type HomeNavProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({navigation}: HomeNavProps) => {
  const [input, setInput] = useState<string>('');

  useLayoutEffect(()=> {
      navigation.setOptions({
          headerShown: false,
      })
  }, [])

  return (
    <ScrollView style={{backgroundColor: "#59c1cc"}}>
        <Image 
            source={{uri: "https://img.freepik.com/free-vector/happy-united-business-team_74855-6520.jpg"}}
            containerStyle={styles.img}
        />
              {/* <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      /> */}


        <Input 
            placeholder='Search by Name'   
            value={input} 
            onChangeText={setInput}
            containerStyle={{backgroundColor: "white", paddingTop: 5, paddingBottom: 0, paddingHorizontal: 10}} 
        />

        {
            Users?.filter((user: UserList) => 
                user.value.name.toLowerCase().includes(input)
            )
            .map(({id, value: {email, name, slack}}: UserList) => {
                return <UserCard key={id} email={email} name={name} slack={slack} userId={id} />
            })
        }
    </ScrollView>
)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E8BD',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ADBDFF',
    padding: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 40,
  },
  img: {
    width: "100%",
    height: 260
  }
});

export default HomeScreen;