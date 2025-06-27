import { useApi } from "./api";

const turmasProfessorService = {
  obterTurmasProfessor: async (id: string | undefined) => {
    return await useApi({
      method: "GET",
      url: "/cursos_professor.php",
      params: { id },
    });
  },
};

export default turmasProfessorService;
