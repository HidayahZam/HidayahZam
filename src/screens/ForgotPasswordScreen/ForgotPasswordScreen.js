import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const onSendPressed = () => {
        console.warn("onSendPressed");
    }

    const onSignInPressed = () => {
        console.warn("onSignInPressed");
    }

    const onResendPressed = () => {
        console.warn("onResendPressed");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your Password</Text>

            <CustomInput 
                placeholder="Username"
                value={username}
                setValue={setUsername}
            />

            <CustomButton text="Send" onPress={onSendPressed} />

            <CustomButton 
                text="Back to Sign In"
                onPress={onSignInPressed}
                type={"TERTIARY"}
            />
        </View>
        </ScrollView>
    );
};


export default ForgotPasswordScreen;

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