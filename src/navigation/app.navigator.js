import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Login from "../screens/auth/login";
import Register from "../screens/auth/register";
import DetailScreen from "../screens/home/movieDetails";
import OnBoardScreen from "../screens/onboard";
import TabNavigate from "./main.navigator";
import SerieDetail from "../screens/home/series/serieDetails";

const stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "yellow" }}>
      <stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#202123" },
          headerTintColor: "#fff",
          headerShadowVisible: false,
        }}
        // initialRouteName="Main"
      >
        <stack.Screen
          name="Onboard"
          component={OnBoardScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Register" component={Register} />
        <stack.Screen
          name="Details"
          component={DetailScreen}
          // options={{ headerShown: false }}
        />
        <stack.Screen
          name="SerieDetails"
          component={SerieDetail}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Main"
          component={TabNavigate}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </View>
  );
};

export default AppNavigator;
