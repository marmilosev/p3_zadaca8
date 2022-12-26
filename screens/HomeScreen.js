//prva datoteka - jedina
import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import CommentInput from '../components/CommentInput';
import CommentItem from '../components/CommentItem';

export function HomeScreen({ route, navigation }) {
  //da se pohranjuju podaci s endpointa
  const [data, setData] = useState([]);
  //jer se većinom podaci loadaju - učitavaju
  const [isLoading, setLoading] = useState([]);

  function handleHomePress() {
    navigation.navigate('Home');
  }
  //kreiramo funkciju koja će dohvatiti rezultat iz endpointa
  const getMovies = async () => {
    try {
      // u responsu dobivamo rezultate apija
      //const response = await fetch('https://reactnative.dev/movies.json');
      const response = await fetch('https://api.sampleapis.com/beers/ale');
      const json = await response.json();
      //setData(json.movies);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.wrap}>
                <Text style={styles.product}>Name: {item.name}</Text>
                <Text>Price: {item.price}</Text>
                <Text>Rating average: {item.rating.average}</Text>
                <Text>Rating reviews: {item.rating.reviews}</Text>
                <Image style={styles.image} source={{ uri: `${item.image}` }} />
              </View>
            )}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    paddingLeft: 10,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  wrap: {
    padding: 20,
  },
  product: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#c23f3d"
  }
});
