import { useApi } from "./api";

const loginService = {
  login: async (email: string, senha: string) => {
    return await useApi({
      method: "POST",
      url: "/login.php",
      data: { email, senha },
    });
  },
};

export default loginService;
