import { Text, View, Image, Pressable, TextInput } from 'react-native';

const logoImage = require('../assets/logo.png');
const waveUp = require('../assets/wave-up2.png');
const waveDown = require('../assets/wave-down2.png');

const AccessCode = ({ navigation }) => {
    return (
        <View className="relative flex-1 items-center bg-white">
            <Image source={waveUp} className="w-full h-[200px]" />
            <View className="pt-1 mb-10 items-center">
                <Image source={logoImage} className="w-[168px] h-[209px]" />
            </View>
            <TextInput className="w-80 h-10 p-2 rounded-lg border border-gray-500" placeholder="input access code..." />
            <View className="p-10 w-screen items-center">
                <Pressable className="w-64 h-16" onPress={() => navigation.navigate('Login')}>
                    <Text className="text-white text-center text-base bg-blue-500 p-2 rounded-lg">Submit</Text>
                </Pressable>
            </View>
            <Image source={waveDown} className="w-full h-[190px]" />
        </View>
    )
}

export default AccessCode