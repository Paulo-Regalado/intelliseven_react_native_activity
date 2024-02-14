import { Text, View, Image, Pressable, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const socmed = require('../assets/socmed.png')
// const arrowdown = require('../assets')


const Login = ({ navigation }) => {
    return (
        <View className="relative flex-1 items-center bg-sky-600">
            <View className="bg-white items-center justify-center w-[365px] h-1/2 rounded-2xl pt-5 pb-3">
                <Text className="text-2xl">Sign In</Text>
                <View>
                    <Text className="text-left text-xs text-gray-600 mt-5">E-mail address</Text>
                    <TextInput className="w-80 h-10 p-2 mt-1 rounded-lg border border-gray-500" placeholder="example@gmail.com" />
                    <Text className="text-left text-xs text-gray-600 mt-5">Password</Text>
                    <TextInput className="w-80 h-10 p-2 mt-1 rounded-lg border border-gray-500" placeholder="•••••••••••" />
                    <Text className="text-right text-xs text-gray-600 mt-1">Forgot password?</Text>
                </View>
                <Pressable className="pt-5 mb-5 w-48 h-16" onPress={() => navigation.navigate('BottomTab')}>
                    <Text className="text-white text-center text-base bg-blue-500 p-2 rounded-lg">Sign in</Text>
                </Pressable>
                <View className="items-center border-t border-gray-300  w-full relative mt-2">
                    <Text className="absolute bottom-[90%] bg-white px-2">Sign In with</Text>
                    <Image source={socmed} className="w-[120px] h-[40px] mt-5"></Image>
                </View>

            </View>
            <View className="p-3 mt-20">
                <Text className="text-white text-2xl mb-3">Lorem Ipsum</Text>
                <Text className="text-white text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis ligula vitae nunc volutpat gravida. Praesent feugiat imperdiet fermentum. Curabitur sit amet viverra risus</Text>
                <Pressable onPress={() => navigation.navigate('SignUp')}>
                    <View className="flex flex-row-reverse items-end">
                        <Icon name="chevron-down" size={25} color="white" />
                        <Text className="text-white text-lg mt-5 pt-11">Sign Up</Text>
                    </View>
                </Pressable>



            </View>



        </View>
    )
}

export default Login