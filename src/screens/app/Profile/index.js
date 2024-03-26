import React from "react";
import { View, Text } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from "./styles";
import ListItem from "../../../components/ListItem";
import Button from "../../../components/Button";
import Header from "../../../components/Header";

const Profile = ({navigation}) => {
    const num = 10

    const  onLogout = () => {
        console.log('logout pressed')
    }

    const onSettingsPress = () => {
        navigation.navigate('Settings')
    }

    const onNewListingPress = () => {
        navigation.navigate('CreateListing')
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Header title="Profile" showLogout onLogout={onLogout} />
                    <Text style={styles.name}>User name</Text>
                    <Text style={styles.email}>User email</Text>

                    <ListItem title="My Listings" subtitle={`Already have ${num} listings`} />
                    <ListItem title="Settings" subtitle="Account, FAQ, Privacy" onPress={onSettingsPress} />
                </View>
                <Button onPress={onNewListingPress} title="Add new listing" />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(Profile)