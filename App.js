import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { useDeviceOrientation, useDimensions } from "@react-native-community/hooks";

export default function App() {

  return (
    <View style={{
      backgroundColor: "white",
      flex: 1, // grows to take the available free space, 1 = full, 0.5 half etc.. - default direction is down/ column
      flexDirection: "row",
    }}>
      <View style={{ // shift + alt + down arrow to duplicate code in code
        backgroundColor: "dodgerblue", // there is 4 segment from the child views, 2/4 segments are being taken up by dodger blue 
        width: 100,
        height: 100,          
      }}/>
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,    
      }}/>
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100,    
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // will grow x, y to fill free space
    backgroundColor: '#fff',
  },
}); 
