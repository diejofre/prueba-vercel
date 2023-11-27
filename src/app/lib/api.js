import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
});

export const getMateriales = async () => {
  const res = await api.get("/materials");
  return res.data;
};
