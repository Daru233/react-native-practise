import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  console.log("App Started")

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};