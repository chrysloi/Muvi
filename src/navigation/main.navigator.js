import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as icons from "@expo/vector-icons";
import Home from "../screens/home";
import Search from "../screens/search";
import Downloads from "../screens/downloads";
import More from "../screens/more";
import { Image } from "react-native";
import MyTabs from "./home.navigation";

const tab = createBottomTabNavigator();

const TabNavigate = () => {
  const Logo = () => {
    return (
      <Image style={{ height: 30 }} source={require("../../assets/logo.png")} />
    );
  };
  return (
    <tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: { backgroundColor: "#202123" },
        headerTintColor: "#fff",
        headerShadowVisible: false,
        tabBarStyle: { backgroundColor: "#202123" },
        tabBarActiveTintColor: "#fab430",
      }}
    >
      <tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Logo />,
          tabBarIcon: ({ size, color }) => (
            <icons.FontAwesome name="home" size={size} color={color} />
          ),
        }}
      ></tab.Screen>
      <tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <icons.Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="My List"
        component={Downloads}
        options={{
          tabBarIcon: ({ size, color }) => (
            <icons.Feather name="folder" size={size} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ size, color }) => (
            <icons.AntDesign name="appstore-o" size={size} color={color} />
          ),
        }}
      />
    </tab.Navigator>
  );
};

export default TabNavigate;
