import React, {useState} from 'react';
import {TextInput, Text, View, Image, Pressable} from 'react-native';
import {styles} from './styles';

const Input = ({label, placeholder, isPassword, value, onChangeText}) => {
    const [isPasswordVisable, setIsPasswordVisable] = useState(false);

    const onEyePress = () => {
        setIsPasswordVisable(!isPasswordVisable);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisable}
                placeholder={placeholder} style={styles.input}/>
                {
                    isPassword ? (
                <Pressable onPress={onEyePress}>
                    <Image style={styles.eye} source={isPasswordVisable ? require('../../assets/eye.png') : require ('../../assets/eye_closed.png')}/>
                </Pressable>
                    ) : null
                }

            </View>
        </View>
    );
}
export default Input;