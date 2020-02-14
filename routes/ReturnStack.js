import { createStackNavigator } from 'react-navigation-stack';
import React from 'react'
import Return from '../screens/Return'
import QrScanner from '../screens/QrScanner'
import Header from '../shared/Header'

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
            height: 90
        }
    }
});
export default ReturnStack;