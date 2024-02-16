import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import SignUp from "./src/screens/auth/SignUp";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import config from "./config"; // .env didn't work for me, so I used a config.js file

const App = () => {
    const { webClientId, iosClientId } = config;

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            webClientId: webClientId,
            offlineAccess: true,
            iosClientId: iosClientId,
        });
    }, []);

    return (
        <SafeAreaView>
            <SignUp />
        </SafeAreaView>
    );
};

export default React.memo(App);
