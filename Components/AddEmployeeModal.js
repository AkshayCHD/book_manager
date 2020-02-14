import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Text, Modal, ToastAndroid } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
export default function AddEmployeesModal(props) {
    const addEmployee = (values) => {
        fetch('https://h2haom2lf3.execute-api.us-east-2.amazonaws.com/dev/addemployees', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": values.email,
                "name": values.name
            }),
        })
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            props.setModalOpen(false);
            ToastAndroid.show(JSON.stringify(responseJson), ToastAndroid.LONG);
        })
        .catch(error => {
            props.setModalOpen(false)
            ToastAndroid.show(JSON.stringify(error), ToastAndroid.LONG);
        });
    }
    return (
        <Modal visible={props.modalOpen} animationType='slide'>
            <View style={styles.modalContent}>  
                <MaterialIcons
                name='close'
                size={24}
                onPress={() => props.setModalOpen(false)} />
                <Formik
                    initialValues={{ email: '', name: '' }}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        addEmployee(values)
                    }}
                >
                    {(formikProps) => (
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="Employee Email"
                                onChangeText={formikProps.handleChange('email')}
                                value={formikProps.values.id}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Employee Name"
                                onChangeText={formikProps.handleChange('name')}
                                value={formikProps.values.name}
                            />
                            <Button title="Submit" color='maroon' onPress={formikProps.handleSubmit} />
                        </View>
                    )}
                </Formik>
            </View>
        </Modal>   
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        flex: 1
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    }
})
  