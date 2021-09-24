import { StyleSheet } from "react-native";
import { scale } from "../../../Utils/scale";
import Colors from "../../../Utils/Colors";
import Constants from "../../../Constants/Constants";

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
  },

  title: {
    fontSize: scale(36),
    lineHeight: scale(36),
    color: Colors.primaryColor,
    marginBottom: scale(18),
  },
});
