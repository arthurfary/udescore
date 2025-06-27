import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { FONT_SIZES } from "../../constants/font-sizes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 100,
    paddingHorizontal: 16,
  },
  rankItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
  },

  userHighlight: {
    backgroundColor: COLORS.highlightBackground,
    borderColor: COLORS.highlight,
    borderWidth: 1,
  },

  positionText: {
    fontSize: FONT_SIZES.subtitle,
    fontWeight: "bold",
    minWidth: 32,
    textAlign: "center",
    alignSelf: "center",
  },

  avatarPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.text,
  },

  nameText: {
    color: COLORS.text,
    fontSize: FONT_SIZES.body,
    fontWeight: "500",
  },

  userNameText: {
    fontWeight: "bold",
    color: COLORS.highlight,
  },

  pointsText: {
    color: COLORS.text,
    fontSize: FONT_SIZES.caption,
    fontWeight: "600",
  },

  userPointsText: {
    color: COLORS.highlight,
  },
  title: {
    fontSize: FONT_SIZES.display,
    fontWeight: "bold",
    color: COLORS.text,
    textAlign: "center",
    marginBottom: 32,
    fontFamily: "serif",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  medalIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 2,
  },
  separator: {
    alignItems: "center",
    marginVertical: 16,
  },
  separatorLine: {
    height: 1,
    backgroundColor: COLORS.text,
    width: "80%",
    opacity: 0.3,
  },
  avatarIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.text,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
