import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import * as icons from "@expo/vector-icons";
import MovieCard from "../../../components/moviePoster";
import MovieCardLarge from "../../../components/now.movie";
import {
  popularMovies,
  topRatedMovies,
  NowPlayingMovies,
} from "../../../redux/actions/movies.actions";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { vw, vh } from "../../../components/units";

const Featured = ({ navigation }) => {
  const [is_loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { top_rated, pop_movies, now_playing } = useSelector(
    (state) => state.Movies
  );
  useEffect(() => {
    dispatch(topRatedMovies());
    dispatch(popularMovies());
    dispatch(NowPlayingMovies());
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"rgba(32, 33, 35, 1)"}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* Now playing */}
        <View style={{ paddingTop: 10, minHeight: 40 * vh }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              marginBottom: 15,
              marginHorizontal: 10,
              alignItems: "flex-end",
              paddingTop: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "800", color: "#fff" }}>
              Now playing
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("films")}>
              <Text style={{ color: "#fff" }}>View more</Text>
            </TouchableOpacity>
          </View>
          {is_loading && <ActivityIndicator size="small" color="white" />}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {now_playing?.map((now, index) => {
              return (
                <MovieCardLarge
                  key={now.id}
                  id={now.id}
                  title={now.title}
                  image={now.backdrop_path}
                  date={now.release_date}
                  navigation={() => {
                    navigation.navigate("Details", now);
                  }}
                />
              );
            })}
          </ScrollView>
        </View>

        {/* Top rated */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              marginBottom: 15,
              marginHorizontal: 10,
              alignItems: "flex-end",
              paddingTop: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "800", color: "#fff" }}>
              Top rated
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#fff" }}>View more</Text>
            </TouchableOpacity>
          </View>
          {is_loading && <ActivityIndicator size={"small"} color="#fff" />}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {top_rated?.map((top, index) => {
              return (
                <MovieCard
                  key={top.id}
                  title={top.title}
                  image={top.poster_path}
                  date={top.release_date}
                />
              );
            })}
            {/* {!top_rated && (
              <Text style={{ color: "#fff" }}>Nothing to display</Text>
            )} */}
          </ScrollView>
        </View>

        {/* Popular Movies */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              marginBottom: 15,
              marginHorizontal: 10,
              alignItems: "flex-end",
              paddingTop: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "800", color: "#fff" }}>
              Popular movies
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#fff" }}>View more</Text>
            </TouchableOpacity>
          </View>
          {is_loading && <ActivityIndicator size={"large"} color="#fff" />}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {pop_movies?.map((movie, index) => {
              return (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  image={movie.poster_path}
                  date={movie.release_date}
                />
              );
            })}
          </ScrollView>
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
});
