import React, { Component } from "react";
import { Text, View } from "react-native";
import * as NavigationService from "../../../Navigators/NavigationService";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./styles";
import AuthButton from "../AuthButton";
import AnotherOption from "../AnotherOption";
import AOButton from "../AOButton";
import ValidateUtil from "../../../Utils/ValidateUtil";
import DialogUtil from "../../../Utils/DialogUtil";
import ApplicationStyles from "../../../Utils/ApplicationStyles";
import AuthInput from "../../../Components/AuthInput";
import CheckBox from "./CheckBox";

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      company: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    };
  }

  componentDidMount() {
  }

  onPressSignUp = () => {
    const { firstName, lastName, phoneNumber, email, company, password, confirmPassword, agreeTerms } = this.state;

    if (firstName === "") {
      DialogUtil.showWarning("First Name field is required");
      return;
    }

    if (lastName === "") {
      DialogUtil.showWarning("Last Name field is required");
      return;
    }

    if (!ValidateUtil.validatePhoneNumber(phoneNumber)) {
      DialogUtil.showWarning("A valid phone number is required");
      return;
    }

    if (email === "") {
      DialogUtil.showWarning("Email field is required");
      return;
    }

    if (company === "") {
      DialogUtil.showWarning("Company field is required");
      return;
    }

    if (password === "") {
      DialogUtil.showWarning("Password field is required");
      return;
    }

    if (confirmPassword === "") {
      DialogUtil.showWarning("Confirm Password field is required");
      return;
    }

    if (!agreeTerms) {
      DialogUtil.showWarning("You must agree to the terms of use and privacy policy");
      return;
    }

    NavigationService.navigate("EnterOTP", { firstName, lastName, phoneNumber, email, company, password });
  };

  onPressLogIn = () => {
    NavigationService.navigate("LogIn");
  };

  render() {
    const { firstName, lastName, phoneNumber, email, company, password, confirmPassword, agreeTerms } = this.state;
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.mainContainer}>
          <Text style={ApplicationStyles.authTitle}>Sign Up</Text>
          <AuthInput
            placeholder={"First Name"}
            returnKeyType="next"
            value={firstName}
            onChangeText={text => this.setState({ firstName: text })}
            onSubmitEditing={() => this.lastNameRef.onFocus()}
          />
          <AuthInput
            ref={(inputRef) => this.lastNameRef = inputRef}
            placeholder={"Last Name"}
            returnKeyType="next"
            value={lastName}
            onChangeText={text => this.setState({ lastName: text })}
            onSubmitEditing={() => this.phoneNumberRef.onFocus()}
          />
          <AuthInput
            ref={(inputRef) => this.phoneNumberRef = inputRef}
            placeholder={"Phone Number"}
            keyboardType={"decimal-pad"}
            returnKeyType="next"
            value={phoneNumber}
            onChangeText={text => this.setState({ phoneNumber: text })}
            onSubmitEditing={() => this.emailRef.onFocus()}
          />
          <AuthInput
            ref={(inputRef) => this.emailRef = inputRef}
            placeholder={"Email"}
            keyboardType={"email-address"}
            returnKeyType="next"
            value={email}
            onChangeText={text => this.setState({ email: text })}
            onSubmitEditing={() => this.companyRef.onFocus()}
          />
          <AuthInput
            ref={(inputRef) => this.companyRef = inputRef}
            placeholder={"Company"}
            returnKeyType="next"
            value={company}
            onChangeText={text => this.setState({ company: text })}
            onSubmitEditing={() => this.passwordRef.onFocus()}
          />
          <AuthInput
            ref={(inputRef) => this.passwordRef = inputRef}
            placeholder={"Password"}
            returnKeyType="next"
            value={password}
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
            onSubmitEditing={() => this.confirmPasswordRef.onFocus()}
          />
          <AuthInput
            ref={(inputRef) => this.confirmPasswordRef = inputRef}
            placeholder={"Confirm Password"}
            returnKeyType="go"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={text => this.setState({ confirmPassword: text })}
            onSubmitEditing={() => this.onPressSignUp()}
          />
          <CheckBox value={agreeTerms} onChange={(value) => this.setState({agreeTerms: value})} />
          <AuthButton label={"Sign Up"} style={styles.signUpBtn} onPress={() => this.onPressSignUp()} />
          <AnotherOption label={"Already have an account?"} />
          <AOButton label={"LOG IN"} onPress={() => this.onPressLogIn()} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
