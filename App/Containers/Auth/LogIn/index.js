import React, { Component } from "react";
import { Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as NavigationService from "../../../Navigators/NavigationService";
import { styles } from "./styles";
import PhoneInput from "../../../Components/PhoneInput";
import PasswordInput from "../../../Components/PasswordInput";
import CBLogo from "../../../Components/CBLogo";

export default class LogInScreen extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <CBLogo />
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Log In</Text>
          <PhoneInput />
          <PasswordInput />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
