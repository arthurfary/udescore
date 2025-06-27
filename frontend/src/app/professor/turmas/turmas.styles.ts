import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";
import { FONT_SIZES } from "../../../constants/font-sizes";

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: FONT_SIZES.title,
    color: COLORS.text,
    fontWeight: "bold",
    marginBottom: 24,
  },
  emptyMessage: {
    fontSize: FONT_SIZES.caption,
    color: COLORS.text,
    textAlign: "center",
    marginTop: 40,
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
    marginBottom: 40,
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
});

export default styles;
