import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import useLogin from "./login.hook";
import styles from "./login.styles";
import Input from "../../components/input";

export interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const {
    activeForm,
    userName,
    password,
    setActiveForm,
    setUserName,
    setPassword,
    handleSubmit,
  } = useLogin({ navigation });

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
          <Input
            value={userName}
            label="Usuário"
            onChangeText={(e) => setUserName(e)}
          />
          <Input
            value={password}
            label="Senha"
            type="password"
            onChangeText={(e) => setPassword(e)}
          />
          <TouchableHighlight
            style={styles.circularButton}
            onPress={handleSubmit}
          >
            <Image
              source={require("../../../assets/arrow.png")}
              style={styles.buttonIcon}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonRedirect}
            onPress={() => setActiveForm("newUser")}
          >
            <Text style={styles.buttonText}>CADASTRAR</Text>
          </TouchableHighlight>
        </>
      ) : (
        <>
          <Input label="Usuário" />
          <Input label="Matrícula" type="numeric" />
          <Input label="Email" type="email" />
          <Input label="Senha" type="password" />
          <TouchableHighlight style={styles.circularButton}>
            <Image
              source={require("../../../assets/arrow.png")}
              style={styles.buttonIcon}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonRedirect}
            onPress={() => setActiveForm("login")}
          >
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableHighlight>
        </>
      )}
    </View>
  );
};

export default Login;
