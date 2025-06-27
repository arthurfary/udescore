import { useEffect, useState } from "react";
import loginService from "../../services/login";
import registerService from "../../services/register";
import { useAuth } from "../../context/userContext";

const useLogin = ({ navigation }: any) => {
  const [activeForm, setActiveForm] = useState<"login" | "newUser" | null>(
    null
  );
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);

  const { setUser } = useAuth();

  async function handleSubmit() {
    const result = await loginService.login(userName, password);
    console.log("🚀 ~ handleSubmit ~ result:", result);

    if (result.status == true) {
      const userInfo = result.data.data;
      setUser({
        id: userInfo.id,
        nome: userInfo.nome,
        tipo: userInfo.tipo,
      });

      if (userInfo.tipo === "p") {
        navigation.navigate("Professor");
      } else if (userInfo.tipo === "a") {
        navigation.navigate("Home");
      }
    } else {
      alert("Usuário ou senha inválidos");
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return {
    activeForm,
    userName,
    password,
    showWelcome,
    setActiveForm,
    setUserName,
    setPassword,
    handleSubmit,
  };
};

const useRegister = ({ navigation }: any) => {
  const [activeForm, setActiveForm] = useState<"login" | "newUser" | null>(
    null
  );
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matricula, setMatricula] = useState("");

  async function handleSubmit(setActiveForm: any) {
    const result = await registerService.register(
      userName,
      email,
      password,
      matricula
    );
    console.log("🚀 ~ handleSubmit ~ result:", result);

    if (result.status == true) {
      alert(result.data.message);
      setActiveForm("login");
    } else {
      alert(result.error);
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

export default { useLogin, useRegister };
