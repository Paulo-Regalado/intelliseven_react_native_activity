import { Text, View, Image, Pressable, TextInput, Switch, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

const logoImage = require('../assets/logo-sm.png');
const dp = require('../assets/dp.png');
const lock = require('../assets/lock.png');
const darkmode = require('../assets/darkmode.png');

const Profile = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View className={isEnabled ? 'bg-gray-500 h-full' : 'white h-full'}>
            <View className={isEnabled ? "flex flex-row relative bg-red-400 items-start rounded-xl space-x-52  px-3 pt-8 pb-2 w-full h-36" : "flex flex-row relative bg-blue-400 items-start rounded-xl space-x-52  px-3 pt-8 pb-2 w-full h-36"}>
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
                <Text className={isEnabled ? "text-2xl text-white" : "text-2xl"}>Hello User!</Text>
                <View className="border border-gray-300 rounded-xl w-72 h-[88px] px-3 pt-2 mt-8">
                    <View className="flex flex-row items-center border-b border-gray-300 pb-2 space-x-36">
                        <View className="flex flex-row">
                            <Image source={lock} className="w-5 h-5 mx-1 p-1"></Image>
                            <Text>Password</Text>
                        </View>
                        <View>
                            <Pressable onPress={() => navigation.navigate('ChangesPass')}>
                                <Icon name="chevron-forward" size={25} color="gray" />
                            </Pressable>

                        </View>
                    </View>
                    <View className="flex flex-row items-center mb-5 space-x-28">
                        <View className="flex flex-row">
                            <Image source={darkmode} className="w-5 h-5 mx-1"></Image>
                            <Text>Dark Mode</Text>
                        </View>
                        <View>
                            <Switch
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                </View>
                <Pressable className={isEnabled ? "w-72 h-11 bg-red-400 rounded-md mt-5 items-center justify-center" : "w-72 h-11 bg-sky-600 rounded-md mt-5 items-center justify-center"}>
                    <Text className="text-white">Sign Out</Text>
                </Pressable>
            </View>

        </View>

    )
}

export default Profile