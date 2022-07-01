import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GetSingleMovie } from "../redux/actions/movies.actions";
import { connect } from "react-redux";

const MovieCard = (props, { navigation }) => {
  const { image, title, date, key } = props;
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
const mapState = ({ Movies }) => ({
  detail: Movies.movieDetails,
});
export default connect(mapState, { GetSingleMovie: GetSingleMovie })(MovieCard);

const styles = StyleSheet.create({
  containerStyles: {
    width: 170,
    // height: 280,
    // backgroundColor: "#F4F5F7",
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 30,
  },
  imageStyles: {
    width: 170,
    height: 185,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginBottom: 10,
  },
  titleStyles: {
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 15,
    color: "#fff",
  },
  dateStyles: {
    opacity: 0.5,
    color: "#fff",
    marginVertical: 5,
  },
});
