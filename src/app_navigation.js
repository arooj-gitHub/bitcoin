import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//import LoginScreen from "./auth_screen/login_screen";
import StartScreen from "./auth_screen/start_screen";
//import RegisterScreen from "./screens/RegisterScreen";
//import PasswordScreen from "./screens/PasswordScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        //<Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
       // <Stack.Screen name="Register" component={RegisterScreen} />
      //  <Stack.Screen name="Password" component={PasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
