import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Card } from '@rneui/themed';
import { RootStackParamList } from '../screens/HomeScreen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
    userId: string;
    name: string;
    email: string;
    slack: string
}

const UserCard = ({email, name, userId, slack}: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <TouchableOpacity onPress={ () => navigation.navigate("SecondScreen", {
            userId: userId,
            name: name
        }) }>
            <Card containerStyle={{padding: 10}}>
                <View>
                    <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                        <View>
                            <Text style={{fontWeight: "bold", marginBottom: 10}}>{name}</Text>
                            <Text style={{color: "#59c1cc"}}>Slack Handle: {slack}</Text>
                        </View>

                        <View style={{flexDirection: "row"}}>
                            <Text style={{color: "#59c1cc"}}>ID: {userId}</Text>
                        </View>
                    </View>
                </View>
                <Card.Divider />
                <Text style={{textAlign: "center"}}>{email}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default UserCard;