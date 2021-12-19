import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Session'>;

export function Session({route, navigation}: Props) {
  const {displayName, roomName} = route.params;
  return (
    <View>
      <Text>{displayName}</Text>
      <Text>{roomName}</Text>
    </View>
  );
}
