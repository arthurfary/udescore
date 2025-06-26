import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a3c34",
    padding: "5%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: width * 0.06,
    fontFamily: "Skillet Font",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: "4%",
    fontWeight: "bold",
  },
  rankItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: "3%",
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff40",
  },
  medal: {
    width: 64,
    height: 64,
    marginRight: 8,
  },
  position: {
    fontSize: width * 0.035,
    color: "#ffffff",
    width: "10%",
    padding: 10,
  },
  userImage: {
    width: 48,
    height: 48,
    borderRadius: 150,
    marginRight: 8,
  },
    name: {
    fontSize: width * 0.035, 
    color: "#ffffff",
    flex: 1,
  },
  xp: {
    fontSize: width * 0.035, 
    color: "#ffcc00",
    marginLeft: "3%",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "3%",
    backgroundColor: "#1a3c34",
  },
  navButton: {
    padding: "2%",
    minWidth: "15%",
  },
  navIcon: {
    width: "25%",
    height: "25%",
    tintColor: "#ffffff",
    minWidth: 30,
    minHeight: 30,
  },
});


export default styles;
