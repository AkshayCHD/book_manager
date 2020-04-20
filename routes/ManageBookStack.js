import ManageBooks from '../screens/ManageBooks'
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import AddBooks from '../screens/AddBooks'
import QrScanner from '../screens/QrScanner'
import Header from '../shared/Header'
import { PRIMARY_COLOR } from '../styles/globalStyles' 

const ManageBookStack = createStackNavigator({
    ManageBooks: {
        screen: ManageBooks,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Manage Books' />
            }
        }
    },
    QrScanner: {
        screen: QrScanner,
        navigationOptions: {
            title: 'Qr Scanner'
        }
    },
    AddBooks: {
        screen: AddBooks,
        navigationOptions: {
            title: 'AddBooks'
        }
    },
}, {
    defaultNavigationOptions: {
        headerStyle: {
            height: 90,
            backgroundColor: PRIMARY_COLOR
        }
    }
})

export default ManageBookStack;