import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../Containers/Home";

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "Home",
  },
);
