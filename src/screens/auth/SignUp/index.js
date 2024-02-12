import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import {styles} from './styles';

const SignUp = () => {
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up" />
            <Input label="Name" placeholder="John Doe"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="*******"/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I agree to the <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
            <Button title="Sign Up" style={styles.button}/>
            <Separator text="Or sign up with" />
        </View>
    );
}
export default SignUp;