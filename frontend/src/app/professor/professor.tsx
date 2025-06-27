import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./professor.styles";
import { COLORS } from "../../constants/colors";
import { useAuth } from "../../context/userContext";
import { FontAwesome5, MaterialIcons, Entypo } from "@expo/vector-icons";
import useHooks from "./professor.hook";

const Professor: React.FC<{ navigation: any }> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { user } = useAuth();
  const { logout, redirectRank } = useHooks({ navigation });

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 16,
        paddingBottom: 100 + insets.bottom,
        paddingTop: 150 + insets.top,
        alignItems: "center",
      }}
      style={{ flex: 1, backgroundColor: COLORS.background }}
    >
      <Text style={styles.title}>Área do professor</Text>

      <FontAwesome5
        name="chalkboard-teacher"
        size={80}
        color="#fff"
        style={styles.icon}
      />
      <Text style={styles.nome}>{user?.nome}</Text>

      <TouchableOpacity style={styles.button}>
        <FontAwesome5 name="trophy" size={16} color="#fff" />
        <Text style={styles.buttonText} onPress={redirectRank}>
          Ranking
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="school" size={16} color="#fff" />
        <Text style={styles.buttonText}>Turmas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Entypo name="plus" size={16} color="#fff" />
        <Text style={styles.buttonText}>Criar nova turma</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.exitButton}>
        <Text style={styles.exitText} onPress={logout}>
          Sair
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Professor;
