import React from 'react'
import { Image, ImageBackground, StyleSheet, View, Text, Button } from 'react-native';

function WelcomeScreen() {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/weightsrack.png")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/brotein.png')} />
                <Text style={styles.textStyle}>Sponsored by Christian Leal</Text>
            </View>

            <View style={styles.loginButton}>
                <Text style={buttonTextStyles.styles}>Log In</Text>
            </View>

            <View style={styles.registerButton}>
                <Text style={buttonTextStyles.styles}>Register</Text>
            </View>

        </ImageBackground>
    );
}

const buttonTextStyles = StyleSheet.create({
    styles: {
        color: "white",
        alignSelf: 'center',
        fontSize: 23,
        top: 20,
    }
})

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
    }, 
    logoContainer:{
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    loginButton: {
        width: "80%",
        height: 70,
        backgroundColor: "#fc5c65",
        borderRadius: 25,
        bottom: 80,
    },
    registerButton: {
        width: "80%",
        height: 70,
        backgroundColor: "#4ecde4",
        borderRadius: 25,
        bottom: 60,
    },
    logo: {
        width: 400,
        height: 400,
        bottom: 120,
    },
    textStyle: {
        color: "white",
        bottom: 300,
        fontSize: 25,
    }
})

export default WelcomeScreen;