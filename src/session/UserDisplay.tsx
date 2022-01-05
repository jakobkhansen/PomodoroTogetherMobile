import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tailwind from 'tailwind-rn';

type UserDisplayProps = {
  username: string;
  shortened?: boolean;
  color?: string;
};

export function UserDisplay({username, shortened = false}: UserDisplayProps) {
  if (!shortened) {
    return (
      <View style={tailwind('border rounded-full items-center m-0.5')}>
        <Text style={tailwind('text-black px-4 py-2.5')}>{username}</Text>
      </View>
    );
  } else {
    return (
      <View style={tailwind('border rounded-full items-center m-0.5')}>
        <Text style={tailwind('text-black px-2.5 py-1')}>
          {username.substring(0, 1).toUpperCase()}
        </Text>
      </View>
    );
  }
}
