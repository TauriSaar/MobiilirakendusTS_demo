import React from "react";
import {Image, TouchableOpacity} from "react-native";
import {styles} from "./style";

import {GoogleSignin, statusCodes} from "@react-native-google-signin/google-signin";

const GoogleLogin = () => {
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('userInfo =>', userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log("User cancelled the login flow");
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log("Sign in is in progress");
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log("Play services not available or outdated");
            } else {
                console.log("Some other error happened");
            }
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={signIn} style={styles.container}>
            <Image source={require("../../assets/Google.png")} style={styles.image}/>
        </TouchableOpacity>
    )
}

export default React.memo(GoogleLogin)