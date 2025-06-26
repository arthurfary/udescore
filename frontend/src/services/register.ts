import { useApi } from "./api";

const registerService = {
  register: async (
    nome: string,
    email: string,
    senha: string,
    matricula: string
  ) => {
    return await useApi({
      method: "POST",
      url: "/register.php",
      data: { nome, email, senha, matricula },
    });
  },
};

export default registerService;
