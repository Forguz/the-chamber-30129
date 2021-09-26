import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { scale } from "../../Utils/scale";
import ApplicationStyles from "../../Utils/ApplicationStyles";

export default function AuthButton(props) {
  const { label, style, onPress } = props;
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <LinearGradient
        useAngle={true}
        angle={269.88}
        angleCenter={{ x: 0.5, y: 0.5 }}
        locations={[0, 1.0]}
        colors={["#152044", "#233571"]}
        style={styles.gradient}>
        <Text style={styles.text}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: scale(10),
  },
  gradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(10),
    paddingVertical: scale(17),
  },
  text: {
    ...ApplicationStyles.MediumFont,
    color: "white",
    textTransform: "uppercase",
  },
});
