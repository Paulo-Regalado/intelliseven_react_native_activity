import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, Button, Pressable, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import GetStarted from './screens/GetStarted';
import AccessCode from './screens/AccessCode';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Profile from './screens/Profile';
import ChangesPass from './screens/ChangesPass';
const stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const BottomTab = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent";
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: '#ffff' }}
      tabBarOptions={{
        activeTintColor: '#f0edf6', // Change this to your preferred active color
        inactiveTintColor: '#3e2465',
        showLabel: false,
      }}
      tabBarStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={30} color={'gray'} />;
        },
      })}
    >
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: '',
      }} />
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: '',
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <stack.Screen name="GetStarted" component={GetStarted} />
        <stack.Screen name="AccessCode" component={AccessCode} />
        <stack.Screen name="Login" component={Login} options={{
          animation: 'slide_from_bottom',
        }} />
        <stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
        <stack.Screen name="BottomTab" component={BottomTab} />
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Profile" component={Profile} />
        <stack.Screen name="ChangesPass" component={ChangesPass} />


      </stack.Navigator>


    </NavigationContainer >
  );
}

