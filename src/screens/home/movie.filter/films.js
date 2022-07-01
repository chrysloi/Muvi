import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import MovieCardLarge from "../../../components/now.movie";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NowPlayingMovies } from "../../../redux/actions/movies.actions";
import { vw, vh } from "../../../components/units";

const Films = ({ navigation }) => {
  const [is_loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { now_playing } = useSelector((state) => state.Movies);
  useEffect(() => {
    dispatch(NowPlayingMovies());
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Now playing */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, { paddingTop: 10 }]}
      >
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
              // onPress={toDetails}
            />
          );
        })}
        {!now_playing && (
          <Text style={{ color: "#fff" }}>Nothing to display</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Films;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26272b",
  },
});
