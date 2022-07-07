import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  KeyboardAvoidingView,
  ToastAndroid,
} from "react-native";
import Button from "../../components/button";
import * as icons from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { authCreateUser } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../utils/auth.firebase";
import { useNavigation } from "@react-navigation/native";
const Register = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [confimPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  // const dispatch = useDispatch();

  const toLogin = () => {
    navigation.replace("Login");
  };
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // navigation.replace("Login");
        ToastAndroid.show("User Created", ToastAndroid.SHORT);
      })
      .catch((error) => alert(error.message));
    // const validation = () => {
    //   if (
    //     email === "" &&
    //     password === "" &&
    //     confimPassword === ""
    //     // phone === "" &&
    //     // gender === "" &&
    //     // birthdate === ""
    //   )
    //     return alert("Please fill all fields");
    //   if (password !== confimPassword) return alert("password don't match");
    // };
    // if (!validation) {
    //   // const data = {
    //   //   email,
    //   //   password,
    //   //   number: phone,
    //   //   birthdate,
    //   //   gender,
    //   // };
    //   // dispatch(authCreateUser(data));
    // }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"#202123"}
      ></StatusBar>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView behavior="padding">
            <View style={[styles.holder, { paddingTop: 15 }]}>
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
                  style={{ fontSize: 17, color: "#fff" }}
                  keyboardType={"email-address"}
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
            </View>

            {/* <View style={styles.holder}>
            <Text style={{ marginBottom: 10, color: "#fff", fontSize: 15 }}>
              Phone number
            </Text>
            <View style={styles.input}>
              <icons.Feather
                name="phone"
                size={25}
                color="#fff"
                style={{ marginEnd: 10 }}
              />
              <TextInput
                placeholder="1234 5678 910"
                placeholderTextColor={"#c9c9c9"}
                style={{ fontSize: 17, color: "#fff" }}
                keyboardType={"phone-pad"}
                value={phone}
                onChangeText={setPhone}
              />
            </View>
          </View>

          <View style={styles.holder}>
            <Text style={{ marginBottom: 10, color: "#fff", fontSize: 15 }}>
              Birth Date
            </Text>
            <View style={styles.input}>
              <icons.Feather
                name="calendar"
                size={25}
                color="#fff"
                style={{ marginEnd: 10 }}
              />
              <TextInput
                placeholder="9/9/1999"
                placeholderTextColor={"#c9c9c9"}
                style={{ fontSize: 17, color: "#fff", opacity: 1 }}
                keyboardType={"numeric"}
                value={birthdate}
                onChangeText={setBirthDate}
              />
            </View>
          </View>

          <View style={styles.holder}>
            <Text style={{ marginBottom: 10, color: "#fff", fontSize: 15 }}>
              Gender
            </Text>
            <View style={styles.input}>
              <icons.Ionicons
                name="person-outline"
                size={25}
                color="#fff"
                style={{ marginEnd: 10 }}
              />
              <TextInput
                placeholder="your gender"
                placeholderTextColor={"#c9c9c9"}
                style={{ fontSize: 17, color: "#fff" }}
                value={gender}
                onChangeText={setGender}
              />
            </View>
          </View> */}

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
                  placeholder="your Password"
                  placeholderTextColor={"#c9c9c9"}
                  style={{ fontSize: 17, color: "#fff" }}
                  value={password}
                  secureTextEntry
                  onChangeText={setPassword}
                />
              </View>
            </View>

            {/* <View style={styles.holder}>
              <Text style={{ marginBottom: 10, color: "#fff", fontSize: 15 }}>
                Confirm Password
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
                  value={confimPassword}
                  secureTextEntry={true}
                  onChangeText={setConfirmPassword}
                />
              </View>
            </View> */}

            <Button title={"Sign Up"} onPress={handleSignUp} />
            <View style={styles.policy}>
              <Text style={{ color: "#fff" }}>By signing up I accept </Text>
              <Text style={{ color: "#fff" }}>terms of use{" and "}</Text>
              <Text style={{ color: "#fff" }}>privacy policy</Text>
            </View>

            <Text style={styles.or}>or Sign Up with</Text>
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
              <View style={[styles.option, { marginBottom: 35 }]}>
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
              <Text style={[styles.text]}>Already having an account? </Text>
              <TouchableOpacity onPress={toLogin}>
                <Text style={{ color: "#fab430" }}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26272b",
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
    lineHeight: 20,
    alignSelf: "center",
    alignContent: "center",
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
  policy: {
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
  },
});

export default Register;
