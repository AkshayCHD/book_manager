import { createStackNavigator } from 'react-navigation-stack';
import React from 'react'
import Issue from '../screens/Issue'
import QrScanner from '../screens/QrScanner'
import Header from '../shared/Header'

const screens = {
    Issue: {
        screen: Issue,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Issue' />
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

const IssueStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            height: 90
        }
    }
});
export default IssueStack;