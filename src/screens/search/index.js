import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { vh, vw } from "../../components/units";
import * as icons from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Searching } from "../../redux/actions/searchAction";
import MovieResult from "../../components/search/movieResult";
import { useNavigation } from "@react-navigation/native";
import { WaveIndicator } from "react-native-indicators";

const Search = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [keyWord, setKeyWord] = useState("");
  const { search_result, searched } = useSelector((state) => state.Search);

  const startSearch = () => {
    dispatch(Searching(keyWord));
  };

  if (keyWord !== "") {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.input}>
          <TextInput
            placeholder="Type Title, Categories, years, etc"
            style={{
              fontSize: 16,
              width: 85 * vw,
              opacity: 0.8,
              color: "#fff",
            }}
            placeholderTextColor="#fff"
            value={keyWord}
            onChangeText={(text) => setKeyWord(text)}
            onChange={startSearch}
          />
          <TouchableOpacity onPress={startSearch}>
            <icons.Feather name="search" color={"#fab430"} size={25} />
          </TouchableOpacity>
        </View>
        {searched ? (
          <ScrollView style={{ paddingVertical: 2 * vh }}>
            {search_result?.map((result, i) => {
              if (result.media_type === "movie") {
                return (
                  <MovieResult
                    key={i}
                    image={result.poster_path}
                    title={result.original_title}
                    date={`Release date: ${result.release_date}`}
                    type={`Type: Movie`}
                    navigation={() =>
                      navigation.navigate("movieDetails", result.id)
                    }
                  />
                );
              }
              if (result.media_type === "tv") {
                return (
                  <MovieResult
                    key={i}
                    image={result.poster_path}
                    title={result.name}
                    date={`Air date: ${result.first_air_date}`}
                    type={`Type: Tv series`}
                    navigation={() =>
                      navigation.navigate("SerieDetails", result.id)
                    }
                  />
                );
              }
              if (result.media_type === "person") {
                return (
                  <MovieResult
                    key={i}
                    image={result.profile_path}
                    title={result.name}
                  />
                );
              }
            })}
          </ScrollView>
        ) : (
          <WaveIndicator color="#fab430" />
        )}
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.input}>
          <TextInput
            placeholder="Type Title, Categories, years, etc"
            style={{
              fontSize: 16,
              width: 85 * vw,
              opacity: 0.8,
              color: "#fff",
            }}
            placeholderTextColor="#fff"
            value={keyWord}
            onChangeText={(text) => setKeyWord(text)}
            onChange={startSearch}
          />
          <TouchableOpacity onPress={startSearch}>
            <icons.Feather name="search" color={"#fab430"} size={25} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
};
export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26272b",
  },
  input: {
    backgroundColor: "#38393d",
    width: "100%",
    paddingVertical: 2 * vh,
    justifyContent: "center",
    paddingHorizontal: 3 * vw,
    flexDirection: "row",
    // marginBottom: 2 * vh,
    alignItems: "center",
  },
});
