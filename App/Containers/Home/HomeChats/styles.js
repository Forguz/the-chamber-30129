import { StyleSheet } from "react-native";
import ApplicationStyles from "../../../Utils/ApplicationStyles";
import { scale } from "../../../Utils/scale";
import Colors from "../../../Utils/Colors";
import { isIphoneX } from "../../../Utils/extension";
import Constants from "../../../Constants/Constants";

export const styles = StyleSheet.create({
  headerContainer: {
    marginHorizontal: Constants.appDefaultPadding,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(isIphoneX() ? 40 : 20),
  },
  title: {
    ...ApplicationStyles.BoldFont,
    fontSize: scale(24),
    letterSpacing: -0.01,
    color: Colors.black,
  },

  profileContainer: {
    marginTop: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileTitle: {
    marginLeft: scale(14.95),
    ...ApplicationStyles.SemiBoldFont,
    fontSize: scale(18),
    letterSpacing: -0.01,
    color: Colors.black,
  },

  listTitle: {
    marginTop: scale(18),
    ...ApplicationStyles.BoldFont,
    fontSize: scale(18),
    letterSpacing: -0.01,
    color: 'rgba(0, 0, 0, 0.38)',
  },
});
