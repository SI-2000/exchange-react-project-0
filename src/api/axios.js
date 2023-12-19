import axios from "axios";

const BASE_URL = "http://localhost:8000";

export default axios.create({
  baseURL: BASE_URL,
});

export const fireBaseAxios = axios.create({
  baseURL: "https://exchange-3f817-default-rtdb.firebaseio.com/",
});
