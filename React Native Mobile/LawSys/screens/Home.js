import { Text, View, Image, Pressable, TextInput, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const logoImage = require('../assets/logo-sm.png');
const profile = require('../assets/profile.png');
const icon1 = require('../assets/icon1.png');
const icon2 = require('../assets/icon2.png');
const icon3 = require('../assets/icon3.png');
const icon4 = require('../assets/icon4.png');
const icon5 = require('../assets/icon5.png');
const icon6 = require('../assets/icon6.png');
const weather = require('../assets/weather_crop.png');

let m = moment().format();
time = moment().format('hh:mm');
date = moment().format('D MMMM  YYYY');
am = moment().format('A').replace('AM', 'A.M.').replace('PM', 'P.M.');
const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <View>
                <View className="flex flex-row bg-sky-100 items-center space-x-60 px-3 pt-8 pb-2 w-full h-[66px]">
                    <Image source={logoImage} className="w-7 h-7" />
                    <View className="flex flex-row items-center space-x-3">
                        <Icon name="notifications-outline" size={25} color="black" />
                        <Image source={profile} className="w-6 h-6" />
                    </View>
                </View>
                <View className="px-3 mt-3">
                    <Text className="text-xl font-semibold">Hello, Juan Dela Cruz</Text>
                    <Text className="text-base">Welcome to LawSys.</Text>
                </View>
                <View className="px-3 mt-4">
                    <View className="flex flex-row space-x-5 bg-[#329dfd] rounded-md w-[337px] h-[134px]">
                        <View className="flex text-center justify-center border-r border-[#ffffff3d] p-5 my-2">
                            <Image source={weather} />
                        </View>
                        <View className="flex text-center justify-center p-3">
                            <Text className="text-white text-sm font-medium">{date}</Text>
                            <View className="flex flex-row">
                                <Text className="text-white text-4xl font-medium mt-7">{time}</Text>
                                <Text className="text-white text-sm font-medium mt-11 mx-2">{am}</Text>
                            </View>

                        </View>
                    </View>
                    <Text className="text-2xl font-semibold mt-5">Menu</Text>
                </View>
                <View className="flex flex-row items-center space-x-9 px-6 mx-3 mt-3 w-[336px] h-[82px] border border-gray-300 rounded-md bg-sky-200">
                    <View className="bg-blue-500 rounded-full h-14 p-3" >
                        <Image source={icon1} />
                    </View>
                    <View>
                        <Text className="text-base mb-0 pb-0">Cases</Text>
                        <View className="flex flex-row items-center">
                            <Text className="text-2xl text-blue-500">•</Text>
                            <Text className="text-xs px-1">3 Notifications</Text>
                        </View>

                    </View>
                </View>
                <View className="flex flex-row items-center space-x-9 px-6 mx-3 mt-3 w-[336px] h-[82px]  rounded-md bg-red-100">
                    <View className="bg-red-500 rounded-full h-14 p-3" >
                        <Image source={icon2} />
                    </View>
                    <View>
                        <Text className="text-base">Case Records</Text>
                        <View className="flex flex-row items-center">
                            <Text className="text-2xl text-red-500">•</Text>
                            <Text className="text-xs px-1">3 Notifications</Text>
                        </View>

                    </View>
                </View>
                <View className="flex flex-row items-center space-x-9 px-6 mx-3 mt-3 w-[336px] h-[82px]  rounded-md bg-sky-200">
                    <View className="bg-blue-500 rounded-full h-14 p-3" >
                        <Image source={icon3} />
                    </View>
                    <View>
                        <Text className="text-base">Court Hearings</Text>
                        <View className="flex flex-row items-center">
                            <Text className="text-2xl text-blue-500">•</Text>
                            <Text className="text-xs px-1">3 Notifications</Text>
                        </View>

                    </View>
                </View>
                <View className="flex flex-row items-center space-x-9 px-6 mx-3 mt-3 w-[336px] h-[82px]  rounded-md bg-red-100">
                    <View className="bg-red-500 rounded-full h-14 p-3" >
                        <Image source={icon4} />
                    </View>
                    <View>
                        <Text className="text-base">Meetings</Text>
                        <View className="flex flex-row items-center">
                            <Text className="text-2xl text-red-500">•</Text>
                            <Text className="text-xs px-1">3 Notifications</Text>
                        </View>

                    </View>
                </View>
                <View className="flex flex-row items-center space-x-9 px-6 mx-3 mt-3 w-[336px] h-[82px]  rounded-md bg-sky-200">
                    <View className="bg-blue-500 rounded-full h-14 p-3" >
                        <Image source={icon5} />
                    </View>
                    <View>
                        <Text className="text-base">Special Projects</Text>
                        <View className="flex flex-row items-center">
                            <Text className="text-2xl text-blue-500">•</Text>
                            <Text className="text-xs px-1">3 Notifications</Text>
                        </View>

                    </View>
                </View>
                <View className="flex flex-row items-center space-x-9 px-6 mx-3 mt-3 w-[336px] h-[82px]  rounded-md bg-red-100">
                    <View className="bg-red-500 rounded-full h-14 p-3" >
                        <Image source={icon6} />
                    </View>
                    <View>
                        <Text className="text-base">ROP's</Text>
                        <View className="flex flex-row items-center">
                            <Text className="text-2xl text-red-500">•</Text>
                            <Text className="text-xs px-1">3 Notifications</Text>
                        </View>

                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

export default Home