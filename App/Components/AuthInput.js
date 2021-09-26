import React, { Component } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { scale } from "../Utils/scale";
import Colors from "../Utils/Colors";
import ApplicationStyles from "../Utils/ApplicationStyles";

export default class AuthInput extends Component {
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
        <TextInput
          ref={this.inputRef}
          placeholderTextColor={"rgba(0, 0, 0, 0.38)"}
          style={styles.textInput}
          enablesReturnKeyAutomatically
          numberOfLines={1}
          {...this.props}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    paddingVertical: scale(10),
    marginTop: scale(8),
  },
  textInput: {
    ...ApplicationStyles.MediumFont,
    marginHorizontal: scale(12),
    color: Colors.primaryColor,
  },
});
