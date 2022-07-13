import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { vh, vw } from "../units";

const MovieResult = (props) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, paddingHorizontal: 5 * vw }}
      onPress={props.navigation}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${props.image}` }}
          style={styles.image}
        />
        <View>
          <Text style={[styles.text, styles.title]}>{props.title}</Text>
          <Text style={[styles.text, styles.date]}>{props.date}</Text>
          <Text style={[styles.text, styles.date]}>{props.type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieResult;

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 2 * vw,
    alignItems: "center",
    marginVertical: 0.5 * vh,
    flexDirection: "row",
    width: 95 * vw,
    alignSelf: "center",
    flex: 1,
  },
  image: {
    borderRadius: 5,
    marginEnd: 2 * vw,
    height: 22 * vh,
    width: 24 * vw,
  },
  text: {
    color: "#fff",
  },
  title: {
    fontSize: 17,
    flexWrap: "wrap",
  },
  date: {
    fontSize: 15,
    opacity: 0.7,
  },
});
