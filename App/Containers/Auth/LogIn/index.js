import React, { Component } from "react";
import { Text, View } from "react-native";
import * as NavigationService from "../../../Navigators/NavigationService";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./styles";
import PhoneInput from "../../../Components/PhoneInput";
import PasswordInput from "../../../Components/PasswordInput";
import CBLogo from "../../../Components/CBLogo";
import ForgotPassword from "./ForgotPassword";
import AuthButton from "../AuthButton";
import AnotherOption from "../AnotherOption";
import AOButton from "../AOButton";
import ValidateUtil from "../../../Utils/ValidateUtil";
import DialogUtil from "../../../Utils/DialogUtil";
import ApplicationStyles from "../../../Utils/ApplicationStyles";

export default class LogInScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: "",
      password: "",
    };
  }

  componentDidMount() {
  }

  onPressLogIn = () => {
    const { phoneNumber, password } = this.state;

    // TODO: Uncomment here after testing
    // if (!ValidateUtil.validatePhoneNumber(phoneNumber)) {
    //   DialogUtil.showWarning("A valid phone number is required");
    //   return;
    // }
    //
    // if (password === "") {
    //   DialogUtil.showWarning("Password field is required");
    //   return;
    // }

    NavigationService.navigate("EnterOTP", { phoneNumber, password });
  };

  onPressSignUp = () => {
    NavigationService.navigate("SignUp");
  };

  render() {
    const { phoneNumber, password } = this.state;
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <CBLogo />
        </View>
        <View style={styles.mainContainer}>
          <Text style={ApplicationStyles.authTitle}>Log In</Text>
          <PhoneInput
            value={phoneNumber}
            onChangeText={text => this.setState({ phoneNumber: text })}
          />
          <PasswordInput
            value={password}
            onChangeText={text => this.setState({ password: text })}
            onNext={() => this.onPressLogIn()}
          />
          <ForgotPassword />
          <AuthButton label={"Log in"} onPress={() => this.onPressLogIn()} />
          <AnotherOption label={"Don’t have an account?"} />
          <AOButton label={"SIGN UP"} onPress={() => this.onPressSignUp()} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
