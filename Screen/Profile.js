import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import ProfileItems from '../Components/ProfileItems'

export default function Profile() {
    return(
        <View style={styles.container}>
            <Image
                style={{height:200}}
                source={{uri: require("../assets/profile.jpg")}}
            />
            <ProfileItems name="Username" value="Monica Mohammadi" />
            <ProfileItems name="Gmail" value="Monica@gmail.com" />
            <ProfileItems name="Gender" value="Female" />
            <ProfileItems name="Mobile" value="040443455" />
            <ProfileItems name="Address" value="Herat-Afghanistan" />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
    },
});