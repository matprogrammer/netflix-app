import React from 'react';
import { View, StyleSheet } from 'react-native';

import HeaderImage from './HeaderImage';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  return (
    <View style={styled.container}>
      <HeaderImage />
      <HeaderMenu />
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default Header;
