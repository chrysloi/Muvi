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
import MovieCard from "../movieCards/cardLandscape";
import EpisodeCard from "../movieCards/cardPortrait";

export default function SerieDetail(props) {
  const { params } = props.route;
  const navigation = useNavigation();
  const imageUri = "https://image.tmdb.org/t/p/w500";

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#26272b" }}
      contentContainerStyle={{ alignItems: "center", paddingBottom: 3 * vh }}
    >
      <Image
        source={{ uri: `${imageUri}${params.backdrop_path}` }}
        style={{ width: 100 * vw, height: 40 * vh }}
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
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
        {params.original_name}
      </Text>
      <Text style={[styles.text, { fontSize: 4 * vw, opacity: 0.7 }]}>
        {params.overview}
      </Text>
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
        })} */}
      {/* <Text style={{ color: "grey", paddingTop: 5 }}>
          Adventure, Romantic, Thriller
        </Text> */}
      <TouchableOpacity style={styles.buttonPlay}>
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
      <View style={styles.lastEpisode}>
        <EpisodeCard />
        <View style={styles.details}>
          <Text style={[styles.text, { fontSize: 8 * vw }]}>Title</Text>
          <Text style={[styles.text, { fontSize: 4 * vw }]}>Air date</Text>
          <Text style={[styles.text, { fontSize: 4 * vw }]}>
            episode number
          </Text>
          <Text style={[styles.text, { fontSize: 4 * vw }]}>overview</Text>
        </View>
      </View>

      <Text
        style={[
          styles.text,
          { fontSize: 6 * vw, alignSelf: "flex-start", marginStart: 3 * vh },
        ]}
      >
        Seasons
      </Text>
      <FlatList
        style={{ marginVertical: 2 * vh }}
        data={item}
        renderItem={({ item }) => (
          <MovieCard
            key={item.id}
            title={item.title}
            image={item.image}
            date={item.paragraph}
            navigation={() => {
              navigation.navigate("movieDetails", item);
            }}
          />
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
    paddingHorizontal: 5,
    color: "#fff",
    fontWeight: "500",
  },
  lastEpisode: {
    marginVertical: 3 * vh,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 5 * vw,
    alignSelf: "flex-start",
  },
  details: {
    marginHorizontal: 3 * vw,
  },
});

const item = [
  {
    key: 1,
    title: "Enjoy your favourite movies everywhere",
    paragraph:
      "browse through our collections and discover hundeds of movies and series you love",
    image: {
      uri: "https://images.theconversation.com/files/291712/original/file-20190910-109952-1fzv6iu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
    },
  },
  {
    key: 2,
    title: "You get to choose!",
    paragraph:
      "Through all kind of genre you will be able to choose movies to watch when you want to.",
    image: {
      uri: "https://www.aiesec.in/wp-content/uploads/2018/08/Captain-america-1.jpg",
    },
  },
  {
    key: 3,
    title: "From your favourite actors in the world",
    paragraph:
      "From the actors you love you will be able to watch the movies wherever you are comfortable",
    image: require("../../../assets/Thor.jpg"),
  },
];
