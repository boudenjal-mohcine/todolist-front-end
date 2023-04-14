import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/todo/";

const getTodos = () => {
  return axios.get(API_URL,{ headers: authHeader() });
};

export default getTodos;