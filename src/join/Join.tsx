import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import tailwind from 'tailwind-rn';

export function Join() {
  return (
    <View style={tailwind('flex-1 flex-col bg-white rounded px-8 pt-6 pb-8 justify-evenly')}>
      <View>
        <Text style={tailwind("text-gray-700 text-sm font-bold mb-2")}>
        Display Name
      </Text>
        <TextInput
          style={tailwind('border rounded w-full py-2 px-3 text-gray-700')}
          placeholder="Display Name"
        />
      </View>
      <View>
        <Text style={tailwind("text-gray-700 text-sm font-bold mb-2")}>
        Session name
      </Text>
        <TextInput
          style={tailwind('border rounded w-full py-2 px-3 text-gray-700')}
          placeholder="Session name"
        />
      </View>
      <View>
    <Button title="Join or create session" />
      </View>
    </View>
  );
}
