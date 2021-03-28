import "react-native-gesture-handler";
import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
} from "react-native";
import {
    container,
    text,
    colors,
    containerShadow,
} from "../styles/constantStyles";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";
import axios from "axios";
import { useState, useEffect } from "react";

function LoginScreen({ navigation }) {
    const [profile, setProfile] = useState({ firstName: "", lastName: "" });

    const postURL = "http://192.168.0.4:8080/";

    const axiosConfig = {
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
        },
    };

    const requestObject = {
        firstName: profile.firstName,
        lastName: profile.lastName,
    };

    const buttonHandler = () => {
        console.log(JSON.stringify(profile));

        console.log("Sending request");

        axios
            .post(postURL, requestObject, axiosConfig)
            .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            });

        console.log("Request sent.");
    };

    return (
        <View style={style.view}>
            <View style={style.text}>
                <Text style={style.welcome}>
                    Current Object: {JSON.stringify(profile)}
                </Text>
            </View>

            <KeyboardAvoidingView style={style.loginContainer}>
                <View style={style.loginUser}>
                    <TextInput
                        value={profile.firstName}
                        onChangeText={(value) =>
                            setProfile({ ...profile, firstName: value })
                        }
                        style={style.email}
                        placeholder="Email"
                        placeholderTextColor={colors.placeholderTextColour}
                    />
                </View>

                <View style={style.loginPass}>
                    <TextInput
                        onChangeText={(value) =>
                            setProfile({ ...profile, lastName: value })
                        }
                        style={style.password}
                        placeholder="Password"
                        placeholderTextColor={colors.placeholderTextColour}
                    />
                </View>

                <TouchableOpacity onPress={buttonHandler}>
                    <View style={style.loginButton}>
                        <Text style={style.logginButtonText}>Login</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
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
        ...text.p,
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
        alignItems: "center",
        justifyContent: "space-evenly",
        ...containerShadow.shadow,
    },
    loginUser: {
        backgroundColor: colors.tertiary,
        ...container.small,
        borderRadius: 30,
        // bottom: 40,
        justifyContent: "center",
        ...containerShadow.shadow,
    },
    loginPass: {
        backgroundColor: colors.tertiary,
        ...container.small,
        borderRadius: 30,
        // bottom: 60,
        justifyContent: "center",
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
        borderRadius: 30,
        justifyContent: "center",
        ...containerShadow.shadow,
        alignItems: "center",
    },
    logginButtonText: {
        color: colors.primaryTextColour,
        ...text.h3,
    },
});

export default LoginScreen;
