import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ToastAndroid, ActivityIndicator } from 'react-native';
import { CustomButton } from '../Components/CustomButton';


export default function Issue({ navigation }) {
    [bookId, setBookId] = useState("");
    [employeeId, setEmployeeId] = useState("");
    const [loading, setLoading] = useState(false);

    const getBackData = (value) => {
        if(value.type == "BOOK_ID")
            setBookId(value.data)
        if(value.type == "EMPLOYEE_ID")
            setEmployeeId(value.data)
    }
    const moveToQrScanner = (type) => {
        navigation.navigate('QrScanner', {goBackData: getBackData, type: type});
    }

    const issueBook = () => {
        setLoading(true);
        fetch('https://h2haom2lf3.execute-api.us-east-2.amazonaws.com/dev/issue', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": employeeId,
                "book_id": bookId
            }),
        })
        .then(response => {
            console.log("****************************")
            console.log(JSON.stringify(response))
            return response.json()
        })
        .then(responseJson => {
            setLoading(false);
            ToastAndroid.show(JSON.stringify(responseJson), ToastAndroid.LONG);;
        })
        .catch(error => {
            setLoading(false);
            ToastAndroid.show(JSON.stringify(error), ToastAndroid.LONG);;
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>The Book Id is: {bookId}</Text>
            <CustomButton style={styles.button} title="Scan Book Id" onPress = {() => moveToQrScanner("BOOK_ID")}/>
            <Text style={styles.text}>The Employee Id is: {employeeId}</Text>
            <CustomButton style={styles.button} title="Scan Employee Id" onPress = {() => moveToQrScanner("EMPLOYEE_ID")}/>
            <CustomButton style={styles.issueButton} title="Issue" onPress={issueBook}/>

            <ActivityIndicator size="large" color="#0000ff" animating={loading}/>
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
    text: {
        fontSize: 25,
    }
})
