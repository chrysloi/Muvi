import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import RootNavigator from "./src/navigation/root.navigator";
import { store } from "./src/redux/store";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </SafeAreaProvider>
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
