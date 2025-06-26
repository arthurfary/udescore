import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./rank.styles";
import Menu from "../../components/menu";
import { COLORS } from "../../constants/colors";

export interface RankProps {
  navigation: any;
}

const top10 = [
  { nome: "OOOOOOOOOOOOOOO", pontos: 100 },
  { nome: "JavaScript Essencial", pontos: 90 },
  { nome: "UI/UX para Iniciantes", pontos: 80 },
  { nome: "APIs com Node.js", pontos: 70 },
  { nome: "APIs com Node.js", pontos: 60 },
  { nome: "APIs com Node.js", pontos: 50 },
  { nome: "APIs com Node.js", pontos: 40 },
  { nome: "APIs com Node.js", pontos: 30 },
  { nome: "APIs com Node.js", pontos: 20 },
  { nome: "APIs com Node.js", pontos: 10 },
];

const meuRanking = [
  {
    position: 13,
    nome: "APIs com Node.js",
    pontos: 5,
  },
  {
    position: 14,
    nome: "APIs com Node.js",
    pontos: 4,
  },
  {
    position: 15,
    nome: "Seu Nome",
    pontos: 3,
  },
  {
    position: 16,
    nome: "APIs com Node.js",
    pontos: 2,
  },
  {
    position: 17,
    nome: "APIs com Node.js",
    pontos: 1,
  },
];

interface RankItem {
  position: number;
  nome: string;
  pontos: number;
  isUser?: boolean;
}

const Rank: React.FC<RankProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const meuRank = meuRanking[2];

  // Combina todos os ranks (com posição explícita)
  const rankingCompleto = [
    ...top10.map((item, index) => ({ ...item, position: index + 1 })),
    ...meuRanking,
  ];

  // Evita duplicação do usuário
  const filtrado = rankingCompleto.filter(
    (aluno, index, self) =>
      index === self.findIndex((a) => a.position === aluno.position)
  );

  // Lógica para mostrar ao redor do usuário
  let extraRanking: typeof meuRanking = [];
  if (meuRank) {
    const pos = meuRank.position;

    extraRanking = filtrado.filter((aluno) => {
      // Sempre mostrar o próprio
      if (aluno.nome === meuRank.nome && meuRank.position > 10) return true;

      // Mostrar 2 atrás, se posição < 10
      if (
        (aluno.position == pos + 1 || aluno.position == pos + 2) &&
        aluno.position > 10
      ) {
        return true;
      }
      // Mostrar 2 à frente, apenas se posição > 10
      if (
        (aluno.position == pos - 1 || aluno.position == pos - 2) &&
        aluno.position > 10
      ) {
        return true;
      }

      return false;
    });

    // Ordenar por posição crescente
    extraRanking.sort((a, b) => a.position - b.position);
  }

  // Função para obter cor baseada na posição
  const getColorByPosition = (position: number) => {
    switch (position) {
      case 1:
        return "#FFD700"; // Ouro
      case 2:
        return "#C0C0C0"; // Prata
      case 3:
        return "#CD7F32"; // Bronze
      default:
        return "#FFFFFF"; // Branco
    }
  };

  // Renderizar item do ranking
  const renderRankItem = ({ item }: { item: RankItem }) => {
    const positionColor = getColorByPosition(item.position);
    const nameColor = getColorByPosition(item.position);
    const pointsColor = getColorByPosition(item.position);

    return (
      <View style={[styles.rankItem, item.isUser && styles.userRankItem]}>
        <Text style={[styles.position, { color: positionColor }]}>
          #{item.position}
        </Text>

        <Text
          style={[
            styles.name,
            { color: nameColor },
            item.isUser && styles.userName,
          ]}
        >
          {item.nome}
        </Text>

        <Text style={[styles.points, { color: pointsColor }]}>
          {item.pontos} Pts
        </Text>
      </View>
    );
  };

  // Preparar dados para o FlatList
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
          {/* Top 10 */}
          <FlatList
            data={top10Data}
            renderItem={renderRankItem}
            keyExtractor={(item) => `top10-${item.position}`}
            scrollEnabled={false}
          />

          {/* Separador se houver ranking extra */}
          {extraData.length > 0 && (
            <View style={styles.separator}>
              <View style={styles.separatorLine} />
            </View>
          )}

          {/* Ranking extra (ao redor do usuário) */}
          <FlatList
            data={extraData}
            renderItem={renderRankItem}
            keyExtractor={(item) => `extra-${item.position}`}
            scrollEnabled={false}
          />
        </ScrollView>
      </View>

      <Menu navigation={navigation} />
    </>
  );
};

export default Rank;
