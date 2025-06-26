import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Defs, Pattern, Rect, Circle } from "react-native-svg";
import styles from "./home.styles";

export interface HomeProps {
  navigation: any;
}

// Cursos de exemplo
const courses = [
  { nome: "React Native Basics" },
  { nome: "JavaScript Essencial" },
  { nome: "UI/UX para Iniciantes" },
  { nome: "APIs com Node.js" },
];

// Gradientes por índice
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

// Componente SVG com padrão de bolinhas
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
  const handlePress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {courses.map((course, index) => (
        <TouchableOpacity
          key={index}
          style={styles.courseCard}
          onPress={handlePress}
        >
          <LinearGradient
            colors={getGradientColors(index)}
            style={styles.courseBackground}
          >
            <DotPattern />
            <View style={styles.courseOverlay} />
            <View style={styles.courseLabel}>
              <Text style={styles.courseName}>{course.nome}</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Home;
