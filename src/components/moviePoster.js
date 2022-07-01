import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { GetSingleMovie } from "../redux/actions/movies.actions";
import { connect } from "react-redux";
import { vh, vw } from "./units";

const MovieCard = (props) => {
  const { image, title, date } = props;
  // const [id, setId]= useState(null)

  const onPress = () => {
    props.GetSingleMovie(props.id);
    // alert(props.id);
    // console.log(props.id);
  };

  return (
    <View>
      <TouchableOpacity style={styles.containerStyles} onPress={onPress}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
          style={styles.imageStyles}
        />
        <View>
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
// const mapState = ({ Movies }) => ({
//   detail: Movies.movieDetails,
// });
export default MovieCard;

const styles = StyleSheet.create({
  containerStyles: {
    width: 35 * vw,
    // height: 280,
    // backgroundColor: "#F4F5F7",
    marginLeft: 2.8 * vw,
    marginBottom: 1 * vh,
  },
  imageStyles: {
    width: "100%",
    height: 30 * vh,
    borderRadius: 1.5 * vh,
    marginBottom: 1 * vh,
  },
  titleStyles: {
    fontSize: 4 * vw,
    fontWeight: "600",
    lineHeight: 3 * vh,
    color: "#fff",
  },
  dateStyles: {
    opacity: 0.5,
    color: "#fff",
    marginVertical: 0.5 * vh,
  },
});
