import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import hooks from "./login.hook";
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
  } = hooks.useLogin({ navigation });

  const {
    activeForm: activeFormRegister,
    userName: userNameRegister,
    email: emailRegister,
    password: passwordRegister,
    matricula: matriculaRegister,
    setActiveForm: setActiveFormRegister,
    setUserName: setUserNameRegister,
    setPassword: setPasswordRegister,
    setMatricula: setMatriculaRegister,
    setEmail: setEmailRegister,
    handleSubmit: handleSubmitRegister,
  } = hooks.useRegister({ navigation });

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
          <Input
            label="Usuário"
            value={userNameRegister}
            onChangeText={(e) => setUserNameRegister(e)}
          />
          <Input
            label="Matrícula" type="numeric"
            value={matriculaRegister}
            onChangeText={(e) => setMatriculaRegister(e)}
          />
          <Input
            label="Email" type="email"
            value={emailRegister}
            onChangeText={(e) => setEmailRegister(e)}
          />
          <Input
            label="Senha" type="password"
            value={passwordRegister}
            onChangeText={(e) => setPasswordRegister(e)}
          />
          <TouchableHighlight
            style={styles.circularButton}
            onPress={handleSubmitRegister}
          >
            <Image
              source={require("../../../assets/arrow.png")}
              style={styles.buttonIcon}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonRedirect}
            onPress={() => setActiveFormRegister("login")}
          >
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableHighlight>
        </>
      )}
    </View>
  );
};

export default Login;
