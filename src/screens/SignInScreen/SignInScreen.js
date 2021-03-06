import { View, Text, Image, StyleSheet,useWindowDimensions } from 'react-native';
import React, {useState} from 'react';

import Logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in");
    }

    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
    }

    const onSignUpPressed = () => {
        console.warn("onForgotPasswordPressed");
    }

    return (
        <View style={styles.root}>
        <Image 
                source={Logo} 
                style={[styles.logo, {height: height * 0.2}]} 
                resizeMode="contain"
        />

        <CustomInput 
                placeholder="Username"
                value={username}
                setValue={setUsername}
        />

        <CustomInput 
                placeholder="Password"
                value={password} 
                setValue={setPassword}
                secureTextEntry
        />

        <CustomButton text="Sign in" onPress={onSignInPressed}  type={"PRIMARY"}/>

        <CustomButton 
                text="Forgot Password?"
                onPress={onForgotPasswordPressed}
                type={"TERTIARY"}
            />

            <CustomButton 
                text="Don't have an account? Create one"
                onPress={onSignUpPressed}
                type={"TERTIARY"}
            />

        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
        
    },

    logo:{
        width: '50%',
        maxWidth: 300,
        maxHeight: 200,
        
    },
});