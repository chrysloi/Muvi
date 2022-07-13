import { NavigationContainer } from "@react-navigation/native";
import AppNavigator, { AuntheticatedNavigator } from "./app.navigator";
import React from "react";
import { useSelector } from "react-redux";

const RootNavigator = () => {
  const userToken = useSelector((state) => state.Login.authToken);
  return (
    <NavigationContainer>
      {userToken ? <AuntheticatedNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
