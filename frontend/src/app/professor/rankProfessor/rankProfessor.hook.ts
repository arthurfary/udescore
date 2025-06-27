import { useState } from "react";
import loginService from "../../../services/login";

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

export default useLogin;
