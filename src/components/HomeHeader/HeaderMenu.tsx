import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Layout, Colors } from '../../constants/Theme';
import { useNavigation } from '@react-navigation/native';

const HeaderMenu = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SeriesScreen');
        }}
      >
        <Text style={styles.links}>Series</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MoviesScreen');
        }}
      >
        <Text style={styles.links}>Películas</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.links}>Categorías</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Layout.width / 1.3,
    position: 'absolute',
    top: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  links: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default HeaderMenu;
function RootStackNavigatorAuth(RootStackNavigatorAuth: any) {
  throw new Error('Function not implemented.');
}
