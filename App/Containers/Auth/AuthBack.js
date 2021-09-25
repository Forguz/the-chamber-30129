import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as NavigationService from "../../Navigators/NavigationService";
import { scale } from "../../Utils/scale";
import ApplicationStyles from "../../Utils/ApplicationStyles";
import Colors from "../../Utils/Colors";
import CBSvg from "../../assets/svgs/CBSvg";
import LeftArrowSVG from "../../assets/svgs/LeftArrowSVG";

export default function AuthBack() {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => NavigationService.goBack()}
    >
      <CBSvg icon={LeftArrowSVG} width={scale(8)} height={scale(15)} />
      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: scale(10),
    alignItems: 'center',
  },
  text: {
    ...ApplicationStyles.MediumFont,
    marginLeft: scale(8),
    lineHeight: scale(22),
  },
});
