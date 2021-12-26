import { StyleSheet } from "react-native";

export function secondsToTimeString(seconds: number) : string {
  const minutes = ~~(seconds / 60);
  seconds = seconds % 60;
  return ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
}

export function secondsToMinutes(seconds : number) : number {
  return Math.floor(seconds / 60)
}


export enum PomodoroState {
  WORKING, // Main timer
  WORKING_PAUSED, // Timer is paused
  BREAK, // Break timer
  BREAK_PAUSED, // Break timer paused
  DONE, // Timer has finished, initial state
}

export const pickerOptions = [60*60, 50*60, 25*60, 10*60, 1*60]
