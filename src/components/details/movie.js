import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as icons from "@expo/vector-icons";
import { vw, vh } from "../units";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetVideo, ResetVideo } from "../../redux/actions";
import YoutubePlayer from "react-native-youtube-iframe";
import { GetSingleMovie, ResetSingleMovie } from "../../redux/actions/";

export default function MovieDetail(props) {
  const { params } = props.route;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const imageUri = "https://image.tmdb.org/t/p/w500";
  const { video } = useSelector((state) => state.Video);
  const { movieDetails } = useSelector((state) => state.Movie);

  const youtubeKey = video?.filter(
    (vid) => vid.name === "Official Trailer"
  )?.[0]?.key;

  useEffect(() => {
    dispatch(GetSingleMovie(params));
    dispatch(GetVideo(params));
  }, []);

  const handleBack = () => {
    dispatch(ResetSingleMovie());
    dispatch(ResetVideo());
    navigation.goBack();
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#26272b" }}>
      <View style={styles.container}>
        <Image
          source={{ uri: `${imageUri}${movieDetails.backdrop_path}` }}
          style={{ width: 100 * vw, height: 35 * vh }}
          blurRadius={2}
        />

        <TouchableOpacity
          onPress={handleBack}
          style={{ position: "absolute", top: 3 * vh, left: 5 * vw }}
        >
          <icons.Ionicons name="arrow-back-outline" size={26} color="#fed130" />
        </TouchableOpacity>

        <Image
          source={{ uri: `${imageUri}${movieDetails.poster_path}` }}
          style={{
            position: "absolute",
            width: 50 * vw,
            height: 40 * vh,
            top: 8 * vh,
          }}
        />

        <Text
          style={{
            color: "#fff",
            paddingTop: 14 * vh,
            fontSize: 7.5 * vw,
            fontWeight: "900",
          }}
        >
          {movieDetails.original_title}
        </Text>
        <Text
          style={{
            color: "grey",
            paddingTop: 1 * vh,
            paddingBottom: 3 * vh,
          }}
        >
          {movieDetails.release_date}
        </Text>
        <YoutubePlayer
          height={35 * vh}
          width={100 * vw}
          play={false}
          videoId={youtubeKey}
        />

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 6.5 * vh,
              width: 42 * vw,
              backgroundColor: "#26272b",
              borderWidth: 1,
              borderColor: "#000",
              marginHorizontal: 4.5 * vw,
              marginVertical: 2 * vh,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <icons.AntDesign name="plus" size={16} color="#fed130" />
            <Text style={{ paddingHorizontal: 5, color: "#fff" }}>My List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 6.5 * vh,
              width: 42 * vw,
              backgroundColor: "#26272b",
              borderWidth: 1,
              borderColor: "#000",
              marginHorizontal: 4.5 * vw,
              marginVertical: 2 * vh,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <icons.Feather name="download" size={16} color="#fed130" />
            <Text style={{ paddingHorizontal: 5, color: "#fff" }}>
              Download
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.overview}>{movieDetails.overview}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 5 * vh,
  },
  overview: {
    color: "#fff",
    marginHorizontal: 4.5 * vw,
    marginTop: 2 * vh,
  },
});
