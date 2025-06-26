import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
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

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 100 + insets.bottom,
          paddingTop: 100 + insets.top,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        style={{ flex: 1, backgroundColor: COLORS.background }}
      >
        <Text style={styles.title}>Ranking</Text>

        {/* Top 10 sempre */}
        {top10.map((aluno, index) => {
          const isUser = aluno.nome === meuRank.nome;
          return (
            <TouchableOpacity key={index} style={styles.courseCard}>
              <View style={isUser ? styles.myLabel : styles.courseLabel}>
                <Text style={styles.position}>{"#" + (index + 1)}</Text>
                <Text style={styles.courseName}>{aluno.nome}</Text>
                <Text style={styles.coursePoints}>{aluno.pontos} Pts</Text>
              </View>
            </TouchableOpacity>
          );
        })}

        <>
          <View style={{ marginTop: 24, width: "100%" }} />
          {extraRanking.map((aluno, index) => (
            <TouchableOpacity key={index} style={styles.courseCard}>
              <View
                style={
                  aluno.nome === meuRank.nome
                    ? styles.myLabel
                    : styles.courseLabel
                }
              >
                <Text style={styles.position}>{"#" + aluno.position}</Text>
                <Text style={styles.courseName}>{aluno.nome}</Text>
                <Text style={styles.coursePoints}>{aluno.pontos} Pts</Text>
              </View>
            </TouchableOpacity>
          ))}
        </>
      </ScrollView>
      <Menu navigation={navigation} />
    </>
  );
};
export default Rank;
