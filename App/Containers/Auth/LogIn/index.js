import React, { Component } from "react";
import { Text, View } from "react-native";
import * as NavigationService from '../../../Navigators/NavigationService';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./styles";
import PhoneInput from "../../../Components/PhoneInput";
import PasswordInput from "../../../Components/PasswordInput";
import CBLogo from "../../../Components/CBLogo";
import ForgotPassword from "./ForgotPassword";
import AuthButton from "../AuthButton";
import AnotherOption from "../AnotherOption";
import AOButton from "../AOButton";

export default class LogInScreen extends Component {
  componentDidMount() {
  }

  onPressLogIn = () => {

  };

  onPressSignUp = () => {
    NavigationService.navigate('SignUp');
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
          <ForgotPassword />
          <AuthButton label={"Log in"} onPress={() => this.onPressLogIn()} />
          <AnotherOption label={"Don’t have an account?"} />
          <AOButton label={"SIGN UP"} onPress={() => this.onPressSignUp()} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
