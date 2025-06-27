import { useApi } from "./api";

const rankService = {

  getUserRanking: async (id_aluno: string | undefined) => {
    return await useApi({
      method: "GET",
      url: `/obter_ranking_usuario.php?id_aluno=${id_aluno}`,
    });
  },

  getTop10Ranking: async () => {
    return await useApi({
      method: "GET",
      url: "/obter_rankings.php",
    });
  },
};

export default rankService;
