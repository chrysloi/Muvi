import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  RefreshControl,
  FlatList,
} from "react-native";
import * as icons from "@expo/vector-icons";
import MovieCard from "../../../components/movieCards/cardLandscape";

import { useSelector, useDispatch } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";
import { vw, vh } from "../../../components/units";
import { useNavigation } from "@react-navigation/native";
import PotraitMovieCard from "../../../components/movieCards/cardPortrait";
import { Upcoming } from "../../../redux/actions/upcomingMovies";
import { PopularMovies } from "../../../redux/actions/popularMovies";
import { TopRatedMovies } from "../../../redux/actions/topRatedMovies";

export const Featured = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const [refreshing, setRefreshing] = useState(false);
  const { upcoming_movies } = useSelector((state) => state.Upcoming);
  const { pop_movies } = useSelector((state) => state.PopMovies);
  const { top_rated } = useSelector((state) => state.TopRated);

  useEffect(() => {
    dispatch(Upcoming());
    dispatch(PopularMovies());
    dispatch(TopRatedMovies());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"rgba(32, 33, 35, 1)"}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* Upcoming Movies */}
        <View style={{ paddingTop: 10, minHeight: 40 * vh }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Upcoming Movies</Text>
          </View>
          <FlatList
            data={upcoming_movies}
            renderItem={({ item }) => (
              <MovieCard
                key={item.id}
                title={item.original_title}
                image={item.backdrop_path}
                date={item.release_date}
                navigation={() => {
                  navigation.navigate("movieDetails", item.id);
                }}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Popular movies */}
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Popular movies</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {pop_movies?.map((pop, i) => {
              return (
                <PotraitMovieCard
                  key={i}
                  title={""}
                  image={pop.poster_path}
                  date={""}
                  navigation={() => {
                    navigation.navigate("movieDetails", pop.id);
                  }}
                />
              );
            })}
          </ScrollView>
        </View>

        {/* Top rated */}
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Top rated</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {top_rated?.map((top, i) => {
              return (
                <PotraitMovieCard
                  key={i}
                  title={""}
                  image={top.poster_path}
                  date={""}
                  navigation={() => {
                    navigation.navigate("movieDetails", top.id);
                  }}
                />
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26272b",
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: "#fff",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 15,
    marginHorizontal: 10,
    alignItems: "flex-end",
    paddingTop: 10,
  },
  potraitCard: {
    height: 35 * vh,
    width: 40 * vw,
  },
});
