import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { FONT_SIZES } from "../../constants/font-sizes";

const styles = StyleSheet.create({
  title: {
    fontSize: FONT_SIZES.title,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  nome: {
    fontSize: FONT_SIZES.subtitle,
    fontWeight: "bold",
    color: COLORS.text,
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
    borderColor: COLORS.text,
    marginBottom: 16,
    backgroundColor: "transparent",
    gap: 8,
  },
  buttonText: {
    color: COLORS.text,
    fontSize: FONT_SIZES.body,
    fontWeight: "bold",
  },
  exitButton: {
    marginTop: 40,
    backgroundColor: COLORS.error,
    width: "90%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  exitText: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: FONT_SIZES.body,
  },
  icon: {
    marginBottom: 12,
  },
});

export default styles;
