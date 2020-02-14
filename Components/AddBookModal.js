import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Text, Modal, ToastAndroid } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';

export default function AddBooksModal(props) {
    const addBook = (values) => {
        fetch('https://h2haom2lf3.execute-api.us-east-2.amazonaws.com/dev/addbooks', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "book_id": values.id,
                "book_name": values.name,
                "book_author": values.author,
                "issued": false,
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
                    initialValues={{ id: '', name: '', author: '' }}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        addBook(values)
                    }}
                >
                    {(formikProps) => (
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="Book Id"
                                keyboardType='numeric'
                                onChangeText={formikProps.handleChange('id')}
                                value={formikProps.values.id}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Book Name"
                                onChangeText={formikProps.handleChange('name')}
                                value={formikProps.values.name}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Book author"
                                onChangeText={formikProps.handleChange('author')}
                                value={formikProps.values.author}
                            />
                            <Button title="SUbmit" color='maroon' onPress={formikProps.handleSubmit} />
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
  