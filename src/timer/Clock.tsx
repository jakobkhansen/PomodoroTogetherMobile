import {useEffect, useState} from 'react';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {secondsToTimeString, updateStyle} from '../utils';
import tailwind from "tailwind-rn"
import { RFValue } from 'react-native-responsive-fontsize';


enum PomodoroState {
  WORKING, // Main timer
  WORKING_PAUSED, // Timer is paused
  BREAK, // Break timer
  BREAK_PAUSED, // Break timer paused
  DONE, // Timer has finished, initial state
}
const runningTimerStates = [PomodoroState.WORKING, PomodoroState.BREAK];

const pausedTimerStates = [
  PomodoroState.WORKING_PAUSED,
  PomodoroState.BREAK_PAUSED,
];

type ClockProps = {
  initialTime: number;
  state: number;
};

const styles = StyleSheet.create({
  clock: {
    color: "black",
    textAlign: "center",
    fontSize: RFValue(100)
  }
})


// Responsibility: Display and tick time
export function Clock({initialTime, state}: ClockProps) {
  const [time, setTime] = useState(initialTime);


  useEffect(() => {
    setTime(initialTime);
  }, [initialTime, state]);

  useEffect(() => {
    console.log("state", state)
    if (pausedTimerStates.includes(state)) {
      return
    }
    console.log("Starting interval")

    const id = setInterval(() => {
      if (time <= 0) {
        clearInterval(id);
        return;
      }

      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [time]);

  return (
    <Text style={styles.clock}>
      {secondsToTimeString(time)}
    </Text>
  );
}
