import React, {useState} from "react";
import { View, Text, Linking, Image, Pressable } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from "../../../components/ListItem";
import EditableBox from "../../../components/EditableBox";
import { styles } from "./styles";
import Button from "../../../components/Button";

const Settings = () => {
    const [editing, setEditing] = useState(false)
    const [values, setValues] = useState({ name: "Tauri", email: "tauri@mail.com" }) 

    const onChange = (key, value) => {
        setValues(v => ({ ...v, [key]: value}))
    }

    const onEditPress = () => {
        setEditing(true)
    }

    const onSave = () => {
        setEditing(false)
    }

    const onItemPress = () => {
        Linking.openURL('https://www.google.com')
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title="Settings"/>
            <View style={styles.container}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Profile</Text>
                    <Pressable onPress={onEditPress}>
                        <Image style={styles.icon} source={require('../../../assets/edit.png')} />
                    </Pressable>
                </View>
                <EditableBox onChangeText={(v) => onChange('name', v)} value={values.name} label="User Name" editable={editing} />
                <EditableBox onChangeText={(v) => onChange('emai', v)} value={values.email} label="User Email" editable={editing} />
                {editing ? (<Button onPress={onSave} style={styles.button} title="Save"/>) : null}

                <Text style={[styles.sectionTitle, {marginTop: 40}]}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.itme} title="FAQ"/>
                <ListItem onPress={onItemPress} style={styles.itme} title="Contact Us"/>
                <ListItem onPress={onItemPress} style={styles.itme} title="Privacy & Terms"/>
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Settings);