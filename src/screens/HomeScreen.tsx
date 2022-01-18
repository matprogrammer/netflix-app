import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/HomeHeader/Header';

import { Colors } from '../constants/Theme';
import LoadingPage from '../components/LoadingPage';
import CardMovie from '../components/CardMovie';
import Slider from '../components/Slider';

const Home = () => {
  const url =
    'https://api.themoviedb.org/3/discover/movie?api_key=ab167897daf53af79796dc9da5d56941';
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getMovies = async () => {
      await axios.get(url).then((res) => {
        setTimeout(() => {
          setLoading(false);
          setMovies(res.data.results);
        }, 1000);
      });
    };
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styled.container}>
        {!loading && <Header />}
        {!loading && movies?.length > 0 && <Slider movies={movies} />}

        <View style={styled.moviesContainer}>
          {!loading &&
            movies?.length > 0 &&
            movies.map((mov, index) => {
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

export default Home;
