import React from "react";
import {
  ScrollView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./rankProfessor.styles";
import { FontAwesome } from "@expo/vector-icons";
import useRank from "./rankProfessor.hook";

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

const RankProfessor: React.FC<{ navigation: any }> = ({ navigation }) => {
  const positionColors: { [key: number]: string } = {
    1: "#FFD700",
    2: "#C0C0C0",
    3: "#CD7F32",
  };
  const insets = useSafeAreaInsets();
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

  const { rankData: meuRanking, top10Data: top10, loading, handleRequest
    } = useRank();
    const top10Data = top10.map((item, index) => ({
      ...item,
      position: index + 1,
    }));

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.exitButton}
          onPress={() => navigation.navigate("Professor")}
        >
          <Text style={styles.exitText}>Voltar</Text>
        </TouchableOpacity>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{
            paddingBottom: 100 + insets.bottom,
            paddingTop: 50 + insets.top,
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>Ranking</Text>
          <FlatList
            data={top10Data}
            renderItem={renderRankItem}
            keyExtractor={(item) => `top10-${item.position}`}
            scrollEnabled={false}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default RankProfessor;
