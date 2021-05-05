import { $authHost } from "./index";
import jwt_decode from "jwt-decode";
import axios from "axios";
const url = "http://localhost:3001/";

export const registration = async (email, password) => {
  const { data } = await axios.post(`${url}api/store/user/register`, {
    email,
    password,
    role: "ADMIN",
  });
  localStorage.setItem("token", data);
  return jwt_decode(data);
};

export const login = async (email, password) => {
  const { data } = await axios.post(`${url}api/store/user/login`, {
    email,
    password,
  });
  localStorage.setItem("token", data);
  return jwt_decode(data);
};

export const check = async () => {
  const { data } = await $authHost.get(`${url}api/store/user/auth`);
  localStorage.setItem("token", data);
  return jwt_decode(data);
};
