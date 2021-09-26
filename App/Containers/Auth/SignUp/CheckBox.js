import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { scale } from "../../../Utils/scale";
import Colors from "../../../Utils/Colors";
import CheckSVG from "../../../assets/svgs/Check";
import CBSvg from "../../../assets/svgs/CBSvg";
import ApplicationStyles from "../../../Utils/ApplicationStyles";

export default function CheckBox(props) {
  const {value, onChange} = props;
  return(
    <TouchableOpacity style={styles.container} onPress={() => onChange(!value)}>
      <View style={styles.checkbox}>
        {value && (
          <CBSvg icon={CheckSVG} width={scale(14)} height={scale(12)} />
        )}
      </View>
      <Text style={styles.text}>  Agree to</Text>
      <TouchableOpacity>
        <Text style={[styles.text, styles.terms]}> Terms & conditions </Text>
      </TouchableOpacity>
      <Text style={styles.text}>and</Text>
      <TouchableOpacity>
        <Text style={[styles.text, styles.terms]}> Privacy policy</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    ...ApplicationStyles.MediumFont,
    fontSize: scale(12),
  },
  terms: {
    color: Colors.secondaryColor,
    textDecorationLine: 'underline',
  },
  container: {
    marginTop: scale(20),
    marginLeft: scale(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: scale(24),
    height: scale(24),
    borderColor: Colors.primaryColor,
    borderWidth: scale(4),
    borderRadius: scale(6),
    paddingTop: scale(1),
    paddingLeft: scale(0.5),
    alignItems: 'center',
    justifyContent: 'center',
  }
});
