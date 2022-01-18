import React, { useState } from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Layout } from '../constants/Theme';

const SearchMoviScreen = () => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styled.container}>
      <Text>SearchMoviScreen</Text>
      <TextInput
        style={styled.input}
        placeholder="buscar..."
        onChangeText={setText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styled = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  input: {
    height: 40,
    width: Layout.width - 40,
    marginHorizontal: 20,
    backgroundColor: Colors.white,
    paddingLeft: 10,
    borderRadius: 8,
    marginTop: -50,
  },
});

export default SearchMoviScreen;
