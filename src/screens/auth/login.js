import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../../components/button";
import * as icons from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../utils/auth.firebase";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const toRegister = () => {
    navigation.replace("Register");
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Main");
      }
    });
  }, []);
  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        ToastAndroid.show("Logged in", ToastAndroid.LONG);
      })
      .then(() => navigation.replace("Main"))
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"#202123"}
        hidden={false}
      />
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="height">
          <View style={styles.holder}>
            <Text style={{ marginBottom: 10, color: "#fff", fontSize: 15 }}>
              Email Address
            </Text>
            <View style={styles.input}>
              <icons.FontAwesome
                name="envelope-o"
                size={25}
                color="#fff"
                style={{ marginEnd: 10 }}
              />
              <TextInput
                placeholder="e.g mail@example.com"
                placeholderTextColor={"#c9c9c9"}
                style={{ fontSize: 17, color: "#fff", opacity: 1 }}
                keyboardType={"email-address"}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
          <View style={styles.holder}>
            <Text style={{ marginBottom: 10, color: "#fff", fontSize: 15 }}>
              Password
            </Text>
            <View style={styles.input}>
              <icons.MaterialIcons
                name="lock-outline"
                size={25}
                color="#fff"
                style={{ marginEnd: 10 }}
              />
              <TextInput
                placeholder="your password"
                placeholderTextColor={"#c9c9c9"}
                style={{ fontSize: 17, color: "#fff" }}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />
            </View>
          </View>
          <TouchableOpacity style={{ alignSelf: "flex-end" }}>
            <Text style={styles.text}>Forget Password?</Text>
          </TouchableOpacity>
          <Button title={"Sign in"} onPress={handleSignIn} />
          <Text style={styles.or}>or Sign in with</Text>
          <TouchableOpacity>
            <View style={styles.option}>
              <icons.MaterialCommunityIcons
                name="gmail"
                size={28}
                color="#fff"
                style={{ marginHorizontal: 10 }}
              />
              <Text style={{ color: "#fff", fontSize: 18 }}>Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.option}>
              <icons.FontAwesome
                name="facebook-square"
                size={28}
                color="#fff"
                style={{ marginHorizontal: 10 }}
              />
              <Text style={{ color: "#fff", fontSize: 18 }}>Facebook</Text>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={[styles.text]}>Don't have an account? </Text>
            <TouchableOpacity onPress={toRegister}>
              <Text style={{ color: "#fab430" }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26272b",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    borderWidth: 0.3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    borderRadius: 5,
    borderColor: "#fff",
    marginBottom: 10,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    marginBottom: 15,
    // alignSelf: "flex-end",
  },
  or: {
    color: "#fff",
    marginVertical: 15,
    alignSelf: "center",
  },
  option: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderColor: "#fff",
    borderWidth: 0.3,
    flexDirection: "row",
    borderRadius: 5,
    marginBottom: 15,
  },
});

export default Login;
