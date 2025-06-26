import { useState } from "react";
import loginService from "../../services/login";
import registerService from "../../services/register";

const useLogin = ({ navigation }: any) => {
  const [activeForm, setActiveForm] = useState<"login" | "newUser" | null>(
    null
  );
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    const result = await loginService.login(userName, password);
    console.log("🚀 ~ handleSubmit ~ result:", result);

    if (result.status == true) navigation.navigate("Home");
    else {
      alert("Usuário ou senha inválidos");
    }
  }

  // Add your business logic here
  return {
    activeForm,
    userName,
    password,
    setActiveForm,
    setUserName,
    setPassword,
    handleSubmit,
  };
};

const useRegister = ({ navigation }: any) => {
  const [activeForm, setActiveForm] = useState<"register" | "newUser" | null>(
    null
  );
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matricula, setMatricula] = useState("");

  async function handleSubmit() {
    const result = await registerService.login(userName, email, password, matricula);
    console.log("🚀 ~ handleSubmit ~ result:", result);

    if (result.status == true) navigation.navigate("Login");
    else {
      alert("");
    }
  }

  // Add your business logic here
  return {
    activeForm,
    userName,
    email,
    password,
    matricula,
    setActiveForm,
    setEmail,
    setUserName,
    setPassword,
    setMatricula,
    handleSubmit,
  };

  
};

export default {useLogin, useRegister};
