import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');

    const onConfirmPressed = () => {
        console.warn("onConfirmPressed");
    }

    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
    }

    const onResendPressed = () => {
        console.warn("onResendPressed");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirm Email Screen</Text>

            <CustomInput 
                placeholder="Enter your confirmation code"
                value={code}
                setValue={setCode}
            />

            <CustomButton text="Confirm" onPress={onConfirmPressed} />

            <CustomButton 
                text="Resed code?"
                onPress={onResendPressed}
                type={"SECONDARY"}
            />

            <CustomButton 
                text="Back to Sign In"
                onPress={onSignInPressed}
                type={"TERTIARY"}
            />
        </View>
        </ScrollView>
    );
};


export default ConfirmEmailScreen;

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
        
    },

    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin:10,
    }
});