import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { scale } from "../../Utils/scale";
import ApplicationStyles from "../../Utils/ApplicationStyles";
import Colors from "../../Utils/Colors";

export default function AOButton(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: scale(10),
    alignSelf: "center",
  },
  text: {
    ...ApplicationStyles.BoldFont,
    color: Colors.secondaryColor,
  },
});
