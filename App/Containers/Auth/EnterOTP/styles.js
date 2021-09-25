import { StyleSheet } from "react-native";
import Constants from "../../../Constants/Constants";
import ApplicationStyles from "../../../Utils/ApplicationStyles";
import { scale } from "../../../Utils/scale";
import Colors from "../../../Utils/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Constants.appDefaultPadding,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(60),
  },
  subView: {
    width: "100%",
  },
  subTitle: {
    ...ApplicationStyles.MediumFont,
    marginTop: scale(0),
  },

  otpContainer: {
    marginVertical: scale(16),
    height: scale(46),
    borderRadius: scale(8),
    borderWidth: 2,
    borderColor: Colors.primaryColor,
    paddingHorizontal: scale(20),
  },

  underlineStyleBase: {
    width: scale(24),
    height: scale(30),
    borderWidth: 0,
    ...ApplicationStyles.BoldFont,
  },

  underlineStyleHighLighted: {
    width: scale(24),
    height: scale(1),
    borderBottomWidth: 2,
    borderColor: Colors.primaryColor,
    position: 'absolute',
    top: scale(15),
  },

});
