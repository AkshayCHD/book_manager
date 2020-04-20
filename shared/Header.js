import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, View, Text } from 'react-native'
import { PRIMARY_COLOR } from '../styles/globalStyles' 

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
        flex: 1,
        color: 'red',
        flexDirection: 'row',
    },
    headerText: {
        marginLeft: 20,
        fontFamily: 'lacquer-regular',
        fontSize: 20,
    }
})