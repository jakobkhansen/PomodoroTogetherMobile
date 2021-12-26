import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import tailwind from 'tailwind-rn';
import { colors } from '../colorpalette';
import {secondsToMinutes} from '../utils';
import {SocketManager} from './SocketManager';

export function TimePickerOption({
  seconds,
  color,
}: {
  seconds: number;
  color: string;
}) {
  const socketManager = SocketManager.getInstance();

  function onPress() {
    socketManager.sendStart(seconds);
  }

  // const boxStyle = tailwind('p-8 m-1')
  // boxStyle.color = "blue"
  const styles = StyleSheet.create({
    boxStyle: {
      padding: 32,
      margin: 4,
      backgroundColor: color
    },
  });
  console.log(styles.boxStyle);
  return (
    <TouchableOpacity style={tailwind('w-1/2')} onPress={onPress}>
      <View style={styles.boxStyle}>
        <Text style={tailwind('text-center text-white')}>
          {secondsToMinutes(seconds)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
