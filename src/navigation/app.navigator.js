import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Login from "../screens/auth/login";
import Register from "../screens/auth/register";
import MovieDetail from "../components/details/movie";
import OnBoardScreen from "../screens/onboard";
import TabNavigate from "./main.navigator";
import SerieDetail from "../components/details/serie";
import { useSelector } from "react-redux";
import { TokenContext } from "../components/tokenContext";

const stack = createStackNavigator();

export default AppNavigator = () => {
  // const { login } = useSelector((state) => state.Login);
  return (
    // <TokenContext.Consumer>
    //   {({ userToken }) => {
    //     <View style={{ flex: 1, backgroundColor: "yellow" }}>
    <stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#202123" },
        headerTintColor: "#fff",
        headerShadowVisible: false,
      }}
      // initialRouteName="Main"
    >
      {/* {userToken ? (
              <>
                <stack.Screen
                  name="Main"
                  component={TabNavigate}
                  options={{ headerShown: false }}
                />
                <stack.Screen
                  name="movieDetails"
                  component={MovieDetail}
                  options={{ headerShown: false }}
                />
                <stack.Screen
                  name="SerieDetails"
                  component={SerieDetail}
                  options={{ headerShown: false }}
                />
              </>
            ) : (
              <> */}
      <stack.Screen
        name="Onboard"
        component={OnBoardScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="Register" component={Register} />
      {/* </>
            )} */}
    </stack.Navigator>
    //     </View>;
    //   }}
    // </TokenContext.Consumer>
  );
};

export const AuntheticatedNavigator = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#202123" },
        headerTintColor: "#fff",
        headerShadowVisible: false,
      }}
      // initialRouteName="Main"
    >
      <stack.Screen
        name="Main"
        component={TabNavigate}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="movieDetails"
        component={MovieDetail}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="SerieDetails"
        component={SerieDetail}
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};
