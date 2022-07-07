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
import { LatestMovies } from "../../../redux/actions/latestMovie";
import { PopularMovies } from "../../../redux/actions/popularMovies";
import { TopRatedMovies } from "../../../redux/actions/topRatedMovies";

const Featured = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const [is_loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { latest_movies } = useSelector((state) => state.Latest);
  const { pop_movies } = useSelector((state) => state.PopMovies);
  const { top_rated } = useSelector((state) => state.TopRated);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    dispatch(LatestMovies());
    dispatch(PopularMovies());
    dispatch(TopRatedMovies());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"rgba(32, 33, 35, 1)"}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            // progressBackgroundColor={"#fab430"}
            // colors={["#fab430", "#fff"]}
          />
        }
      >
        {/* Latest Movies */}
        <View style={{ paddingTop: 10, minHeight: 40 * vh }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Latest Movies</Text>
          </View>
          <FlatList
            data={latest_movies}
            renderItem={({ item }) => (
              <MovieCard
                key={item.id}
                title={item.original_title}
                image={item.backdrop_path}
                date={item.release_date}
                navigation={() => {
                  navigation.navigate("movieDetails", item);
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
          {pop_movies?.map((pop, i) => {
            return (
              <PotraitMovieCard
                key={pop.id}
                title={pop.original_title}
                image={pop.backdrop_path}
                date={pop.release_date}
                navigation={() => {
                  navigation.navigate("movieDetails", pop);
                }}
              />
            );
          })}
          {/* <FlatList
            data={pop_movies}
            renderItem={({ item }) => (
              <PotraitMovieCard
                key={item.id}
                title={item.title}
                image={item.image}
                date={item.paragraph}
                navigation={() => {
                  navigation.navigate("movieDetails", item);
                }}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          /> */}
        </View>

        {/* Top rated */}
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Top rated</Text>
          </View>
          {top_rated?.map((top, i) => {
            return (
              <PotraitMovieCard
                key={top.id}
                title={top.original_title}
                image={top.backdrop_path}
                date={top.release_date}
                navigation={() => {
                  navigation.navigate("movieDetails", top);
                }}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Featured;

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
