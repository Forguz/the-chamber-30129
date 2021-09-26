import React from "react";
import { Image } from "react-native";

export default function CBAvatar(props) {
  const { size, image } = props;
  return (
    <Image
      source={image}
      resizeMode={"cover"}
      style={{ width: size, height: size, borderRadius: size / 2 }}
    />
  );
}
