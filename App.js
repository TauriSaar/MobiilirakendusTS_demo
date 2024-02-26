import React, { useEffect } from "react";
import { Image } from 'react-native';

import SignIn from "./src/screens/auth/SignIn";
import SignUp from "./src/screens/auth/SignUp";
import Splash from "./src/screens/auth/Splash";

import Home from "./src/screens/app/Home";
import Favorites from "./src/screens/app/Favorites";
import Profile from "./src/screens/app/Profile";
import ProductDetails from "./src/screens/app/ProductDetails";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SafeAreaProvider } from "react-native-safe-area-context";

import config from "./config"; // .env didn't work for me, so I used a config.js file
import { colors } from "./src/utils/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let icon;

                    if (route.name === "Home") {
                        icon = focused
                        ? require('./src/assets/tabs/home_active.png')
                        : require('./src/assets/tabs/home.png');
                    } else if (route.name === "Favorites") {
                        icon = focused
                        ? require('./src/assets/tabs/bookmark_active.png')
                        : require('./src/assets/tabs/bookmark.png');
                    } else if (route.name === "Profile") {
                        icon = focused
                        ? require('./src/assets/tabs/profile_active.png')
                        : require('./src/assets/tabs/profile.png');
                    }

                    return <Image source={icon} style={{ width: 24, height: 24 }} />;
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {borderTopColor: colors.lightGray}
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

const App = () => {
    const {webClientId, iosClientId} = config;

    const isSignedIn = true;

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            webClientId: webClientId,
            offlineAccess: true,
            iosClientId: iosClientId,
        });
    }, []);

    const theme = {
        colors: {
            background: colors.white,
        },
    };

    return (
        <SafeAreaProvider>
            <NavigationContainer theme={theme}>
                <Stack.Navigator>
                    {
                    isSignedIn ? (
                        <>
                        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
                        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown: false}} />
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
                            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
                            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
                        </>
                    )
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default React.memo(App);
