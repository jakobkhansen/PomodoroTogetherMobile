import React from 'react'
import { Text } from "react-native";
import tailwind from 'tailwind-rn';

enum PomodoroState {
  WORKING, // Main timer
  WORKING_PAUSED, // Timer is paused
  BREAK, // Break timer
  BREAK_PAUSED, // Break timer
  DONE, // Timer has finished, initial state
}


export function PomodoroTimer({timer, state} : {timer : number, state : PomodoroState}) {
  return <Text style={tailwind('text-black')}>{JSON.stringify({timer, state})}</Text>

}
