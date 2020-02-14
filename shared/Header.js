import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, View, Text } from 'react-native'

export default function Header({ navigation, title }) {
    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu}/>
            <View>
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        color: 'red',
        flexDirection: 'row',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1
    }
})