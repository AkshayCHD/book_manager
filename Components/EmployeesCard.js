import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import displayAlert from './Alert'
import globalStyles, { PRIMARY_COLOR, SECONDARY_COLOR } from '../styles/globalStyles'
export default function EmployeesCard(props) {
    const showAlert = () => {
        if(props.issued)
            displayAlert(props.issued)
    }
    return (
        <TouchableOpacity onPress = {showAlert} style = {styles.button}>    
            <View style={globalStyles.card}>
                <Text style={styles.text}>NAME: {props.name}</Text>
                <Text style={styles.text}>EMAIL: {props.email}</Text>
            </View>   
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'lacquer-regular'
    }
})
  