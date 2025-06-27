import { useAuth } from "../../context/userContext";

const useHooks = ({ navigation }: any) => {
  const { setUser } = useAuth();

  const logout = async () => {
    setUser(null);
    navigation.navigate("Login");
  };

  const redirectRank = async () => {
    navigation.navigate("RankProfessor");
  };

  // Add your business logic here
  return {
    logout,
    redirectRank,
  };
};

export default useHooks;
