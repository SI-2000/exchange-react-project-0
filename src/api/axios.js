import axios from "axios";

export const fireBaseAxios = axios.create({
  baseURL: "https://exchange-3f817-default-rtdb.firebaseio.com/",
});
