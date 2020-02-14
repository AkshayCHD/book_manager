import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import displayAlert from './Alert'
export default function EmployeesCard(props) {
    const showAlert = () => {
        if(props.issued)
            displayAlert(props.issued)
    }
    return (
        <TouchableOpacity onPress = {showAlert} style = {styles.button}>    
            <View style={styles.card}>
                <Text>NAME: {props.name}</Text>
                <Text>EMAIL: {props.email}</Text>
            </View>   
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        margin: 5,
        borderWidth: 3,
        borderRadius: 3,
        borderColor: '#000',
        width: 300,
        height: 100,
        padding: 10
    }
})
  