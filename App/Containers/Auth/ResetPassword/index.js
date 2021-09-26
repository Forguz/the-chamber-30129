import React, { Component } from "react";
import { Text, View } from "react-native";
import * as NavigationService from "../../../Navigators/NavigationService";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./styles";
import PhoneInput from "../../../Components/PhoneInput";
import CBLogo from "../../../Components/CBLogo";
import AuthButton from "../AuthButton";
import AnotherOption from "../AnotherOption";
import AOButton from "../AOButton";
import ValidateUtil from "../../../Utils/ValidateUtil";
import DialogUtil from "../../../Utils/DialogUtil";
import ApplicationStyles from "../../../Utils/ApplicationStyles";

export default class ResetPasswordScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: "",
    };
  }

  componentDidMount() {
  }

  onPressSend = () => {
    const { phoneNumber } = this.state;

    // TODO: Uncomment here after testing
    // if (!ValidateUtil.validatePhoneNumber(phoneNumber)) {
    //   DialogUtil.showWarning("A valid phone number is required");
    //   return;
    // }

    NavigationService.navigate("EnterOTP", { phoneNumber });
  };

  onPressLogIn = () => {
    NavigationService.navigate("LogIn");
  };

  render() {
    const { phoneNumber } = this.state;
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <CBLogo />
        </View>
        <View style={styles.mainContainer}>
          <Text style={ApplicationStyles.authTitle}>Reset Password</Text>
          <PhoneInput
            value={phoneNumber}
            onChangeText={text => this.setState({ phoneNumber: text })}
          />
          <AuthButton label={"Send OTP"} style={styles.sendBtn} onPress={() => this.onPressSend()} />
          <AnotherOption label={"Login in to your account"} style={styles.option} />
          <AOButton label={"LOG IN"} onPress={() => this.onPressLogIn()} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
