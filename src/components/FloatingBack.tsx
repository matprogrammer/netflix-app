import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Theme';

const FloatingBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styled.container}
      onPress={() => navigation.goBack()}
    >
      <Icon style={styled.arrow} name="arrow-back-ios" color={Colors.black} />
    </TouchableOpacity>
  );
};

const styled = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    position: 'absolute',
    backgroundColor: Colors.white,
    borderRadius: 100,
    top: 50,
    left: 20,
  },
  arrow: {
    position: 'relative',
    top: 8,
    left: 12,
    width: 25,
    height: 30,
  },
});

export default FloatingBack;
