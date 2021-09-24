import React, { Component } from "react";
import { Text, View } from "react-native";
import * as NavigationService from '../../../Navigators/NavigationService';
import { styles } from "./styles";

export default class SignUpScreen extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
      </View>
    );
  }
}
