import {View} from 'react-native';
import {UserDisplay} from './UserDisplay';
import React from 'react'
import tailwind from 'tailwind-rn';

export function UserList({users}: {users: string[]}) {
  console.log(users)
  users.push(...["Martine", "Johanna", "Eirik", "Vebjørn", "Hanoi", "Adrian", "Molstad", "Victor", "Mathias"])
  return (
    <View style={tailwind('flex flex-row flex-wrap border p-1 justify-center items-center')}>
      {users.map(user => <UserDisplay key={user} username={user} />)}
    </View>
  );
}
