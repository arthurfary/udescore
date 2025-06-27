import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 32,
  },
  button: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 16,
    backgroundColor: "transparent",
    gap: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  exitButton: {
    marginTop: 40,
    backgroundColor: "#821E1E",
    width: "90%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  exitText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  icon: {
    marginBottom: 12,
  },
});

export default styles;
