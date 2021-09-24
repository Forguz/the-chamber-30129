import { StyleSheet } from "react-native";
import { scale } from "../../../Utils/scale";
import Colors from "../../../Utils/Colors";
import Constants from "../../../Constants/Constants";
import ApplicationStyles from "../../../Utils/ApplicationStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: scale(97),
  },
  mainContainer: {
    width: "100%",
    marginTop: scale(60),
    paddingHorizontal: Constants.appDefaultPadding,
    paddingBottom: scale(100),
  },

  title: {
    ...ApplicationStyles.RegularFont,
    fontSize: scale(36),
    lineHeight: scale(36),
    marginBottom: scale(18),
    letterSpacing: -0.01,
  },
});
