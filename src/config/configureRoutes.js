import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

export default createStackNavigator({
    Login : {
        screen : LoginScreen,
        navigationOptions : {
            header : null
        }
    },
    Home : {
        screen : HomeScreen,
        navigationOptions : {
            header : null
        }
    }
});