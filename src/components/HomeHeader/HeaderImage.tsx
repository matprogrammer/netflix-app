import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Layout, Colors } from '../../constants/Theme';
import HeaderInfo from './HeaderInfo';
const HeaderImage = () => {
  const [loaded, setLoaded] = useState(true);

  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('../../assets/background_initial.jpeg')}
        onLoad={() => setLoaded(false)}
      />
      {!loaded && <HeaderInfo />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Layout.height / 1.6,
    backgroundColor: Colors.black,
    alignItems: 'center',
  },
  stretch: {
    width: Layout.width,
    height: Layout.height / 1.6,
    resizeMode: 'cover',
  },
});

export default HeaderImage;
