import { StyleSheet } from "react-native";

export function secondsToTimeString(seconds: number) {
  const minutes = ~~(seconds / 60);
  seconds = seconds % 60;
  return ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
}

export function updateStyle(style : any, field : any, value : any) {
  style[field] = value
  return style
}
