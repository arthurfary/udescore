import React from "react";
import { ScrollView, Text, View, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./rank.styles";
import Menu from "../../components/menu";
import { FontAwesome } from "@expo/vector-icons";
import useRank from "./rank.hook";
import { useAuth } from "../../context/userContext";

interface RankProps {
  navigation?: any;
}

const top10Default = [
  { nome: "Usuário 1", pontos: 100, position: 1 },
  { nome: "Usuário 2", pontos: 90, position: 2 },
  { nome: "Usuário 3", pontos: 80, position: 3 },
  { nome: "Usuário 4", pontos: 70, position: 4 },
  { nome: "Usuário 5", pontos: 60, position: 5 },
  { nome: "Usuário 6", pontos: 50, position: 6 },
  { nome: "Usuário 7", pontos: 40, position: 7 },
  { nome: "Usuário 8", pontos: 30, position: 8 },
  { nome: "Usuário 9", pontos: 20, position: 9 },
  { nome: "Usuário 10", pontos: 10, position: 10 },
];

interface RankItem {
  position: number;
  nome: string;
  total_pontos: number;
  isUser?: boolean;
}

const Rank: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { user } = useAuth();
  const { rankData: meuRanking, top10Data: top10, loading, handleRequest } = useRank({
    id_aluno: user?.id,
  });
  const meuRank = meuRanking[2];

  const rankingCompleto = [
    ...top10.map((item, index) => ({ ...item, position: index + 1 })),
    ...meuRanking,
  ];

  const filtrado = rankingCompleto.filter(
    (aluno, index, self) =>
      index === self.findIndex((a) => a.position === aluno.position)
  );

  let extraRanking: typeof meuRanking = [];
  if (meuRank) {
    const pos = meuRank.position;
    extraRanking = filtrado.filter((aluno) => {
      if (aluno.nome === meuRank.nome && meuRank.position > 10) return true;
      if (
        (aluno.position == pos + 1 || aluno.position == pos + 2) &&
        aluno.position > 10
      )
        return true;
      if (
        (aluno.position == pos - 1 || aluno.position == pos - 2) &&
        aluno.position > 10
      )
        return true;
      return false;
    });
    extraRanking.sort((a, b) => a.position - b.position);
  }

  const positionColors: { [key: number]: string } = {
    1: "#FFD700",
    2: "#C0C0C0",
    3: "#CD7F32",
  };

  const renderRankItem = ({ item }: { item: RankItem }) => {
    const color = positionColors[item.position] || "#FFFFFF";

    return (
      <View style={[styles.rankItem, item.isUser && styles.userHighlight]}>
        <View style={styles.left}>
          <Text style={[styles.positionText, { color }]}>{item.position}</Text>
          <View style={styles.avatarIcon}>
            <FontAwesome name="user" size={20} color="#000" />
          </View>
          <Text style={[styles.nameText, item.isUser && styles.userNameText]}>
            {item.nome}
          </Text>
        </View>
        <Text style={[styles.pointsText, item.isUser && styles.userPointsText]}>
          {item.total_pontos} XP
        </Text>
      </View>
    );
  };

  const top10Data = top10.map((item, index) => ({
    ...item,
    position: index + 1,
    isUser: item.nome === meuRank.nome,
  }));

  const extraData = extraRanking.map((item) => ({
    ...item,
    isUser: item.nome === meuRank.nome,
  }));

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Ranking</Text>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          <FlatList
            data={top10Data}
            renderItem={renderRankItem}
            keyExtractor={(item) => `top10-${item.position}`}
            scrollEnabled={false}
          />

          {extraData.length > 0 && (
            <View style={styles.separator}>
              <View style={styles.separatorLine} />
            </View>
          )}

          <FlatList
            data={extraData}
            renderItem={renderRankItem}
            keyExtractor={(item) => `extra-${item.position}`}
            scrollEnabled={false}
          />
        </ScrollView>
      </View>

      <Menu />
    </>
  );
};

export default Rank;
