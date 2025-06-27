import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { FONT_SIZES } from "../../constants/font-sizes";

const styles = StyleSheet.create({
  container: {
    width: "60%",
  },
  label: {
    fontSize: FONT_SIZES.subtitle,
    color: COLORS.label,
    marginBottom: 8,
  },
  valueInput: {
    padding: 8,
    marginBottom: 16,
    fontSize: FONT_SIZES.body,
    justifyContent: "center",
    height: 48,
    color: COLORS.text,
    backgroundColor: COLORS.input,
    borderColor: COLORS.border,
    borderRadius: 8,
    borderWidth: 1,
    width: "100%",
  },
});

export default styles;
