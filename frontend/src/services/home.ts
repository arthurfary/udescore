import { useApi } from "./api";

const homeService = {
  home: async (id_aluno: number) => {
    return await useApi({
      method: "GET",
      url: `/obter_turma_aluno.php?id_aluno=${id_aluno}`,
    });
  },
};

export default homeService;
