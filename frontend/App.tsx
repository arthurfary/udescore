import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Login from "./src/app/login";
import Home from "./src/app/home";
import Rank from "./src/app/rank";
import Professor from "./src/app/professor";
import RankProfessor from "./src/app/professor/rankProfessor";
import ProfessorTurmas from "./src/app/professor/turmas";
import CriarTurma from "./src/app/professor/criarTurma";

import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { COLORS } from "./src/constants/colors";

import { AuthProvider } from "./src/context/userContext";

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
    <AuthProvider>
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
            <Stack.Screen name="Professor" component={Professor} />
            <Stack.Screen name="RankProfessor" component={RankProfessor} />
            <Stack.Screen name="ProfessorTurmas" component={ProfessorTurmas} />
            <Stack.Screen name="CriarTurma" component={CriarTurma} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
}
