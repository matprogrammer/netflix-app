import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Layout } from '../constants/Theme';
import { useNavigation } from '@react-navigation/native';

const CardMovie = ({
  image,
  id,
  type,
}: {
  image: string;
  id: string;
  type: string;
}) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styled.card}
      onPress={() => navigation.navigate('MovieInfoScreen', { id, type })}
    >
      <Image
        source={{
          uri: `https://www.themoviedb.org/t/p/w440_and_h660_face/${image}`,
        }}
        style={styled.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

const styled = StyleSheet.create({
  card: {
    width: '48%',
    margin: '1%',
    height: Layout.height / 3,
    borderRadius: 8,
    backgroundColor: Colors.black,
  },
  image: {
    width: '100%',
    height: Layout.height / 3,
    borderRadius: 8,
  },
});

export default CardMovie;
