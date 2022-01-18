import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { Colors, Layout } from '../constants/Theme';

const LoadingPage = () => {
  return (
    <View style={styled.container}>
      <ActivityIndicator size="large" color={Colors.white} />
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    position: 'absolute',
    width: Layout.width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
    opacity: 0.8,
    height: '100%',
  },
});

export default LoadingPage;
