import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';

import axios from 'axios';

import { Colors, Layout } from '../constants/Theme';
import CardMovie from '../components/CardMovie';
import LoadingPage from '../components/LoadingPage';
import { ScrollView } from 'react-native-gesture-handler';
import FloatingBack from '../components/FloatingBack';

const SeriesScreen = () => {
  const url =
    'https://api.themoviedb.org/3/discover/tv?api_key=ab167897daf53af79796dc9da5d56941';

  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      await axios.get(url).then((res) => {
        if (res?.data) {
          const { results } = res.data;
          setTimeout(() => {
            setLoading(false);
            setMovies(results);
          }, 1000);
        }
      });
    };
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <Text style={styled.text}>Series</Text>
        <ScrollView style={styled.container}>
          <View style={styled.moviesContainer}>
            {!loading &&
              movies?.length > 0 &&
              movies.map((mov) => {
                return (
                  <CardMovie
                    key={mov.id}
                    image={mov.poster_path}
                    id={mov.id}
                    type="tv"
                  />
                );
              })}
          </View>
        </ScrollView>
      </SafeAreaView>
      {loading && <LoadingPage />}
      <FloatingBack />
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
  },
  moviesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    padding: 20,
    paddingTop: 10,
    width: Layout.width,
  },
});

export default SeriesScreen;
