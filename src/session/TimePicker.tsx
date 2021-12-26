import React from 'react';
import { View } from 'react-native';
import tailwind from 'tailwind-rn';
import { pickerOptions } from '../utils';
import { TimePickerOption } from './TimePickerOption';

export function TimePicker() {
  return (
    <View style={tailwind('flex flex-wrap flex-row')}>
      {pickerOptions.map(([secs, color], i) => (
        <TimePickerOption key={i} seconds={secs} color={color} />
      ))}
    </View>
  );
}
