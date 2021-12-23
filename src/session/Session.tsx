import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {BACKEND_URL} from '@env';
import {io} from 'socket.io-client';
import {RootStackParamList} from '../App';
import {PomodoroTimer} from './PomodoroTimer';
import tailwind from 'tailwind-rn';
import { SocketManager } from './SocketManager';

type Props = NativeStackScreenProps<RootStackParamList, 'Session'>;

type SessionState =
  | undefined
  | {users: string[]; clock: {timer: number; state: number}};

// For now, render entire pomodoro clock page
// TODO refactor this to load other components instead
export function Session({route}: Props) {
  const {displayName, roomName} = route.params;
  const [sessionState, setSessionState] = useState<SessionState>();


  useEffect(() => {
    const socket = new SocketManager(io(BACKEND_URL));
    socket.emit('session join', roomName, displayName);
    socket.on('session update', sessionState => {
      setSessionState(sessionState);
    });

    return function cleanup() {
      socket.disconnect();
    };
  }, []);


  function renderTimer() {
    if (sessionState) {
      return (
        <View style={tailwind('h-full')}>
          <Text>{JSON.stringify(sessionState)}</Text>
          <View style={tailwind('flex-1 justify-center')}>
            <PomodoroTimer {...sessionState.clock}></PomodoroTimer>
          </View>
        </View>
      );
    } else {
      return (
        <View style={tailwind('flex-1 justify-center')}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  return renderTimer();
}
