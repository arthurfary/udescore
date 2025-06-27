import { useState } from "react";

const useMenu = ({ navigation }: { navigation: any }) => {
  const handlePressHome = () => {
    navigation.navigate("Home");
  };
  const handlePressRank = () => {
    navigation.navigate("Rank");
  };
  const handlePressPerfil = () => {
    navigation.navigate("Perfil");
  };

  const activePage = navigation.getState()?.routes[navigation.getState()?.index]?.name || "Home";

  return { activePage, handlePressHome, handlePressRank, handlePressPerfil };
};

export default useMenu;
