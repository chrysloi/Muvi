import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from "react-native";
import * as icons from "@expo/vector-icons";
import { vw, vh } from "../units";
import { useNavigation } from "@react-navigation/native";
import MovieCard from "../movieCards/cardPortrait";
import EpisodeCard from "../movieCards/serieCard";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { Serie, ResetSerie } from "../../redux/actions/getSerie";
import { useState } from "react";
import { GetVideo } from "../../redux/actions";
import Trailer from "../trailer";

export default function SerieDetail(props) {
  const { params } = props.route;
  const navigation = useNavigation();
  const imageUri = "https://image.tmdb.org/t/p/w500";

  const { serieDetails } = useSelector((state) => state.Serie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Serie(params));
  }, []);

  const handleBack = () => {
    dispatch(ResetSerie());
    navigation.goBack();
  };

  const seasons = serieDetails.seasons;
  // const last_episode = serieDetails.last_episode_to_air;
  // const episodePoster = last_episode.still_path;
  // const episodeTitle = last_episode.name;
  // const episodeAirDate = last_episode.air_date;
  // console.log(last_episode);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#26272b" }}
      contentContainerStyle={{ alignItems: "center", paddingBottom: 3 * vh }}
    >
      <Image
        source={{ uri: `${imageUri}${serieDetails.backdrop_path}` }}
        style={{ width: 100 * vw, height: 40 * vh }}
      />

      <TouchableOpacity
        onPress={handleBack}
        style={{ position: "absolute", top: 3 * vh, left: 5 * vw }}
      >
        <icons.Ionicons name="arrow-back-outline" size={26} color="#fed130" />
      </TouchableOpacity>

      <Text
        style={{
          color: "#fff",
          paddingVertical: 2.5 * vh,
          fontSize: 7.5 * vw,
          fontWeight: "900",
        }}
      >
        {serieDetails.original_name}
      </Text>
      <Text style={[styles.text, { fontSize: 4 * vw, opacity: 0.7 }]}>
        {serieDetails.overview}
      </Text>
      <TouchableOpacity
        style={styles.buttonPlay}
        onPress={() => setPlaying(!playing)}
      >
        <icons.Feather name="play" size={16} color="black" />
        <Text style={{ paddingHorizontal: 5 }}>Play</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.buttonOther}>
          <icons.AntDesign name="plus" size={16} color="#fed130" />
          <Text style={styles.text}>My List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOther}>
          <icons.Feather name="download" size={16} color="#fed130" />
          <Text style={styles.text}>Download</Text>
        </TouchableOpacity>
      </View>
      {/* <Text
        style={[
          styles.text,
          {
            fontSize: 6 * vw,
            alignSelf: "flex-start",
            marginStart: 3 * vh,
            marginVertical: 2 * vh,
          },
        ]}
      >
        Latest episode
      </Text>
      <EpisodeCard
      // image={episodePoster}
      // title={episodeTitle}
      // date={episodeAirDate}
      >
        {youtubeKey?.map((video, i) => {
          return (
            <YoutubePlayer
              key={i}
              height={33 * vh}
              width={100 * vw}
              play={playing}
              videoId={video.key}
              onChangeState={onStateChange}
            />
          );
        })}
      </EpisodeCard> */}

      <Text
        style={[
          styles.text,
          {
            fontSize: 6 * vw,
            alignSelf: "flex-start",
            marginStart: 3 * vh,
            marginVertical: 2 * vh,
          },
        ]}
      >
        Seasons
      </Text>
      <FlatList
        data={seasons}
        renderItem={({ item }) => (
          <MovieCard key={item.id} title={item.name} image={item.poster_path} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {/* <Text style={styles.overview}>{overview}</Text> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  overview: {
    color: "#fff",
    marginHorizontal: 4.5 * vw,
    marginTop: 2 * vh,
  },
  buttonPlay: {
    flexDirection: "row",
    height: 6.5 * vh,
    minWidth: 90 * vw,
    marginTop: 3 * vh,
    backgroundColor: "#fed130",
    marginHorizontal: 4 * vw,
    marginVertical: 1 * vh,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOther: {
    flexDirection: "row",
    height: 6.5 * vh,
    width: 42 * vw,
    backgroundColor: "#26272b",
    borderWidth: 1,
    borderColor: "#000",
    marginHorizontal: 4 * vw,
    marginVertical: 2 * vh,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingHorizontal: 5 * vw,
    color: "#fff",
    fontWeight: "500",
  },
  lastEpisode: {
    marginVertical: 3 * vh,
    flexDirection: "row",
    justifyContent: "flex-start",
    // marginHorizontal: 5 * vw,
    alignSelf: "flex-start",
  },
});
