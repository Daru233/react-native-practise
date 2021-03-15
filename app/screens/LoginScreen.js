import 'react-native-gesture-handler';
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { container, text, colors } from "../styles/constantStyles";

function LoginScreen({ navigation }){     
    return (
        <View style={style.view}>
            <View style={style.text} >
                <Text style={style.h2}>Welcome to</Text>
                <Text style={style.h1}>BROTEIN</Text>
            </View>
            <Button title="Login" 
            onPress={() => 
                navigation.navigate("WelcomeScreen")
            } />
        </View>
    );
}

const style = StyleSheet.create({
    view: {
        ...container.view,
        backgroundColor: colors.primary,
    },
    text: {
        top: 40,
    },
    h2: {
        ...text.h2,
        color: colors.primaryTextColour,
    },
    h1: {
        ...text.h1,
        color: colors.primaryTextColour,
    },
})

export default LoginScreen;
