import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 16,
    paddingTop: 100,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: COLORS.text || "#FFFFFF",
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 100, // Margem inferior para não ficar atrás do menu
  },

  rankItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginVertical: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },

  // Estilo especial para destacar o item do usuário
  userRankItem: {
    backgroundColor: COLORS.quaternary,
    borderColor: COLORS.quaternary,
    borderWidth: 2,
    shadowColor: COLORS.quaternary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  position: {
    fontSize: 16,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },

  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 16,
  },

  // Estilo especial para destacar o nome do usuário
  userName: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#FFFFFF",
    textShadowColor: "rgba(0, 122, 255, 0.8)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  points: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "right",
    minWidth: 60,
  },

  separator: {
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },

  separatorLine: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },

  // Estilos antigos mantidos para compatibilidade (caso ainda sejam referenciados)
  courseCard: {
    width: "100%",
    marginBottom: 8,
  },

  courseLabel: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 12,
    borderRadius: 8,
  },

  myLabel: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 122, 255, 0.2)",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#007AFF",
  },

  courseName: {
    flex: 1,
    fontSize: 16,
    color: "#FFFFFF",
    marginLeft: 8,
  },

  coursePoints: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default styles;
