import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {BACKEND_URL} from '@env';
import {io} from 'socket.io-client';
import {RootStackParamList} from '../App';
import {PomodoroTimer} from './PomodoroTimer';
import tailwind from 'tailwind-rn';
import {SocketManager} from './SocketManager';
import {PomodoroState} from '../utils';
import {TimePicker} from './TimePicker';
import {UserList} from './UserList';
import {LoadingScreen} from '../components/LoadingScreen';

type SessionProps = NativeStackScreenProps<RootStackParamList, 'Session'>;

type SessionState =
  | undefined
  | {users: string[]; clock: {timer: number; state: number}};

// For now, render entire pomodoro clock page
// TODO refactor this to load other components instead
export function Session({route}: SessionProps): React.ReactElement {
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

  function renderIfReady(): React.ReactElement {
    if (sessionState?.clock.state == PomodoroState.DONE) {
      return <TimePicker />;
    } else if (sessionState) {
      return (
        <View style={tailwind('h-full flex-1 justify-evenly')}>
          <Text>{JSON.stringify(sessionState)}</Text>
          <View style={tailwind('flex-1 justify-center')}>
            <PomodoroTimer {...sessionState?.clock}></PomodoroTimer>
          </View>
          <UserList users={sessionState.users} />
        </View>
      );
    }

    return <LoadingScreen />;
  }

  return renderIfReady();
}
