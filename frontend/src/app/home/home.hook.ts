import { useState } from "react";
import homeService from "../../services/home";

interface Turma {
  nome: string;
}

const useHome = ({ id_aluno }: any) => {
  const [turmas, setTurmas] = useState<Turma[]>([]);

  async function handleRequest() {
    try {
      const result = await homeService.home(id_aluno);

      console.log("🚀 ~ handleRequest ~ result:", result);
      if (result.status == true) {
        setTurmas(result.data.data);
        return { success: true, data: result.data.data }; // data.data é o array de turmas
      } else {
        alert("Erro ao buscar turmas");
        return { success: false, data: [] };
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro na requisição");
      return { success: false, data: [] };
    }
  }

  return {
    turmas,
    handleRequest,
  };
};

export default useHome;
