import React from 'react';
import {View} from 'react-native';
import tailwind from 'tailwind-rn';
import {Clock} from './Clock';


type PomodoroTimerProps = {
  timer: number;
  state: number;
};

// Responsibility
// Display clock, handle inputs for manipulating timer
export function PomodoroTimer({timer, state}: PomodoroTimerProps) {
  return (
    <View>
      <Clock initialTime={timer} state={state}></Clock>
    </View>
  );
}
