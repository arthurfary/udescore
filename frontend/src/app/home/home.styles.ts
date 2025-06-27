import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { FONT_SIZES } from "../../constants/font-sizes";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  courseCard: {
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 8,
    shadowColor: COLORS.shadow,
    width: "90%",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  courseBackground: {
    height: 140,
    width: "100%",
    position: "relative",
    justifyContent: "flex-end",
    borderRadius: 20,
  },
  courseOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.overlay,
    borderRadius: 20,
  },
  courseLabel: {
    backgroundColor: COLORS.modalBackground,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    alignSelf: "center",
    marginBottom: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  courseName: {
    color: COLORS.text,
    fontSize: FONT_SIZES.subtitle,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.5,
  },
});

export default styles;
