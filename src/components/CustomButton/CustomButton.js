import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({onPress, text, type="PRIMARY", bgColor, fgColor}) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={[
                    styles.container,
                    styles[`container_${type}`],
                    bgColor ? {backgroundColor: bgColor} : {}
                    ]}>
            <Text style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? { color: fgColor } : {}
                ]}>{text}</Text>
        </Pressable>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text:{
        fontWeight: 'bold',
        color: 'white'
    },
    container_PRIMARY:{
        backgroundColor: '#3B71F3',
    },
    container_SECONDARY:{
        borderColor: '#3B71F3',
        borderWidth: 2,
    },
    container_TERTIARY:{

    },
    text_TERTIARY:{
        color: 'grey'
    },
    text_SECONDARY:{
        color: '#3B71F3'
    }
});