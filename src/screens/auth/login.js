import {
  Alert,
  Image,
  Keyboard,
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
import { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Initial,
  LoginUser,
  UserStateChange,
} from "../../redux/actions/authAction";
import { connect, useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TokenContext } from "../../components/tokenContext";
import { auth } from "../../utils/auth.firebase";
import { AuthLogin } from "../../redux/actions/authAction";
import { WaveIndicator } from "react-native-indicators";

const Login = (props) => {
  const navigation = useNavigation();
  const [is_loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const token = useSelector((state) => state.Login.authToken);
  const persistUser = async () => {
    dispatch(Initial());
    setLoading(false);
  };

  const handleSignIn = () => {
    Keyboard.dismiss();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const { uid } = userCredentials.user;
        // console.log(uid);
        dispatch(AuthLogin(uid));
        alert("Login Successful");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // const persistUser = (token, message, status) => {
  //   AsyncStorage.setItem("userToken", JSON.stringify(token))
  //     .then(() => {
  //       alert(message, status);
  //       setUserToken(token);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert(error);
  //     });
  // };

  useEffect(() => {
    persistUser();
  }, []);

  if (is_loading) {
    return <WaveIndicator color="#fab430" />;
  }

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
                returnKeyType={"next"}
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
            <TouchableOpacity onPress={() => navigation.replace("Register")}>
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

const mapToSate = ({ login }) => ({
  login: login,
});
export default connect(mapToSate, {
  loginUser: LoginUser,
  UserState: UserStateChange,
})(Login);
