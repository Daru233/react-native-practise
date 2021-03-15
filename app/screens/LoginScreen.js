import 'react-native-gesture-handler';
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { container, text, colors, containerShadow} from "../styles/constantStyles";

function LoginScreen({ navigation }){     
    return (
        <View style={style.view}>

            <View style={style.text} >
                <Text style={style.welcome}>Welcome to</Text>
                <Text style={style.brotein}>BROTEIN</Text>
            </View>

            {/* <Button title="Login" 
            onPress={() => 
                navigation.navigate("WelcomeScreen")
            } /> */}

            <View style={style.loginContainer}>

                <Text style={style.loginText} >Log in</Text>

                <View style={style.loginUser}>
                    <Text style={style.email} >email</Text>
                </View>

                <View style={style.loginPass}>
                    <Text style={style.password} >password</Text>
                </View>

                <View style={style.loginButton}>
                    <Text style={style.logginButtonText} >Log in</Text>
                </View>

            </View>

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
    welcome: {
        ...text.h2,
        color: colors.primaryTextColour,
    },
    brotein: {
        ...text.h1,
        color: colors.primaryTextColour,
    },
    loginText: {
        ...text.h3,
        color: colors.primaryTextColour,
        bottom: 50,
    },
    loginContainer: {
        backgroundColor: colors.secondary,
        ...container.medium,
        borderRadius: 30,
        top: 90,
        alignItems: 'center',
        justifyContent: "space-evenly",
        ...containerShadow.shadow,
    },
    loginUser: {
        backgroundColor: colors.tertiary,
        ...container.small,
        borderRadius: 30,
        bottom: 40,
        justifyContent: 'center',
        ...containerShadow.shadow,
    },
    loginPass: {
        backgroundColor: colors.tertiary,
        ...container.small,
        borderRadius: 30,
        bottom: 60,
        justifyContent: 'center',
        ...containerShadow.shadow,
    },
    email: {
        color: colors.primaryTextColour,
        ...text.p,
        left: 25,
    },
    password: {
        color: colors.primaryTextColour,
        ...text.p,
        left: 25,
    },
    loginButton: {
        backgroundColor: colors.tertiary,
        width: "50%",
        height: "12%",
        borderRadius: 30,
        bottom: 30,
        justifyContent: 'center',
        ...containerShadow.shadow,
        alignItems: "center",
    },
    logginButtonText: {
        color: colors.primaryTextColour,
        ...text.p,
    },
})

export default LoginScreen;
