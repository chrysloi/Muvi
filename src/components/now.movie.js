import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GetSingleMovie } from "../redux/actions/movies.actions";
import { connect } from "react-redux";
import { vh, vw } from "./units";

const MovieCardLarge = (props, navigation) => {
  const { image, title, date, key, overview } = props;
  // const [id, setId]= useState(null)

  // const onPress = () => {
  //   // props.GetSingleMovie(props.id);
  //   // alert(overview);
  //   // console.log(props.id);
  // };

  return (
    <View>
      <TouchableOpacity
        style={styles.containerStyles}
        onPress={props.navigation}
      >
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
          style={styles.imageStyles}
        />
        <View style={styles.text}>
          <Text
            numberOfLines={1}
            style={[styles.titleStyles, { marginHorizontal: 5 }]}
          >
            {title}
          </Text>
          <Text style={[styles.dateStyles, { marginHorizontal: 5 }]}>
            {date}
          </Text>
        </View>
      </TouchableOpacity>
      {/* {props.detail ? console.log(props.detail) : ""} */}
    </View>
  );
};
const mapState = ({ Movies }) => ({
  detail: Movies.movieDetails,
});
export default connect(mapState, { GetSingleMovie: GetSingleMovie })(
  MovieCardLarge
);

const styles = StyleSheet.create({
  containerStyles: {
    width: 97 * vw,
    height: 35 * vh,
    // borderRadius: 40,
    marginLeft: 1.5 * vw,
    marginBottom: 1.8 * vw,
  },
  imageStyles: {
    width: "100%",
    height: "100%",
    borderRadius: 1.5 * vh,
    marginBottom: 1 * vh,
    position: "absolute",
  },
  text: {
    paddingHorizontal: 0.7 * vw,
    position: "relative",
    top: 25 * vh,
  },
  titleStyles: {
    fontSize: 6 * vw,
    fontWeight: "600",
    lineHeight: 3.5 * vh,
    color: "#fff",
  },
  dateStyles: {
    opacity: 0.5,
    color: "#fff",
    marginVertical: 0.5 * vh,
  },
});
