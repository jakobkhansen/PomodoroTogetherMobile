import {useEffect, useState} from 'react';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {getDateSeconds, PomodoroState, secondsToTimeString} from '../utils';
import tailwind from 'tailwind-rn';
import {RFValue} from 'react-native-responsive-fontsize';
import {pausedTimerStates, runningTimerStates} from './PomodoroTimer';

type ClockProps = {
  timestamp: number;
  timeLeft: number;
  state: PomodoroState;
  timeOffset : number,
  onPress: (state: PomodoroState) => any;
  onFinished : () => any;
};

const styles = StyleSheet.create({
  clock: {
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(100),
  },
});

// Responsibility: Display and tick time
export function Clock({timestamp, timeLeft, state, timeOffset, onPress, onFinished}: ClockProps) {
  const [secondsPassed, setSecondsPassed] = useState(0);

  useEffect(() => {
    if (runningTimerStates.includes(state)) {
      const id = setInterval(() => {
        setSecondsPassed(prevSec => prevSec + 1);
      }, 1000);

      return () => clearInterval(id);
    }
  }, [timestamp, timeLeft, state]);

  function secondsToDisplay() : number {
    const display = Math.floor(timeLeft - ((getDateSeconds() - timeOffset) - timestamp))

    if (display < 0) {
      onFinished()
    }
    return display
  }

  return (
    <Text
      onPress={() => {
        onPress(state);
      }}
      style={styles.clock}
    >
      {secondsToTimeString(secondsToDisplay())}
    </Text>
  );
}
