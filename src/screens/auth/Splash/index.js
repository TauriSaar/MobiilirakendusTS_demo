import React from "react";
import {
    Text,
    View,
    Image
} from "react-native";
import {styles} from "./styles";

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require("../../../assets/splash_image.png")}/>
            <Text style={styles.title}>You'll Find</Text>
            <Text style={[styles.title, styles.innerTitle]}>All You Need</Text> 
            <Text style={styles.title}>Here!</Text>
        </View>
    )
}

export default Splash