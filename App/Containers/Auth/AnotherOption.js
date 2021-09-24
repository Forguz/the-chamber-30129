import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { scale } from "../../Utils/scale";
import ApplicationStyles from "../../Utils/ApplicationStyles";

export default function AnotherOption(props) {
  const { label } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: scale(24),
    width: "100%",
    alignItems: "center",
  },
  text: {
    ...ApplicationStyles.MediumFont,
    color: "#00000099",
  },
});
