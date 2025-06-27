import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { FONT_SIZES } from "../../constants/font-sizes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 100,
    paddingHorizontal: 16,
    alignItems: "center",
  },

  settingsIcon: {
    position: "absolute",
    top: 40,
    right: 20,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.text,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  avatarText: {
    fontSize: 40,
    color: COLORS.background,
    fontWeight: "bold",
  },

  nome: {
    fontSize: FONT_SIZES.title,
    color: COLORS.text,
    fontWeight: "bold",
    marginBottom: 24,
  },

  inputFake: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 14,
    width: "100%",
    marginBottom: 20,
  },

  hiddenText: {
    color: COLORS.text,
    fontSize: FONT_SIZES.body,
  },

  visaoGeral: {
    fontSize: FONT_SIZES.subtitle,
    color: COLORS.text,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 10,
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    gap: 12,
  },

  statCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    width: "47%",
    padding: 14,
    alignItems: "center",
    marginBottom: 12,
  },

  statValue: {
    color: COLORS.text,
    fontSize: FONT_SIZES.subtitle,
    fontWeight: "bold",
    marginTop: 4,
  },

  statLabel: {
    color: COLORS.text,
    fontSize: FONT_SIZES.caption,
    textAlign: "center",
    opacity: 0.7,
  },

  unknownIcon: {
    fontSize: 20,
    color: COLORS.text,
  },

  footerMenu: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
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
