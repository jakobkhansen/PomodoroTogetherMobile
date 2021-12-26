import React from 'react';
import {View} from 'react-native';
import { PomodoroState } from '../utils';
import {Clock} from './Clock';
import { SocketManager } from './SocketManager';


type PomodoroTimerProps = {
  timer: number;
  state: PomodoroState;
};

// Responsibility
// Display clock, handle inputs for manipulating timer
export function PomodoroTimer({timer, state}: PomodoroTimerProps) {
  const socket = SocketManager.getInstance()

  function togglePause(state : PomodoroState) {
    if (runningTimerStates.includes(state)) {
      socket.sendPause()
    } else { 
      socket.sendUnpause()
    }
  }

  return (
    <View>
      <Clock onPress={togglePause} initialTime={timer} state={state}></Clock>
    </View>
  );
}

export const runningTimerStates = [PomodoroState.WORKING, PomodoroState.BREAK];

export const pausedTimerStates = [
  PomodoroState.WORKING_PAUSED,
  PomodoroState.BREAK_PAUSED,
];
