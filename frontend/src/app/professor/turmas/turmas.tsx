import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Defs, Pattern, Rect, Circle } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./turmas.styles";
import Menu from "../../../components/menu";
import { COLORS } from "../../../constants/colors";
import { Entypo } from "@expo/vector-icons";
import useHooks from "../professor.hook";

interface Turma {
  nome: string;
}

const gradients = [
  ["#00C9FF", "#92FE9D"],
  ["#F77062", "#FE5196"],
  ["#FAD961", "#F76B1C"],
  ["#43C6AC", "#191654"],
  ["#8E2DE2", "#4A00E0"],
] as const;

const turmas: Turma[] = [
  { nome: "Turma A - Matemática" },
  { nome: "Turma B - Física" },
  { nome: "Turma C - Química" },
  { nome: "Turma D - Biologia" },
  { nome: "Turma E - História" },
];

const getGradientColors = (index: number) =>
  gradients[index % gradients.length];

const DotPattern = () => (
  <Svg width="100%" height="100%" style={{ position: "absolute" }}>
    <Defs>
      <Pattern
        id="dots"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <Circle cx="2" cy="2" r="2" fill="rgba(255,255,255,0.1)" />
      </Pattern>
    </Defs>
    <Rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
  </Svg>
);

const ProfessorTurmas: React.FC<{ navigation: any }> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(true);

  const handlePress = (turma: string) => {
    alert("Você selecionou a turma: " + turma);
  };

  const { redirectCriarTurma } = useHooks({ navigation });

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 100 + insets.bottom,
          paddingTop: 150 + insets.top,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        style={{ flex: 1, backgroundColor: COLORS.background }}
      >
        <TouchableOpacity style={styles.exitButton}>
          <Text
            style={styles.exitText}
            onPress={() => navigation.navigate("Professor")}
          >
            Voltar
          </Text>
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Turmas do Professor</Text>

        {turmas.length === 0 && !loading ? (
          <Text style={styles.emptyMessage}>Nenhuma turma encontrada.</Text>
        ) : (
          turmas.map((turma: Turma, index: number) => (
            <TouchableOpacity
              key={`${turma.nome}-${index}`}
              style={styles.courseCard}
              onPress={() => handlePress(turma.nome)}
            >
              <LinearGradient
                colors={getGradientColors(index)}
                style={styles.courseBackground}
              >
                <DotPattern />
                <View style={styles.courseOverlay} />
                <View style={styles.courseLabel}>
                  <Text style={styles.courseName}>{turma.nome}</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))
        )}

        <TouchableOpacity style={styles.button}>
          <Entypo name="plus" size={16} color="#fff" />
          <Text style={styles.buttonText} onPress={redirectCriarTurma}>
            Criar nova turma
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Menu />
    </>
  );
};

export default ProfessorTurmas;
