import axios, { AxiosResponse } from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/api/todo/";

export const getTodos = (): Promise<AxiosResponse<any, any>> => {
  return axios.get(API_URL, { headers: authHeader() });
};

export const deleteTodo = (todo_id:String): Promise<AxiosResponse<any, any>> =>{
  return axios.delete(API_URL+todo_id,{ headers: authHeader() })
}

