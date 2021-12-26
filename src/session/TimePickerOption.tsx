import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import tailwind from 'tailwind-rn';
import {secondsToMinutes} from '../utils';
import {SocketManager} from './SocketManager';

export function TimePickerOption({seconds}: {seconds: number}) {
  const socketManager = SocketManager.getInstance();

  function onPress() {
    socketManager.sendStart(seconds)
  }
  return (
    <TouchableOpacity style={tailwind('w-1/2')} onPress={onPress}>
      <View style={tailwind('bg-gray-400 p-8 m-1')}>
        <Text style={tailwind('text-center text-white')}>
          {secondsToMinutes(seconds)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
