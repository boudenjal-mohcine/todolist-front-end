import axios from "axios";

const API_URL = "http://localhost:3000/api/auth/";

const register = (email: String, password: String) => {
  return axios.post(API_URL + "signup", {
    email,
    password,
  });
};

const login = async (email: String, password: String) => {
  const response = await axios
        .post(API_URL + "login", {
            email,
            password,
        });
    if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

export default {
  register,
  login,
};
