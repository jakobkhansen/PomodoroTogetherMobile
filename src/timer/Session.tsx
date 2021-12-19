import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {BACKEND_URL} from '@env';
import {io} from 'socket.io-client';
import {RootStackParamList} from '../App';
import { PomodoroTimer } from './PomodoroTimer';
import tailwind from 'tailwind-rn';

type Props = NativeStackScreenProps<RootStackParamList, 'Session'>;

type SessionState = undefined | {users : string[], clock : {timer : number, state : number}}

export function Session({route, navigation}: Props) {
  const {displayName, roomName} = route.params;
  const [sessionState, setSessionState] = useState<SessionState>();

  useEffect(() => {
    const socket = io(BACKEND_URL);
    socket.emit('session join', roomName, displayName);
    socket.on('session update', sessionState => {
      setSessionState(sessionState);
    });
    console.log(displayName, roomName, BACKEND_URL, sessionState);

    return function cleanup() {
      socket.disconnect()
    }
  }, []);

  return (
    <View>  
      <Text style={tailwind('text-black')}>{JSON.stringify(sessionState)}</Text>
      {sessionState && <PomodoroTimer {...sessionState.clock}></PomodoroTimer>}
    </View>
  );
}
