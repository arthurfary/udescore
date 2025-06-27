import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./menu.styles";
import useMenu from "./menu.hook";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

const Menu: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // pega o navigation do contexto
  const insets = useSafeAreaInsets();
  const { activePage, handlePressHome, handlePressRank, handlePressPerfil } = useMenu({
    navigation,
  });

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom, // ocupa espaço da barra nativa
        },
      ]}
    >
      <TouchableOpacity style={styles.menuItem} onPress={handlePressHome}>
        <Ionicons name={activePage === "Home" ? "home" : "home-outline"} size={28} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={handlePressRank}>
        <Ionicons name={activePage === "Rank" ? "trophy" : "trophy-outline"} size={28} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={handlePressPerfil}>
        <Ionicons name={activePage === "Perfil" ? "person" : "person-outline"} size={28} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
