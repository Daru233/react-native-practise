import 'react-native-gesture-handler';
import React from 'react'
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LoginScreen({ navigation }) {
    return (
        <View>
            <Text>Login Screen</Text>
            <Button title="Login" 
            onPress={() => 
                navigation.navigate("WelcomeScreen")
            } />
        </View>
    );
}

export default LoginScreen;
