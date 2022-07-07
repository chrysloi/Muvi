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
import { connect } from "react-redux";
import { vh, vw } from "../units";
import { useNavigation } from "@react-navigation/native";

export default (props) => {
  // const { image, title, date } = props;
  // const navigation = useNavigation();
  // const image = require("../../../assets/Thor.jpg");

  return (
    <View>
      <TouchableOpacity
        style={styles.containerStyles}
        onPress={props.navigation}
      >
        <Image
          source={require("../../../assets/Thor.jpg")}
          style={styles.imageStyles}
        />
        <View style={styles.text}>
          <Text numberOfLines={1} style={styles.titleStyles}>
            Thor Love and Thunder
          </Text>
          <Text style={styles.dateStyles}>8 Jul. 2022</Text>
        </View>
      </TouchableOpacity>
      {/* {props.detail ? console.log(props.detail) : ""} */}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    width: 83 * vw,
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
