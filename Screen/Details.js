import React from 'react';
import { StyleSheet, Text, View,Image, Button, ScrollView} from 'react-native';
import { Rating } from "react-native-ratings";
import { useRoute } from "@react-navigation/native"

export default function Details() {
const {name,price,image,details} = useRoute().params;
     return (
    <ScrollView style={styles.container}>
        <Image 
            style={{height:190}}
            source={{uri:image}}
        />
        <View style={styles.title}>
            <Text style={styles.title}>{name}</Text>
            <Text>price:{price}</Text>
            <Rating showRating imageSize={30}/>
        </View>
        <View style={{margin:8}}>
            <Text>introduction</Text>
            <Text>{details}</Text>
        </View>
        <Button
            title="Added to favorite"
            color="#777777"
        />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    title:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:18,
        marginTop:8
    }
 });