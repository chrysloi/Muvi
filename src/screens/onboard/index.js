import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Button from "../../components/button";
import { vh, vw } from "../../components/units";

const OnBoardScreen = ({ navigation }) => {
  const onDone = () => {
    navigation.navigate("Login");
  };

  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground style={styles.container} source={item.image}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.paragraph}</Text>
        </ImageBackground>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        onDone={onDone}
        showDoneButton={false}
        showNextButton={false}
        activeDotStyle={styles.activeDot}
        dotStyle={styles.dotStyle}
        renderDoneButton
      />
      <View style={styles.button}>
        <Button title={"Get started"} onPress={onDone} />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardScreen;

const slides = [
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9c9c9",
    justifyContent: "center",
    paddingHorizontal: 5 * vw,
    // paddingBottom: 50,
  },
  button: {
    position: "absolute",
    bottom: 2 * vh,
    width: 95 * vw,
    alignSelf: "center",
  },
  title: {
    fontSize: 9 * vw,
    fontWeight: "800",
    lineHeight: 6 * vh,
    color: "#fff",
  },
  activeDot: {
    marginBottom: 60 * vh,
    left: -31 * vw,
    width: 10.5 * vw,
    backgroundColor: "rgba(250, 180, 48, 0.8)",
    height: 0.8 * vh,
  },
  dotStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginBottom: 60 * vh,
    left: -31 * vw,
    width: 6 * vw,
    height: 0.8 * vh,
    // opacity: 0.5,
    // backgroundColor: "red",
  },
  description: {
    fontSize: 4.5 * vw,
    color: "#fff",
    marginTop: 1.5 * vh,
  },
});
