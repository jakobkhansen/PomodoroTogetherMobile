import {Text, View} from 'react-native';
import React from 'react'
import tailwind from 'tailwind-rn';

export function UserDisplay({username}: {username: string}) {
  return (
    <View style={tailwind('border rounded-full w-6 h-6 items-center')}>
      <Text style={tailwind('text-black')}>{username.substring(0,1).toUpperCase()}</Text>
    </View>
  );
}
