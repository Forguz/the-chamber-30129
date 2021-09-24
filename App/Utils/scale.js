import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// Guideline sizes are based on standard screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = size => (width / guidelineBaseWidth) * size;
const scaleVertical = size => (height / guidelineBaseHeight) * size;

export { scale, scaleVertical };
