import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import IssueStack from './IssueStack';
import ReturnStack from './ReturnStack';
import ManageBookStack from './ManageBookStack';
import ManageEmployeeStack from './ManageEmployeeStack';
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
    
})

export default createAppContainer(RootNavigationDrawer);