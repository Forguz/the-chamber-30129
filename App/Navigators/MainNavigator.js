import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SplashScreen from "../Containers/Splash";
import AuthStackNavigator from "./AuthStackNavigator";

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
  },
  {
    initialRouteName: "Splash",
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
