import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import * as NavigationService from "../../../Navigators/NavigationService";
import { styles } from "./styles";
import ApplicationStyles from "../../../Utils/ApplicationStyles";
import AuthBack from "../AuthBack";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthButton from "../AuthButton";
import OTPInputView from "@twotalltotems/react-native-otp-input";

export default class EnterOTPScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
    };
  }

  onPressContinue = () => {
    const {token} = this.state;
    const phoneNumber = this.props.navigation.getParam('phoneNumber');
    const password = this.props.navigation.getParam('password');
    console.log(token, phoneNumber, password);
    if (password != null) {
      NavigationService.navigate('Home');
    } else {
      NavigationService.navigate('ConfirmResetPassword');
    }

  }

  render() {
    return (
      <SafeAreaView style={ApplicationStyles.fullView}>
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
          <AuthBack />
          <View style={styles.mainContainer}>
            <View style={styles.subView}>
              <Text style={ApplicationStyles.authTitle}>OTP Code</Text>
              <Text style={styles.subTitle}>Enter the code sent to your phone number</Text>
              <OTPInputView
                style={styles.otpContainer}
                pinCount={6}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={token => this.setState({token})}
              />
              <AuthButton label={"Continue"} onPress={() => this.onPressContinue()} />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
