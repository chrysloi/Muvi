import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Featured } from "../screens/home/featured";
import Series from "../screens/home/series/index";
import Films from "../screens/home/films/index";

const Tab = createMaterialTopTabNavigator();

export default function HomeNavigator() {
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
      <Tab.Screen name="feartured" component={Featured} />
      <Tab.Screen name="films" component={Films} />
      <Tab.Screen name="series" component={Series} />
    </Tab.Navigator>
  );
}
