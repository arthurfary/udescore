import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

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
    backgroundColor: "#ffffff10", // leve destaque
    borderColor: "#00ffcc",
    borderWidth: 1,
  },

  positionText: {
    fontSize: 18,
    fontWeight: "bold",
    minWidth: 32,
    textAlign: "center",
    alignSelf: "center",
  },

  avatarPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#fff",
  },

  nameText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },

  userNameText: {
    fontWeight: "bold",
    color: "#00ffcc",
  },

  pointsText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  userPointsText: {
    color: "#00ffcc",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
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
    backgroundColor: "#fff",
    width: "80%",
    opacity: 0.3,
  },
  avatarIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
