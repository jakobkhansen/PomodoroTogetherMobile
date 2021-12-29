import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import tailwind from 'tailwind-rn';

export function LoadingScreen() {
  return (
    <View style={tailwind('flex-1 justify-center')}>
      <ActivityIndicator size="large" />
    </View>
  );
}
