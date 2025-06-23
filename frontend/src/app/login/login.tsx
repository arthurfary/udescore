import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import useLogin from "./login.hook";
import styles from "./login.styles";
import Input from "../../components/input";

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const { activeForm, setActiveForm } = useLogin();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.image}
      />
      {!activeForm ? (
        <>
          <Text style={styles.text}>Já tem uma conta?</Text>
          <TouchableHighlight
            style={styles.buttonPrimary}
            onPress={() => setActiveForm("login")}
          >
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableHighlight>

          <Text style={styles.text}>Primeira vez?</Text>
          <TouchableHighlight
            style={styles.buttonSecondary}
            onPress={() => setActiveForm("newUser")}
          >
            <Text style={styles.buttonText}>CADASTRAR</Text>
          </TouchableHighlight>
        </>
      ) : activeForm === "login" ? (
        <>
          <Input label="Usuário" />
          <Input label="Senha" type="password" />
        </>
      ) : (
        <>
          <Input label="Usuário" />
          <Input label="Matrícula" type="numeric" />
          <Input label="Senha" type="password" />
        </>
      )}
    </View>
  );
};

export default Login;
