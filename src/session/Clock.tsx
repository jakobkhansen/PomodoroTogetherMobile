import {useEffect, useState} from 'react';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {PomodoroState, secondsToTimeString, updateStyle} from '../utils';
import tailwind from 'tailwind-rn';
import {RFValue} from 'react-native-responsive-fontsize';
import {pausedTimerStates, runningTimerStates} from './PomodoroTimer';

type ClockProps = {
  initialTime: number;
  state: number;
  onPress: (state: PomodoroState) => any;
};

const styles = StyleSheet.create({
  clock: {
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(100),
  },
});

// Responsibility: Display and tick time
export function Clock({initialTime, state, onPress}: ClockProps) {
  const [displayTime, setDisplayTime] = useState(0);

  useEffect(() => {
    let currentTime = initialTime;
    setDisplayTime(currentTime);


    if (initialTime >= 0 && runningTimerStates.includes(state)) {
      const id = setInterval(() => {
        if (currentTime >= 0 && runningTimerStates.includes(state)) {
          currentTime--;
          setDisplayTime(currentTime);
        }
      }, 1000);

      return () => {
        clearInterval(id);
      };
    } else {
      setDisplayTime(initialTime);
    }
  }, [initialTime, state]);

  return (
    <Text
      onPress={() => {
        onPress(state);
      }}
      style={styles.clock}
    >
      {secondsToTimeString(displayTime)}
    </Text>
  );
}
