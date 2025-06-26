const useMenu = ({ navigation }: { navigation: any }) => {
  const handlePressHome = () => {
    navigation.navigate("Home");
  };
  const handlePressRanking = () => {
    navigation.navigate("Ranking");
  };
  const handlePressPerfil = () => {
    navigation.navigate("Perfil");
  };

  return { handlePressHome, handlePressRanking, handlePressPerfil };
};

export default useMenu;
