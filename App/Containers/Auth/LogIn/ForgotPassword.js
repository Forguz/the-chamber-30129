import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { scale } from "../../../Utils/scale";
import ApplicationStyles from "../../../Utils/ApplicationStyles";

export default function ForgotPassword() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Forgot Password</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: scale(10),
    paddingVertical: scale(10),
  },
  text: {
    ...ApplicationStyles.MediumFont,
    color: "#000000DE",
  },
});
