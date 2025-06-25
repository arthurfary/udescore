import { StyleSheet, TouchableHighlight } from "react-native";
import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 12,
    color: COLORS.label,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    color: COLORS.label,
    marginBottom: 8,
  },
  image: {
    resizeMode: "contain",
    width: "50%",
    height: 120,
    margin: 40,
  },
  buttonIcon: {
    resizeMode: "contain",
  },
  buttonPrimary: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
    borderRadius: 8,
    marginBottom: 16,
    width: 120,
    height: 32,
  },
  buttonSecondary: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.primary,
    borderWidth: 1,
    color: COLORS.label,
    marginBottom: 16,
    borderRadius: 8,
    width: 120,
    height: 32,
  },
  buttonRedirect: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    width: 120,
    height: 32,
  },

  circularButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    color: COLORS.label,
    borderRadius: 150,
    width: 40,
    height: 40,
  },
});

export default styles;
