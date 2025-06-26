import { useApi } from "./api";

const registerService = {
  login: async (name: string, email: string, senha: string, matricula: string) => {
    return await useApi({
      method: "POST",
      url: "/register.php",
      data: { name, email, senha, matricula },
    });
  },
};

export default registerService;
