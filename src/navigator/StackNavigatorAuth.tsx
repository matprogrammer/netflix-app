import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

import { RootStackNavigatorAuth } from './RootStackNavigator';
import { Colors } from '../constants/Theme';
import InitialScreen from '../screens/InitialScreen';
import SeriesScreen from '../screens/SeriesScreen';
import MoviesScreen from '../screens/MoviesScreen';
import MovieInfoScreen from '../screens/MovieInfoScreen';

const Stack = createStackNavigator<RootStackNavigatorAuth>();

const StackNavigatorAuth = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignInScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: Colors.black,
        },
      }}
    >
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="InitialScreen" component={InitialScreen} />

      <Stack.Screen name="SeriesScreen" component={SeriesScreen} />
      <Stack.Screen name="MoviesScreen" component={MoviesScreen} />
      <Stack.Screen name="MovieInfoScreen" component={MovieInfoScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigatorAuth;
