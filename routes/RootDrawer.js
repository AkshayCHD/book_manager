import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import IssueStack from './IssueStack';
import ReturnStack from './ReturnStack';
import ManageBookStack from './ManageBookStack';
import ManageEmployeeStack from './ManageEmployeeStack';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../styles/globalStyles' 

const RootNavigationDrawer = createDrawerNavigator({
    Issue: {
        screen: IssueStack
    },
    Return: {
        screen: ReturnStack
    },
    ManageBooks: {
        screen: ManageBookStack
    },
    ManageEmployees: {
        screen: ManageEmployeeStack
    }
},
{
    drawerBackgroundColor: PRIMARY_COLOR,
    drawerWidth: 180,
    contentOptions: {
        activeTintColor: SECONDARY_COLOR
    }
})

export default createAppContainer(RootNavigationDrawer);