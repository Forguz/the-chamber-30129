import React from 'react';
import {SvgXml} from 'react-native-svg';

export default function CBSvg(props) {
  const {icon, width, height} = props;
  return <SvgXml width={width} height={height} xml={icon} />;
}
