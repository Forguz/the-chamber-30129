import React, { Component } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import CBSvg from "../assets/svgs/CBSvg";
import PhoneSVG from "../assets/svgs/PhoneSVG";
import { scale } from "../Utils/scale";
import Colors from "../Utils/Colors";
import ApplicationStyles from "../Utils/ApplicationStyles";

export default class PhoneInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef(null);
  }

  onFocus = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.onFocus()} activeOpacity={0.8}>
        <CBSvg icon={PhoneSVG} width={scale(19.51)} height={scale(19.5)} />
        <TextInput
          ref={this.inputRef}
          keyboardType={"decimal-pad"}
          placeholder={"Phone Number"}
          placeholderTextColor={"rgba(0, 0, 0, 0.38)"}
          style={styles.textInput}
          enablesReturnKeyAutomatically
          returnKeyType="default"
          numberOfLines={1}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
      </TouchableOpacity>
    );
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
  },
  textInput: {
    ...ApplicationStyles.MediumFont,
    marginHorizontal: scale(18),
    color: Colors.primaryColor,
  },
});
