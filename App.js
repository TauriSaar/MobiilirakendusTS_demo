import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import SignIn from "./src/screens/auth/SignIn";
import SignUp from "./src/screens/auth/SignUp";
import Splash from "./src/screens/auth/Splash";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider } from "react-native-safe-area-context";

import config from "./config"; // .env didn't work for me, so I used a config.js file
import { colors } from "./src/utils/colors";

const App = () => {
    const {webClientId, iosClientId} = config;

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            webClientId: webClientId,
            offlineAccess: true,
            iosClientId: iosClientId,
        });
    }, []);

    const Stack = createNativeStackNavigator();

    const theme = {
        colors: {
            background: colors.white,
        },
    };

    return (
        <SafeAreaProvider>
            <NavigationContainer theme={theme}>
                <Stack.Navigator>
                    <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
                    <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
                    <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default React.memo(App);
