import React from 'react';
import {ScrollView, View} from 'react-native';
import tailwind from 'tailwind-rn';
import {colorOptions, defaultTimeOptions, } from '../utils';
import {TimePickerOption} from './TimePickerOption';

export function TimePicker() {
  return (
    <ScrollView>
      <View style={tailwind('h-full flex-1 flex-row flex-wrap')}>
        {defaultTimeOptions.map((secs, i) => {
          const color = colorOptions[i % colorOptions.length]
          return <TimePickerOption key={i} seconds={secs} color={color} />;
        })}
      </View>
    </ScrollView>
  );
}
