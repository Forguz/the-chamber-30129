import React, { Component } from "react";
import { Text, View } from "react-native";
import * as NavigationService from "../../../Navigators/NavigationService";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./styles";
import CBLogo from "../../../Components/CBLogo";
import AuthButton from "../AuthButton";
import AnotherOption from "../AnotherOption";
import AOButton from "../AOButton";
import DialogUtil from "../../../Utils/DialogUtil";
import ApplicationStyles from "../../../Utils/ApplicationStyles";
import PasswordInput from "../../../Components/PasswordInput";
import { scale } from "../../../Utils/scale";
import AuthBack from "../AuthBack";

export default class ConfirmResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      confirmPassword: "",
    };
  }

  componentDidMount() {
  }

  onPressConfirm = () => {
    const { password, confirmPassword } = this.state;

    if (password === "") {
      DialogUtil.showWarning("New Password field is required");
      return;
    }

    if (confirmPassword === "") {
      DialogUtil.showWarning("Confirm New Password field is required");
      return;
    }

    if (password !== confirmPassword) {
      DialogUtil.showWarning("Passwords do not match");
    }
  };

  onPressLogIn = () => {
    NavigationService.navigate("LogIn");
  };

  render() {
    const { password, confirmPassword } = this.state;
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <CBLogo />
        </View>
        <View style={styles.backBtn}>
          <AuthBack />
        </View>
        <View style={styles.mainContainer}>
          <Text style={ApplicationStyles.authTitle}>Reset Password</Text>
          <PasswordInput
            value={password}
            returnKeyType={"next"}
            onChangeText={text => this.setState({ password: text })}
            onNext={() => this.confirmPasswordRef.onFocus()}
          />
          <PasswordInput
            ref={inputRef => this.confirmPasswordRef = inputRef}
            placeholder={"Confirm New Password"}
            value={confirmPassword}
            onChangeText={text => this.setState({ confirmPassword: text })}
            onNext={() => this.onPressConfirm()}
          />
          <AuthButton label={"Confirm"} style={{marginTop: scale(20)}} onPress={() => this.onPressConfirm()} />
          <AnotherOption label={"Login in to your account"} />
          <AOButton label={"LOG IN"} onPress={() => this.onPressLogIn()} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
