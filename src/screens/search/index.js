// import { Text, View, SafeAreaView } from "react-native";

// const Search = () => {
//   return (
//     <SafeAreaView>
//       <View>
//         <Text>Search what you need</Text>
//       </View>
//     </SafeAreaView>
//   );
// };
// export default Search;

import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import MovieCard from "../../components/movieCards/serieCard";
import React, { useEffect } from "react";

import { vw, vh } from "../../components/units";
import { useNavigation } from "@react-navigation/native";
import { NowPlayingMovies } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Films = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const { now_playing } = useSelector((state) => state.Playing);

  useEffect(() => {
    dispatch(NowPlayingMovies());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {now_playing?.map((now, index) => {
          return (
            <MovieCard
              key={now.id}
              title={now.title}
              image={now.backdrop_path}
              date={now.release_date}
              navigation={() => {
                navigation.navigate("movieDetails", now);
              }}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Films;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26272b",
    paddingTop: 2 * vh,
  },
});
