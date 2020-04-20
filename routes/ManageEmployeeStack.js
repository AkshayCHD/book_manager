import ManageEmployees from '../screens/ManageEmployees'
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/Header'
import { PRIMARY_COLOR } from '../styles/globalStyles' 


const ManageEmployeeStack = createStackNavigator({
    ManageEmployees: {
        screen: ManageEmployees,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Manage Employees' />
            }
        }
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            height: 90,
            backgroundColor: PRIMARY_COLOR
        }
    }
})

export default ManageEmployeeStack;