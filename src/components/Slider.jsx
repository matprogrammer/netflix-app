import React from 'react';

import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../constants/Theme';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 4) / 3);

const Slider = ({ movies }) => {
  const navigation = useNavigation();
  const _renderItem = ({ item }) => {
    const { poster_path, id } = item;
    return (
      <TouchableOpacity
        style={styled.itemContainer}
        onPress={() =>
          navigation.navigate('MovieInfoScreen', { id: id, type: 'movie' })
        }
      >
        <Image
          source={{
            uri: `https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`,
          }}
          style={styled.imageContainer}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styled.container}>
      <Carousel
        layout={'default'}
        data={movies.reverse()}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        renderItem={_renderItem}
      />
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
  imageContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
});

export default Slider;
