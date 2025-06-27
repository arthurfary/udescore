import { StyleSheet } from "react-native";
import { FONT_SIZES } from "../../../constants/font-sizes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002b1a", // verde escuro
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: FONT_SIZES.title,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    color: "#fff",
    marginTop: 10,
    marginBottom: 6,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#0f3d2e",
    borderRadius: 12,
    padding: 10,
    color: "#fff",
    marginBottom: 16,
  },
  alunoList: {
    backgroundColor: "#0f3d2e",
    borderRadius: 12,
    padding: 10,
    height: 150,
    marginBottom: 24,
  },
  alunoItem: {
    paddingVertical: 6,
  },
  alunoSelecionado: {
    backgroundColor: "#1a634f",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  alunoText: {
    color: "#fff",
  },
  alunoTextSelecionado: {
    fontWeight: "bold",
  },
  btnSair: {
    backgroundColor: "#8b1a1a",
    padding: 12,
    borderRadius: 20,
    marginBottom: 12,
  },
  btnCriar: {
    backgroundColor: "#1e7e34",
    padding: 12,
    borderRadius: 20,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
