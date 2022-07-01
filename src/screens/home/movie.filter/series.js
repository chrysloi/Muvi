import { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { PopularSeries } from "../../../redux/actions/series.action";
import MovieCardlarge from "../../../components/now.movie";

const Series = ({ navigation }) => {
  const [is_loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { pop_series } = useSelector((state) => state.Series);

  useEffect(() => {
    dispatch(PopularSeries());
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {pop_series?.map((serie, i) => {
          return (
            <MovieCardlarge
              key={serie.id}
              id={serie.id}
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
