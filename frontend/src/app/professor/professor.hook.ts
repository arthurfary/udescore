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

  const redirectTurmas = async () => {
    navigation.navigate("ProfessorTurmas");
  };

  const redirectCriarTurma = async () => {
    navigation.navigate("CriarTurma");
  };

  // Add your business logic here
  return {
    logout,
    redirectRank,
    redirectTurmas,
    redirectCriarTurma,
  };
};

export default useHooks;
