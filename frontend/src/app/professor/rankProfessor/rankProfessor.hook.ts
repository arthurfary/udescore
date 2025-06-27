import { useEffect, useState } from "react";
import rankService from "../../../services/rank";

interface RankData {
  id_aluno: number;
  nome: string;
  total_pontos: number;
  position: number;
}

const useRank = ( ) => {
  const [rankData, setRankData] = useState<RankData[]>([]);
  const [top10Data, setTop10Data] = useState<RankData[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleRequest() {
    try {
      setLoading(true);
      
      try{
        const top10Result = await rankService.getTop10Ranking();
        console.log("🚀 ~ handleRequest ~ top10Result:", top10Result);
        if (top10Result.status === true && top10Result.data) {
          setTop10Data(top10Result.data.data);
        }
      } catch (top10Error){
          console.log("Top 10 não disponível, usando dados padrão");
      }

      return { success: true, top10: top10Data };
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro na requisição");
      return { success: false, data: null };
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
      handleRequest();
  }, []);
  
  return {
    rankData,
    top10Data,
    loading,
    handleRequest,
  };
};

export default useRank;
