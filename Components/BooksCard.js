import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';

export default function BooksCard(props) {
    const [cardBackground, setCardBackground] = useState({ backgroundColor: 'grey'})
    useEffect(() => {
        if(props.issued) {
            setCardBackground({ backgroundColor: 'red' })
        } else {
            setCardBackground({ backgroundColor: 'grey' })
        }
    }, [props.issued_by])
    return (
        <View style={[ styles.card, cardBackground ]} >
            <Text>ID: {props.id}</Text>
            <Text>NAME: {props.name}</Text>
            <Text>AUTHOR: {props.author}</Text>
            {
                props.issued_by ? <Text>ISSUED BY: {props.issued_by}</Text> : <View></View>
            }
        </View>   
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
  