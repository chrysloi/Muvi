import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { vh, vw } from "../units";

export default (props) => {
  const { image, title, date, navigation } = props;
  // const [id, setId]= useState(null)

  return (
    <View>
      <TouchableOpacity style={styles.containerStyles} onPress={navigation}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
          style={styles.imageStyles}
        />
        <View style={styles.text}>
          <Text numberOfLines={1} style={styles.titleStyles}>
            {title}
          </Text>
          <Text style={styles.dateStyles}>{date}</Text>
        </View>
      </TouchableOpacity>
      {/* {props.detail ? console.log(props.detail) : ""} */}
    </View>
  );
};

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
    marginHorizontal: 5,
  },
  dateStyles: {
    opacity: 0.5,
    color: "#fff",
    marginVertical: 0.5 * vh,
    marginHorizontal: 5,
  },
});
