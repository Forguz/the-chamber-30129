import { StyleSheet } from "react-native";
import { scale } from "../../../Utils/scale";
import Colors from "../../../Utils/Colors";
import Constants from "../../../Constants/Constants";
import { isIphoneX } from "../../../Utils/extension";

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
  backBtn: {
    position: "absolute",
    paddingHorizontal: Constants.appDefaultPadding,
    top: isIphoneX() ? 44 : 20,
  },
});
