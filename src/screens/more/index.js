import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Alert,
  ToastAndroid,
  TouchableOpacity,
  Image,
} from "react-native";
import { vh, vw } from "../../components/units";
import Button from "../../components/button";
import { auth } from "../../utils/auth.firebase";

const More = () => {
  const navigation = useNavigation();
  const signOut = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
      ToastAndroid.show("logged out", ToastAndroid.SHORT);
    });
  };
  return (
    <SafeAreaView style={[{ flex: 1 }, styles.container]}>
      <View style={{ backgroundColor: "#202123" }}>
        <View
          style={{
            height: 20 * vh,
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../../../assets/Thor.jpg")}
            style={{ height: 13 * vh, width: 26 * vw }}
          />
          <Text>Name</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={{ color: "red", fontSize: 16, opacity: 0.5 }}>
          Sign Out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26272b",
  },
  button: {
    position: "absolute",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
    width: 90 * vw,
    height: 7 * vh,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    bottom: 3 * vh,
  },
});
