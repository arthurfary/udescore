import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import useLogin from "./login.hook";
import styles from "./login.styles";

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const {} = useLogin();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.image}
      />
      <Text style={styles.text}>Já tem uma conta?</Text>
      <TouchableHighlight style={styles.buttonPrimary}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableHighlight>

      <Text style={styles.text}>Primeira vez?</Text>
      <TouchableHighlight style={styles.buttonSecondary}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Login;
