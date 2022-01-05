import React from 'react';
import {View} from 'react-native';
import { PomodoroState } from '../utils';
import {Clock} from './Clock';
import { SocketManager } from './SocketManager';


type PomodoroTimerProps = {
  timestamp : number,
  timeLeft : number,
  state: PomodoroState;
  timeOffset: number
};

// Responsibility
// Display clock, handle inputs for manipulating timer
export function PomodoroTimer({timestamp, timeLeft, timeOffset, state}: PomodoroTimerProps) {
  const socket = SocketManager.getInstance()

  function togglePause(state : PomodoroState) {
    if (runningTimerStates.includes(state)) {
      socket.sendPause()
    } else { 
      socket.sendUnpause()
    }
  }

  function stopTimer() {
    socket.sendStop()
  }


  return (
    <View>
      <Clock onPress={togglePause} onFinished={stopTimer} {...{timestamp, timeLeft, timeOffset, state}}></Clock>
    </View>
  );
}

export const runningTimerStates = [PomodoroState.WORKING, PomodoroState.BREAK];

export const pausedTimerStates = [
  PomodoroState.WORKING_PAUSED,
  PomodoroState.BREAK_PAUSED,
];
