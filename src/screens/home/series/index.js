import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../../components/movieCards/serieCard";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, SafeAreaView } from "react-native";
import { PopularSeries } from "../../../redux/actions";

const Series = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { pop_series } = useSelector((state) => state.PopSeries);

  useEffect(() => {
    dispatch(PopularSeries());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {pop_series?.map((serie, i) => {
          return (
            <MovieCard
              key={serie.id}
              title={serie.name}
              image={serie.backdrop_path}
              date={serie.first_air_date}
              overview={serie.overview}
              navigation={() => {
                navigation.navigate("SerieDetails", serie);
              }}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Series;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26272b",
  },
});
