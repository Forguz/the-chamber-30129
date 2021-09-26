import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { scale } from "../../../Utils/scale";
import Images from "../../../Utils/Images";
import CBAvatar from "../../../Components/CBAvatar";
import Constants from "../../../Constants/Constants";
import ApplicationStyles from "../../../Utils/ApplicationStyles";
import Colors from "../../../Utils/Colors";

export default function ChatListItem({ item, index }) {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.container}>
        <CBAvatar size={scale(48)} image={Images.ic_avatar_temp2} />
        <View style={styles.subContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.time}>3:30 PM</Text>
          </View>
          <Text style={styles.description}>You: Wow, What model is that. I want t..</Text>
        </View>
      </View>
      <View style={styles.divider} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: Constants.appDefaultPadding,
  },
  container: {
    flexDirection: 'row',
    marginTop: scale(12),
  },
  subContainer: {
    flex: 1,
    marginLeft: scale(16),
  },
  topContainer: {
    marginTop: scale(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    ...ApplicationStyles.SemiBoldFont,
    fontSize: scale(18),
    letterSpacing: -0.01,
    color: Colors.black,
  },
  time: {
    ...ApplicationStyles.MediumFont,
    fontSize: scale(10),
    letterSpacing: -0.01,
    color: Colors.hintColor,
    marginRight: scale(12),
  },
  description: {
    marginTop: scale(2),
    ...ApplicationStyles.MediumFont,
    fontSize: scale(12),
    letterSpacing: -0.01,
    color: 'rgba(0, 0, 0, 0.6)',
    marginRight: scale(16),
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.dividerColor,
    marginTop: scale(8),
  },
});
