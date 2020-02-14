import ManageEmployees from '../screens/ManageEmployees'
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/Header'

const ManageEmployeeStack = createStackNavigator({
    ManageEmployees: {
        screen: ManageEmployees,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Manage Employees' />
            }
        }
    }
})

export default ManageEmployeeStack;