import {View} from 'react-native';
import {UserDisplay} from './UserDisplay';
import React from 'react'
import tailwind from 'tailwind-rn';

export function UserList({users}: {users: string[]}) {
  console.log(users)
  return (
    <View style={tailwind('flex flex-row border justify-center items-center')}>
      {users.map(user => <UserDisplay key={user} username={user} />)}
    </View>
  );
}
