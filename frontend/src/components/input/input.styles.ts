import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 16,
    color: COLORS.label,
    marginBottom: 8,
  },
  valueInput: {
    padding: 8,
    marginBottom: 16,
    justifyContent: "center",
    height: 32,
    color: COLORS.text,
    backgroundColor: COLORS.input,
    borderColor: COLORS.border,
    borderRadius: 8,
    borderWidth: 1,
  },
});

export default styles;
