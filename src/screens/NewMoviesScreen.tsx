import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Colors } from '../constants/Theme';
import CardMovie from '../components/CardMovie';
import LoadingPage from '../components/LoadingPage';
import { ScrollView } from 'react-native-gesture-handler';
import FloatingBack from '../components/FloatingBack';

const NewMoviesScreen = () => {
  const url =
    'https://api.themoviedb.org/3/discover/movie?api_key=ab167897daf53af79796dc9da5d56941&sort_by=popularity.desc';

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
    <View style={{ flex: 1, backgroundColor: Colors.black }}>
      <SafeAreaView>
        <ScrollView style={styled.container}>
          <View style={styled.moviesContainer}>
            {!loading &&
              movies?.length > 0 &&
              movies.map((mov) => {
                return (
                  <CardMovie
                    key={mov.title}
                    image={mov.poster_path}
                    id={mov.id}
                    type="movie"
                  />
                );
              })}
          </View>
        </ScrollView>
      </SafeAreaView>
      {loading && <LoadingPage />}
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
});

export default NewMoviesScreen;
