import { $authHost } from "./index";
import axios from "axios";
const url = "http://localhost:3001/";

export const createType = async (type) => {
  const { data } = await $authHost.post(`${url}api/store/type`, type);
  return data;
};

export const getTypes = async () => {
  const { data } = await axios.get(`${url}api/store/type`);
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post(`${url}api/store/brand`, brand);
  return data;
};

export const getBrands = async () => {
  const { data } = await axios.get(`${url}api/store/brand`);
  return data;
};

export const createDevice = async (device) => {
  const { data } = await $authHost.post(`${url}api/store/device`, device);
  return data;
};

export const getDevice = async (brandId, typeId, page, limit = 4) => {
  const { data } = await axios.get(`${url}api/store/device`, {
    brandId,
    typeId,
    page,
    limit,
  });

  return data;
};

export const getDeviceById = async (id) => {
  const { data } = await axios.get(`${url}api/store/device/${id}`);
  return data;
};
