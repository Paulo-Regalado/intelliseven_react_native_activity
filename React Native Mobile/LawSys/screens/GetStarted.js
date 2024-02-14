import { Text, View, Image, Pressable } from 'react-native';

const logoImage = require('../assets/logo.png');
const waveUp = require('../assets/wave-up.png');
const waveDown = require('../assets/wave-down.png');

const GetStarted = ({ navigation }) => {
    return (
        <View className="relative flex-1 items-center bg-white">
            <Image source={waveUp} className="w-full h-[150px]" />
            <View className="pt-12 mb-24 items-center">
                <Image source={logoImage} className="w-[168px] h-[209px]" />
            </View>
            <View className="p-10 w-screen items-center">
                <Pressable className="pb-5 mb-5 w-64 h-16" onPress={() => navigation.navigate('AccessCode')}>
                    <Text className="text-white text-center text-base bg-blue-500 p-2 rounded-lg">Get Started</Text>
                </Pressable>
            </View>
            <Image source={waveDown} className="w-96 h-36" />
        </View>
    )
}

export default GetStarted