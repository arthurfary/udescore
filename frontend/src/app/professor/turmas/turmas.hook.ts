import { useEffect, useState } from "react";
import turmasProfessorService from "../../../services/turmasProfessor";
import { useAuth } from "../../../context/userContext";

const useTurmas = () => {
  const [turmas, setTurmas] = useState([]);
  const { user } = useAuth();

  const obterTurmasProfessor = async () => {
    try {
      const result = await turmasProfessorService.obterTurmasProfessor(
        user?.id
      );

      console.log("🚀 ~ handleRequest ~ result:", result);
      if (result.status == true) {
        setTurmas(result.data.data);
        return { success: true, data: result.data.data };
      } else {
        alert("Erro ao buscar turmas");
        return { success: false, data: [] };
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro na requisição");
      return { success: false, data: [] };
    }
  };

  useEffect(() => {
    obterTurmasProfessor();
  }, []);

  return { turmas, setTurmas, obterTurmasProfessor };
};

export default useTurmas;
