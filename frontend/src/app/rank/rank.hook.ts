import { useEffect, useState } from "react";
import rankService from "../../services/rank";

interface RankData {
  id_aluno: number;
  nome: string;
  total_pontos: number;
  position: number;
}

const useRank = ({ id_aluno }: { id_aluno: string | undefined}) => {
  const [rankData, setRankData] = useState<RankData[]>([]);
  const [top10Data, setTop10Data] = useState<RankData[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleRequest() {
    try {
      setLoading(true);

      const userResult = await rankService.getUserRanking(id_aluno);
      console.log("ID Aluno: ", id_aluno, "🚀 ~ handleRequest ~ userResult:", userResult);
      if (userResult.status === true && userResult.data) {
        setRankData(userResult.data.data);
      }

      try{
        const top10Result = await rankService.getTop10Ranking();
        console.log("🚀 ~ handleRequest ~ top10Result:", top10Result);
        if (top10Result.status === true && top10Result.data) {
          setTop10Data(top10Result.data.data);
        }
      } catch (top10Error){
          console.log("Top 10 não disponível, usando dados padrão");
      }

      return { success: true, userData: userResult.data, top10: top10Data };
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro na requisição");
      return { success: false, data: null };
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id_aluno) {
      handleRequest();
    }
  }, []);
  
  return {
    rankData,
    top10Data,
    loading,
    handleRequest,
  };
};

export default useRank;
