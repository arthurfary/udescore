import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Defs, Pattern, Rect, Circle } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./home.styles";
import Menu from "../../components/menu";
import { COLORS } from "../../constants/colors";

export interface HomeProps {
  navigation: any;
}

const turmas = [
  { nome: "React Native Basics" },
  { nome: "JavaScript Essencial" },
  { nome: "UI/UX para Iniciantes" },
  { nome: "APIs com Node.js" },
  { nome: "APIs com Node.js" },
  { nome: "APIs com Node.js" },
];

const gradients = [
  ["#6C63FF", "#A594F9"],
  ["#FF6584", "#FFB5A7"],
  ["#43CEA2", "#185A9D"],
  ["#FFA500", "#FFCC70"],
  ["#3F51B5", "#5A55AE"],
] as const;

const getGradientColors = (index: number) => {
  return gradients[index % gradients.length];
};

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

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const handlePress = (turma: string) => {
    navigation.navigate("Login", { turma });
  };

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
        style={{ flex: 1, backgroundColor: COLORS.background }} // mesma cor do menu
      >
        {turmas.map((turma, index) => (
          <TouchableOpacity
            key={index}
            style={styles.courseCard}
            onPress={(e) => handlePress(turma.nome)}
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
        ))}
      </ScrollView>
      <Menu navigation={navigation} />
    </>
  );
};

export default Home;
