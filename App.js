import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { useDeviceOrientation, useDimensions } from "@react-native-community/hooks";
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  console.log("App Start Success");
  return <WelcomeScreen />;
}