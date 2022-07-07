import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Featured from "../screens/home/movie.filter/featured";
import Series from "../screens/home/movie.filter/series";
import Films from "../screens/home/movie.filter/films";

const Tab = createMaterialTopTabNavigator();

function HomeNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#202123" },
        headerTintColor: "#fff",
        headerShadowVisible: false,
        tabBarStyle: { backgroundColor: "#202123" },
        tabBarActiveTintColor: "#fff",
        swipeEnabled: false,
        tabBarScrollEnabled: true,
      }}
    >
      {/* <Tab.Screen name="feartured" component={Featured} /> */}
      <Tab.Screen name="films" component={Films} />
      <Tab.Screen name="series" component={Series} />
    </Tab.Navigator>
  );
}

export default HomeNavigator;
