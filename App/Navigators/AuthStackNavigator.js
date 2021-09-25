import LogInScreen from "../Containers/Auth/LogIn";
import SignUpScreen from "../Containers/Auth/SignUp";
import { createStackNavigator } from "react-navigation-stack";
import EnterOTPScreen from "../Containers/Auth/EnterOTP";

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
    EnterOTP: {
      screen: EnterOTPScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "LogIn",
  },
);
