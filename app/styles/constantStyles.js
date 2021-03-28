import { StyleSheet, Dimensions } from "react-native";

export const container = {
    view: {
        flex: 1,
        alignItems: "center",
    },
    small: {
        width: "80%",
        height: "10%",
    },
    medium: {
        width: "80%",
        height: "60%",
    },
};

export const colors = {
    primary: "#121212",
    secondary: "#1F1F1F",
    tertiary: "#2D2D2D",
    primaryTextColour: "#DFDFDF",
    placeholderTextColour: "#999999",
};

export const text = {
    h1: {
        fontSize: 70,
    },
    h2: {
        fontSize: 60,
    },
    h3: {
        fontSize: 50,
    },
    h4: {
        fontSize: 40,
    },
    p: {
        fontSize: 21,
    },
};

export const containerShadow = {
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
};
