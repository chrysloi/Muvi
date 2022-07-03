import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useCallback, useEffect, useState } from "react";
import * as icons from "@expo/vector-icons";
import { vw, vh } from "../../components/units";
import { useDispatch, useSelector } from "react-redux";
import { GetVideoId } from "../../redux/actions/videos.action";
import YoutubePlayer from "react-native-youtube-iframe";
import Button from "../../components/button";

export default function DetailScreen({ route, navigation }) {
  const { original_title, backdrop_path, poster_path, overview, release_date } =
    route.params;
  const dispatch = useDispatch();
  const { video_id } = useSelector((state) => state.Trailer);
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing");
    }
  }, []);

  const tooglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  useEffect(() => {
    dispatch(GetVideoId(route.params.id));
  }, []);
  const youtubeKey = video_id?.filter(
    (video) => video.name === "Official Trailer"
  );
  // .map((video) => video.key && video.name)
  console.log(youtubeKey);

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#26272b",
          alignItems: "center",
          flex: 1,
          paddingBottom: 10 * vh,
        }}
      >
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}` }}
          style={{ width: 100 * vw, height: 40 * vh }}
          blurRadius={2}
        />
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{ position: "absolute", top: 3 * vh, left: 5 * vw }}
        >
          <icons.Ionicons name="arrow-back-outline" size={26} color="#fed130" />
        </TouchableOpacity> */}
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
          style={{
            position: "absolute",
            width: 50 * vw,
            height: 40 * vh,
            top: 13 * vh,
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
          {original_title}
        </Text>
        <Text style={{ color: "grey", paddingTop: 1 * vh }}>
          {release_date}
        </Text>
        {/* <Text style={{ color: "grey", paddingTop: 5 }}>
          Adventure, Romantic, Thriller
        </Text> */}
        {youtubeKey?.map((video, i) => {
          return (
            <YoutubePlayer
              key={video.id}
              height={200}
              width={"100%"}
              play={playing}
              videoId={video.key}
              onChangeState={onStateChange}
            />
          );
          // <Button title={playing ? "pause" : "play"} onPress={tooglePlaying} />;
        })}

        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 40,
            minWidth: 340,
            backgroundColor: "#fed130",
            marginHorizontal: 20,
            marginVertical: 15,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={tooglePlaying}
        >
          <icons.Feather name="play" size={16} color="black" />
          <Text style={{ paddingHorizontal: 5 }}>
            {playing ? "Pause" : "Play"}
          </Text>
        </TouchableOpacity>
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
        <Text style={styles.overview}>{overview}</Text>
        {/* <Text
          style={{ color: "grey", marginHorizontal: 35, marginVertical: 10 }}
        >
          Cast: Tom Holland, Mark Wahlberg, Antonio Banderas, Sophia Ali, Tati
          Gabrielle, Steven Waddington, Pingi Moli, Tiernan Jones, Rudy Pankow,
          Jesús Evita, Georgia Goodman, Diarmaid Murtagh, Joseph Balderrama,
          Serena Posadino, Alana Boden, Jonathan Failla, Anthony Thomas, Peter
          Seaton-Clark
        </Text> */}
      </View>
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
});
