import React from 'react';
import {View} from 'react-native';
import tailwind from 'tailwind-rn';
import {Clock} from './Clock';
import { SocketManager } from './SocketManager';


type PomodoroTimerProps = {
  timer: number;
  state: number;
  socket : SocketManager
};

// Responsibility
// Display clock, handle inputs for manipulating timer
export function PomodoroTimer({timer, state, socket}: PomodoroTimerProps) {
  return (
    <View>
      <Clock onPress={socket.pause}initialTime={timer} state={state}></Clock>
    </View>
  );
}
