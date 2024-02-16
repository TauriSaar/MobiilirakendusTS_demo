import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import {styles} from './styles';
import GoogleLogin from '../../../components/GoogleLogin';

const SignIn = () => {
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign In" />
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="*******"/>
            <Button title="Sign In" style={styles.button}/>
            <Separator text="Or sign up with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Don't have an account? <Text style={styles.footerLink}>Sign Up</Text></Text>
        </View>
    );
}
export default React.memo(SignIn)