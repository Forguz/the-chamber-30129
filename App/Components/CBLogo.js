import React from "react";
import LogoSVG from "../assets/svgs/LogoSVG";
import { scale } from "../Utils/scale";
import CBSvg from "../assets/svgs/CBSvg";

export default function CBLogo() {
  return (
    <CBSvg icon={LogoSVG} width={scale(197.13)} height={scale(174.43)} />
  );
}
