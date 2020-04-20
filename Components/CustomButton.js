// custom-button.js

import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../styles/globalStyles' 


export const CustomButton = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 50,
        width: 200,
        margin: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: SECONDARY_COLOR,
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },

    text: {
        fontSize: 16,

        fontFamily: 'lacquer-regular',
        textTransform: 'uppercase',
        color: '#000000',
    },
});
