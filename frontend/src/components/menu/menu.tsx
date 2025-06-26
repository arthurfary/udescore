import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./menu.styles";
import useMenu from "./menu.hook";

const Menu: React.FC<{ navigation: any }> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { handlePressHome, handlePressRank, handlePressPerfil } = useMenu({
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
        <Ionicons name="home-outline" size={28} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={handlePressRank}>
        <Ionicons name="trophy-outline" size={28} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={handlePressPerfil}>
        <Ionicons name="person-outline" size={28} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
