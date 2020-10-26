import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen113201Navigator from '../features/BlankScreen113201/navigator';
import BlankScreen013200Navigator from '../features/BlankScreen013200/navigator';
import BlankScreen213199Navigator from '../features/BlankScreen213199/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen113201: { screen: BlankScreen113201Navigator },
BlankScreen013200: { screen: BlankScreen013200Navigator },
BlankScreen213199: { screen: BlankScreen213199Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
