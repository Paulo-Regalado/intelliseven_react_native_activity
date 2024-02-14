import { Text, View, Image, Pressable, TextInput, Switch, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const logoImage = require('../assets/logo-sm.png');
const dp = require('../assets/dp.png');

const ChangesPass = () => {
    return (
        <View>
            <View className="flex flex-row relative bg-blue-400 items-start rounded-xl space-x-52  px-3 pt-8 pb-2 w-full h-36">
                <View className="flex flex-row space-x-1">
                    <Image source={logoImage} className="w-7 h-7" />
                    <Text className="text-xl text-white">LAWSYS</Text>
                </View>
                <View className="flex flex-row items-center">
                    <Icon name="notifications-outline" size={25} color="white" />
                </View>
                <Image source={dp} className="absolute top-16 right-28 w-36 h-36" />
            </View>
            <View className="flex items-center mt-20">
                <Text className="text-2xl">Hello User!</Text>
                <View>

                    <Text className="text-left text-xs text-gray-600 mt-5">Password</Text>
                    <TextInput className="w-80 h-10 p-2 mt-1 rounded-lg border border-gray-300" placeholder="•••••••••••" />
                    <Text className="text-left text-xs text-gray-600 mt-5">Confirm Password</Text>
                    <TextInput className="w-80 h-10 p-2 mt-1 rounded-lg border border-gray-300" placeholder="•••••••••••" />
                    <Text className="text-left text-xs text-gray-600 mt-5">E-mail address</Text>
                    <TextInput className="w-80 h-10 p-2 mt-1 rounded-lg border border-gray-300" placeholder="email.gmail.com" />
                    <Text className="text-right text-xs text-gray-600 mt-1">Resend code</Text>
                    <Text className="text-left text-xs text-gray-600 mt-5">Confirmation Code:</Text>
                    <View className="flex flex-row space-x-2">
                        <TextInput className="w-10 h-10 p-2 mt-1 rounded-lg border border-gray-300" placeholder="" />
                        <TextInput className="w-10 h-10 p-2 mt-1 rounded-lg border border-gray-300" placeholder="" />
                        <TextInput className="w-10 h-10 p-2 mt-1 rounded-lg border border-gray-300" placeholder="" />
                        <TextInput className="w-10 h-10 p-2 mt-1 rounded-lg border border-gray-300" placeholder="" />
                        <TextInput className="w-10 h-10 p-2 mt-1 rounded-lg border border-gray-300" placeholder="" />
                        <TextInput className="w-10 h-10 p-2 mt-1 rounded-lg border border-gray-300" placeholder="" />
                    </View>

                </View>


                <Pressable className="w-80 h-11 bg-sky-600 rounded-md mt-5 items-center justify-center">
                    <Text className="text-white">Change Password</Text>
                </Pressable>
            </View>


        </View>

    )
}

export default ChangesPass