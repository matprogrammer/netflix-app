import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Layout, Colors } from '../../constants/Theme';

const HeaderInfo = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Stranger Things</Text>
      </View>
      <View>
        <Text style={styles.categories}>Suspenso - Misterio - Terror</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate('MovieInfoScreen', { id: '66732', type: 'tv' })
          }
        >
          <Text style={styles.btnText}>Reproducir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Layout.width / 1.3,
    position: 'absolute',
    bottom: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: '500',
  },
  categories: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
    top: 10,
  },
  btn: {
    width: 120,
    height: 30,
    top: 25,
    backgroundColor: Colors.white,
    borderRadius: 4,
  },
  btnText: {
    textAlign: 'center',
    lineHeight: 30,
    fontWeight: '500',
  },
});

export default HeaderInfo;
