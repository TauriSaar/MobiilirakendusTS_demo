import React, {useState} from 'react';
import {TextInput, Text, View, Image, Pressable, Modal, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Input = ({label, placeholder, isPassword, value, onChangeText, type, options, style, ...props}) => {
    const [isPasswordVisable, setIsPasswordVisable] = useState(false);
    const [isPickerModalVisible, setPickerModalVisible] = useState(false)

    const onEyePress = () => {
        setIsPasswordVisable(!isPasswordVisable);
    }

    const onSelect = (opt) => {
        onChangeText(opt)
        setPickerModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {type === 'picker' ? (
                <Pressable onPress={() => setPickerModalVisible(true)} style={styles.inputContainer}>
                    { value ? (<Text style={[styles.placeholder, style]}>{value?.title}</Text>
                    ) : (<Text style={[styles.placeholder, style]}>{placeholder}</Text>)}
                    <Image style={styles.arrow} source={require('../../assets/arrow.png')} />
                </Pressable>
                ) : (
                <View style={styles.inputContainer}>
                <TextInput value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisable}
                placeholder={placeholder} style={[styles.input, style]} {...props}/>
                {
                    isPassword ? (
                <Pressable onPress={onEyePress}>
                    <Image style={styles.eye} source={isPasswordVisable ? require('../../assets/eye.png') : require ('../../assets/eye_closed.png')}/>
                </Pressable>
                    ) : null
                }

                </View>
            )}
            <Modal transparent visible={isPickerModalVisible}>
                <TouchableOpacity activeOpacity={1} onPress={() => setPickerModalVisible
                (false)} style={styles.modalWrapper}>
                    <TouchableOpacity activepacity={1} style={styles.modalContent}>
                        <Text style={styles.optionTitle}>Select options</Text>
                        {
                            options?.map( opt => {
                                if(!opt?.id) {
                                    return null
                                }
                                
                                const selected = value?.id === opt?.id

                                return (<Text onPress={() => onSelect(opt)} style={[styles.optionText, selected ? styles.selectedOption : {}]} key={opt?.title}>{opt?.title}</Text>)
                            })
                        }
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}
export default Input;