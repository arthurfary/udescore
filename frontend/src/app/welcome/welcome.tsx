import React from "react";
import { View, Image } from "react-native";
import useWelcome from "./welcome.hook";
import styles from "./welcome.styles";

export interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  const {} = useWelcome();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.image}
      />
    </View>
  );
};

export default Welcome;
