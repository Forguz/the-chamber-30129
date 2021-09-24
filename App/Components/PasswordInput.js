import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import CBSvg from "../assets/svgs/CBSvg";
import { scale } from "../Utils/scale";
import KeySVG from "../assets/svgs/KeySVG";
import Colors from "../Utils/Colors";
import ApplicationStyles from "../Utils/ApplicationStyles";

export default class PasswordInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CBSvg icon={KeySVG} width={scale(19.51)} height={scale(19.5)} />
        <TextInput
          autoComplete="off"
          autoCorrect={false}
          spellCheck={false}
          placeholder={'Password'}
          placeholderTextColor={'rgba(0, 0, 0, 0.38)'}
          style={styles.textInput}
          enablesReturnKeyAutomatically
          returnKeyType="go"
          numberOfLines={1}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    paddingVertical: scale(10),
    paddingHorizontal: scale(12),
    marginTop: scale(8),
  },
  textInput: {
    ...ApplicationStyles.MediumFont,
    marginHorizontal: scale(18),
    color: Colors.primaryColor,
  }
});
