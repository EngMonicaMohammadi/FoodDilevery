import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ImageSlider from 'react-native-image-slider'
import FoodItem from '../Component/FoodItem'

export default function Home() {
    let Image = [
        require("../assets/installation.png"),
        require("../assets/LoginForm.png"),
        require("../assets/contactList.png")
    ]
  return (
    <View style={{flex:1}}>
        <View style={styles.container}>
            <ImageSlider images={Image}  style={styles.image}
            autoPlayWithInterval={6000}></ImageSlider>
        </View>
        <Text>Categories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height:300,
        width:300
    },
    image:{
        borderRadius:10
    },
    CategoryText:{
        margin:10
    }
  });
