import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app.navigator";
import React from "react";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
