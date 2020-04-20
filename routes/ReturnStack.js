import { createStackNavigator } from 'react-navigation-stack';
import React from 'react'
import Return from '../screens/Return'
import QrScanner from '../screens/QrScanner'
import Header from '../shared/Header'
import { PRIMARY_COLOR } from '../styles/globalStyles' 

const screens = {
    Return: {
        screen: Return,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Return' />
            }
        }
    },
    QrScanner: {
        screen: QrScanner,
        navigationOptions: {
            title: 'Qr Scanner'
        }
    }
}

const ReturnStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            height: 90,
            backgroundColor: PRIMARY_COLOR
        }
    }
});
export default ReturnStack;