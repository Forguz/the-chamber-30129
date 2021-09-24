import LogInScreen from '../Containers/Auth/LogIn';
import SignUpScreen from '../Containers/Auth/SignUp';
import {createStackNavigator} from 'react-navigation-stack';

export default createStackNavigator(
  {
    LogIn: {
      screen: LogInScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'LogIn',
  },
);
