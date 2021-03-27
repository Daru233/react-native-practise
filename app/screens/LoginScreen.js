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
    // const [profile, setProfile] = useState("");

    const [profile, setProfile] = useState({ firstName: "", lastName: "" });

    // useEffect(() => {
    //     fetch("http://localhost:5000/profiles")
    //         .then((response) => response.json())
    //         .then((json) => console.log(json));
    // }, []);

    // useEffect(() => {
    //     axios
    //         .get("https://jsonplaceholder.typicode.com/todos/1")
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);

    const buttonHandler = () => {
        console.log(JSON.stringify(profile));
        // TODO - send profile object to express backend via POST
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
