import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Defs, Pattern, Rect, Circle } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./professor.styles";
import { COLORS } from "../../constants/colors";

const Professor: React.FC = () => {
  const insets = useSafeAreaInsets();

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
        <Text>Teste</Text>
      </ScrollView>
    </>
  );
};

export default Professor;
