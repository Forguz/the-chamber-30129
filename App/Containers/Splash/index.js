import React, { Component } from "react";
import { View } from "react-native";
import * as NavigationService from '../../Navigators/NavigationService';
import { styles } from "./styles";
import CBLogo from "../../Components/CBLogo";

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      NavigationService.navigate('LogIn');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <CBLogo />
      </View>
    );
  }
}
