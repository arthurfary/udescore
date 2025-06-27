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

interface RankItem {
  position: number;
  nome: string;
  pontos: number;
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
          {item.pontos} XP
        </Text>
      </View>
    );
  };

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
