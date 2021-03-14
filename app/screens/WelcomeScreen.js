import React from 'react'
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen() {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/brotein.png')} />
                <Text>sponsored by Christian Leal</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

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
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecde4",
    },
    logo: {
        width: 300,
        height: 300,
    }
})

export default WelcomeScreen;