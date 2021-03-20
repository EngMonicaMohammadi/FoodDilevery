import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function FoodItem({name,Image, price}) {
    
   
  return (
    <View style={{flex:1}}>
        <Image  source={{uri: require("../assets/installation.png")}}/>

    </View>
  );
}

const styles = StyleSheet.create({
   
  });
