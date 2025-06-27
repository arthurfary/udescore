import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Login from "./src/app/login";
import Home from "./src/app/home";
import Rank from "./src/app/rank";

import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { COLORS } from "./src/constants/colors";



const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Rank: undefined;
};

export default function App() {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync(COLORS.background);
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Rank" component={Rank} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
