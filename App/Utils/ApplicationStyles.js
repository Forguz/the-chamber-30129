import { StyleSheet } from "react-native";
import Colors from "./Colors";
import Fonts from "./Fonts";
import { scale } from "./scale";

export default StyleSheet.create({
  fullView: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },

  RegularFont: {
    color: Colors.primaryColor,
    fontFamily: Fonts.Montserrat,
    fontWeight: "400",
    fontSize: scale(14),
  },
  MediumFont: {
    color: Colors.primaryColor,
    fontFamily: Fonts.MontserratMedium,
    fontWeight: "500",
    fontSize: scale(14),
  },
  BoldFont: {
    color: Colors.primaryColor,
    fontFamily: Fonts.MontserratBold,
    fontWeight: "700",
    fontSize: scale(14),
  },
  SemiBoldFont: {
    color: Colors.primaryColor,
    fontFamily: Fonts.MontserratSemiBold,
    fontWeight: "600",
    fontSize: scale(14),
  },

  authTitle: {
    color: Colors.primaryColor,
    fontFamily: Fonts.Montserrat,
    fontWeight: "400",
    fontSize: scale(36),
    lineHeight: scale(36),
    marginBottom: scale(18),
    letterSpacing: -0.01,
  },
});
