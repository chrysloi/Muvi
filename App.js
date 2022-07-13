import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import RootNavigator from "./src/navigation/root.navigator";
import { store } from "./src/redux/store";
import { LogBox } from "react-native";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TokenContext } from "./src/components/tokenContext";

LogBox.ignoreAllLogs();

export default function App() {
  // const [appReady, setAppReady] = useState(false);
  // const [userToken, setUserToken] = useState("");

  // const checkLogin = () => {
  //   AsyncStorage.getItem("userToken")
  //     .then((token) => {
  //       if (token !== null) {
  //         setUserToken(JSON.parse(token));
  //       } else {
  //         setUserToken(null);
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };

  // if (!appReady) {
  //   return (
  //     <AppLoading
  //       startAsync={checkLogin}
  //       onFinish={() => setAppReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return (
    // <TokenContext.Provider value={{ userToken, setUserToken }}>
    <SafeAreaProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </SafeAreaProvider>
    // </TokenContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
