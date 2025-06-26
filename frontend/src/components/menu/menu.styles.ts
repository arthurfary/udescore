import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.background, // ocupar área da barra do Android
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 25,
    zIndex: 99,
  },
  menuItem: {
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default styles;
