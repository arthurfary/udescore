import { useState, useEffect } from "react";

interface RankItem {
  position: number;
  name: string;
  xp: number;
  image: any;
}

const useRanking = () => {
  const [rankings, setRankings] = useState<RankItem[] | null>([
    ]);;

  const data: RankItem[] = [{ position: 1, name: "Maria", xp: 100, image: require("../../../assets/profile.png") },
    { position: 2, name: "João", xp: 99, image: require("../../../assets/profile.png") },
    { position: 3, name: "Ana", xp: 98, image: require("../../../assets/profile.png") },
    { position: 4, name: "Pedro", xp: 97, image: require("../../../assets/profile.png") },
    { position: 5, name: "Lucia", xp: 96, image: require("../../../assets/profile.png") },
    { position: 6, name: "Carlos", xp: 90, image: require("../../../assets/profile.png") }]


  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await fetch("");
        const data = await response.json();
        setRankings(data);
      } catch (error) {
        console.error("Erro ao carregar rankings:", error);
        setRankings([]);
      }
    };

    //fetchRankings();
  }, []);

  return { rankings, data, setRankings };
};

export default useRanking;