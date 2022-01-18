import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import axios from 'axios';
import { Icon } from 'react-native-elements';

import { Colors, Layout } from '../constants/Theme';
import LoadingPage from '../components/LoadingPage';
import { ScrollView } from 'react-native-gesture-handler';
import FloatingBack from '../components/FloatingBack';

const MovieInfoScreen = ({ route }: { route: any }) => {
  const { id, type } = route.params;

  console.log('id: ', id);

  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=ab167897daf53af79796dc9da5d56941&language=es`;

  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      if (id) {
        await axios.get(url).then((res) => {
          const { data } = res;
          if (data) {
            setTimeout(() => {
              setLoading(false);
              setMovie(data);
            }, 1000);
          }
        });
      }
    };
    getMovies();
  }, []);

  return (
    <View style={styled.c}>
      <ScrollView style={styled.container}>
        <View style={styled.moviesContainer}>
          {movie && (
            <>
              <Image
                source={{
                  uri: `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`,
                }}
                resizeMode="cover"
                style={styled.image}
              />
              <Text style={styled.title}>
                {movie.original_title || movie.name}
              </Text>
              <View style={styled.vote}>
                <Icon name="favorite" color={Colors.primaryRed} />
                <Text style={styled.voteText}>{movie.vote_count}</Text>
              </View>
              <View style={styled.genresContainer}>
                {movie.genres.length > 0 &&
                  movie.genres.map((item: any, index: number) => {
                    if (index + 1 < movie.genres.length) {
                      return (
                        <Text style={styled.genresText}>{item.name} -</Text>
                      );
                    } else {
                      return <Text style={styled.genresText}>{item.name}</Text>;
                    }
                  })}
              </View>
              {movie?.release_date && (
                <Text style={styled.language}>
                  <Text style={{ fontWeight: 'bold' }}>Año: </Text>
                  {movie.release_date.slice(0, 4)}
                </Text>
              )}
              {movie?.last_air_date && (
                <Text style={styled.language}>
                  <Text style={{ fontWeight: 'bold' }}>Año: </Text>
                  {movie.last_air_date.slice(0, 4)}
                </Text>
              )}
              {movie?.number_of_seasons && (
                <Text style={styled.language}>
                  <Text style={{ fontWeight: 'bold' }}>Temporadas: </Text>
                  {movie.number_of_seasons}
                </Text>
              )}
              {movie?.number_of_episodes && (
                <Text style={styled.language}>
                  <Text style={{ fontWeight: 'bold' }}>Episodios: </Text>
                  {movie.number_of_episodes}
                </Text>
              )}

              <Text style={styled.language}>
                <Text style={{ fontWeight: 'bold' }}>Idioma: </Text>
                {movie.original_language}
              </Text>
              <Text style={styled.overview}>{movie.overview}</Text>
            </>
          )}
        </View>
      </ScrollView>
      {loading && <LoadingPage />}
      <FloatingBack />
    </View>
  );
};

const styled = StyleSheet.create({
  c: {
    display: 'flex',
    flex: 1,
  },
  container: {
    backgroundColor: Colors.black,
  },
  moviesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    textAlign: 'left',
    fontSize: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    width: Layout.width,
    fontWeight: 'bold',
  },
  vote: {
    display: 'flex',
    paddingHorizontal: 20,
    flexDirection: 'row',
    width: Layout.width,
    paddingBottom: 10,
  },
  voteText: {
    color: 'white',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  overview: {
    color: 'white',
    textAlign: 'left',
    fontSize: 16,
    paddingHorizontal: 20,
    width: Layout.width,
  },
  language: {
    color: 'white',
    textAlign: 'left',
    fontSize: 16,
    paddingHorizontal: 20,
    width: Layout.width,
    paddingBottom: 10,
  },
  image: {
    width: Layout.width,
    height: Layout.height / 3,
  },
  icon: {
    width: Layout.width / 3,
    height: 100,
  },
  genresContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  genresText: {
    color: 'white',
    textAlign: 'left',
    fontSize: 16,
    paddingRight: 5,
    paddingBottom: 10,
  },
});

export default MovieInfoScreen;
