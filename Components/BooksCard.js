import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';

export default function BooksCard(props) {
    const [cardBackground, setCardBackground] = useState({ backgroundColor: 'grey'})
    useEffect(() => {
        if(props.issued) {
            setCardBackground({ backgroundColor: '#e57373' })
        } else {
            setCardBackground({ backgroundColor: '#00E5FF' })
        }
    }, [props.issued_by])
    return (
        <View style={[ styles.card, cardBackground ]} >
            <Text style={styles.text}>ID: {props.id}</Text>
            <Text style={styles.text}>NAME: {props.name}</Text>
            <Text style={styles.text}>AUTHOR: {props.author}</Text>
            {
                props.issued_by ? <Text style={styles.text}>ISSUED BY: {props.issued_by}</Text> : <View></View>
            }
        </View>   
  );
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 120,
        margin: 5,
        borderWidth: 3,
        borderRadius: 15,
        borderColor: '#000',
        padding: 10,
    },
    text: {
        fontFamily: 'lacquer-regular',
    }
})
  