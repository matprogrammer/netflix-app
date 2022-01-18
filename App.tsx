import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import StackNavigatorAuth from './src/navigator/StackNavigatorAuth';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StackNavigatorAuth />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
