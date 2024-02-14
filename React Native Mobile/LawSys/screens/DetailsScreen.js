import React from 'react'
import { Text, View, Image, Button, Pressable, Alert } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Details Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

export default DetailsScreen