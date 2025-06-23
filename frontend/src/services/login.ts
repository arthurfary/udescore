import axios from "axios";

const API_URL = "https://udescore.fooyer.space/backend";

const loginService = {
  login: async (email: string, senha: string) => {
    return axios.post(`${API_URL}/login.php`, { email, senha });
  },
};

export default loginService;
