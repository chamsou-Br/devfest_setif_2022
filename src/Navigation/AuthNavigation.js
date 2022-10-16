import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";

const stack = createNativeStackNavigator();
const AuthNavigation = ({ setIsLogin }) => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <stack.Screen
          component={() => {
            return <LoginScreen setIsLogin={setIsLogin} />;
          }}
          name="login"
        />
        <stack.Screen
          component={() => {
            return <RegisterScreen setIsLogin={setIsLogin} />;
          }}
          name="register"
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
