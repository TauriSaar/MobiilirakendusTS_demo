import React from "react";
import {Image, TouchableOpacity} from "react-native";
import {styles} from "./style";

const GoogleLogin = () => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <Image source={require("../../assets/Google.png")} style={styles.image}/>
        </TouchableOpacity>
    )
}

export default React.memo(GoogleLogin)