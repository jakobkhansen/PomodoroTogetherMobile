/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Join } from './join/Join';
import { Session } from './session/Session';

export type RootStackParamList = {
  Join: undefined;
  Session: { displayName: string, roomName : string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Join" component={Join} />
        <Stack.Screen name="Session" component={Session} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
