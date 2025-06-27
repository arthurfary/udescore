import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  FontAwesome,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import styles from "./perfil.styles";
import Menu from "../../components/menu";
import { useAuth } from "../../context/userContext";

const Perfil: React.FC = () => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      {/* Ícone de engrenagem */}
      <TouchableOpacity style={styles.settingsIcon}>
        <Feather name="settings" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Imagem de perfil genérica */}
      <View style={styles.avatarIcon}>
        <FontAwesome name="user" size={20} color="#000" />
      </View>
      <Text style={styles.nome}>{user?.nome}</Text>

      {/* Campo de usuário e senha ofuscada */}
      <View style={styles.inputFake}>
        <FontAwesome
          name="user"
          size={18}
          color="#fff"
          style={{ marginRight: 8 }}
        />
        <Text style={styles.hiddenText}>••••••••••</Text>
        <Feather
          name="upload"
          size={18}
          color="#fff"
          style={{ marginLeft: "auto" }}
        />
      </View>

      {/* Visão geral */}
      <Text style={styles.visaoGeral}>Visão geral</Text>
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <MaterialCommunityIcons name="fire" size={24} color="#ff5e00" />
          <Text style={styles.statValue}>1</Text>
          <Text style={styles.statLabel}>Dias seguidos</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="star" size={24} color="#ffc107" />
          <Text style={styles.statValue}>100</Text>
          <Text style={styles.statLabel}>Total de pontos</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.unknownIcon}>x</Text>
          <Text style={styles.statValue}>x</Text>
          <Text style={styles.statLabel}>não sei</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="medal" size={24} color="#ffd700" />
          <Text style={styles.statValue}>3</Text>
          <Text style={styles.statLabel}>Prêmios</Text>
        </View>
      </View>

      <Menu />
    </View>
  );
};

export default Perfil;
