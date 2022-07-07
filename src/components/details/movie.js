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

export default function MovieDetail(props) {
  const { params } = props.route;
  const navigation = useNavigation();
  const imageUri = "https://image.tmdb.org/t/p/w500";

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{ uri: `${imageUri}${params.backdrop_path}` }}
          style={{ width: 100 * vw, height: 40 * vh }}
          blurRadius={2}
        />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 3 * vh, left: 5 * vw }}
        >
          <icons.Ionicons name="arrow-back-outline" size={26} color="#fed130" />
        </TouchableOpacity>
        <Image
          source={{ uri: `${imageUri}${params.poster_path}` }}
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
          {params.original_title}
        </Text>
        <Text
          style={{
            color: "grey",
            paddingTop: 1 * vh,
            paddingBottom: 3 * vh,
          }}
        >
          {params.release_date}
        </Text>
        {/* <Text style={{ color: "grey", paddingTop: 5 }}>
              Adventure, Romantic, Thriller
            </Text> */}
        {/* {youtubeKey?.map((video, i) => {
              return (
                <YoutubePlayer
                  key={video.id}
                  height={33 * vh}
                  width={100 * vw}
                  play={playing}
                  videoId={video.key}
                  onChangeState={onStateChange}
                />
              );
              // <Button title={playing ? "pause" : "play"} onPress={tooglePlaying} />;
            })} */}

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
          // onPress={tooglePlaying}
        >
          <icons.Feather name="play" size={16} color="black" />
          <Text style={{ paddingHorizontal: 5 }}>Play</Text>
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
        <Text style={styles.overview}>{params.overview}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#26272b",
    alignItems: "center",
    flex: 1,
    paddingBottom: 10 * vh,
  },
  overview: {
    color: "#fff",
    marginHorizontal: 4.5 * vw,
    marginTop: 2 * vh,
  },
});
