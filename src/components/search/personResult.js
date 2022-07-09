import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { vw } from "../units";

export default movieResult = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${props.image}` }}
      />
      <View>
        <Text style={[styles.text, styles.title]}>{props.title}</Text>
        <Text style={[styles.text, styles.date]}>{props.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2 * vw,
    flexDirection: "row",
  },
  image: {
    borderRadius: 5,
    marginEnd: 2 * vw,
  },
  text: {
    color: "#fff",
  },
  title: {
    fontSize: 17,
  },
  date: {
    fontSize: 15,
    opacity: 0.7,
  },
});
