import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SplashScreen from "../Containers/Splash";
import AuthStackNavigator from "./AuthStackNavigator";
import HomeStackNavigator from "./HomeStackNavigator";

const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AuthStack: {
      screen: AuthStackNavigator,
    },
    HomeStack: {
      screen: HomeStackNavigator,
    },
  },
  {
    // TODO: uncomment here after testing
    initialRouteName: "Splash",
    // initialRouteName: "HomeStack",
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
