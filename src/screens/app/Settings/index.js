import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from "../../../components/ListItem";
import { styles } from "./styles";

const Settings = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title="Settings"/>
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Help Center</Text>
                <ListItem title="FAQ"/>
                <ListItem title="Contact Us"/>
                <ListItem title="Privacy & Terms"/>
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Settings);