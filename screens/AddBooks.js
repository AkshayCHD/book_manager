import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Text, Modal, ToastAndroid } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../styles/globalStyles' 

export default function AddBooks(props) {
    [bookId, setBookId] = useState("");
    const addBook = (values) => {
        if(!bookId) {
            return ToastAndroid.show("Please scan a book ID", ToastAndroid.LONG);
        }
        fetch('https://h2haom2lf3.execute-api.us-east-2.amazonaws.com/dev/addbooks', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "book_id": bookId,
                "book_name": values.name,
                "book_author": values.author,
                "issued": false,
            }),
        })
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            ToastAndroid.show(JSON.stringify(responseJson), ToastAndroid.LONG);
        })
        .catch(error => {
            ToastAndroid.show(JSON.stringify(error), ToastAndroid.LONG);
        });
    }
    const getBackData = (value) => {
        setBookId(value.data)
    }
    const scanBookId = () => {
        props.navigation.push('QrScanner', {goBackData: getBackData});
    }
    return (
            <View style={styles.modalContent}>  
                <Text style={styles.text}>The Book Id is: {bookId}</Text>
                <Button title="Scan Book Id" color={SECONDARY_COLOR} onPress={() => scanBookId()} />
                <Formik
                    initialValues={{ name: '', author: '' }}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        addBook(values)
                    }}
                >
                    {(formikProps) => (
                        <View>
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
                            <Button title="SUbmit" color={SECONDARY_COLOR} onPress={formikProps.handleSubmit} />
                        </View>
                    )}
                </Formik>
            </View>
        
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
    },
    text: {
        fontSize: 25,
    }
})
  