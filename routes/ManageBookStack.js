import ManageBooks from '../screens/ManageBooks'
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/Header'

const ManageBookStack = createStackNavigator({
    ManageBooks: {
        screen: ManageBooks,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Manage Books' />
            }
        }
    }
})

export default ManageBookStack;