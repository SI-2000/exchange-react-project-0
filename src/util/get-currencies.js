// These functions receive currency information from the "https://api.coingecko.com" API

import axios from "../api/axios";

export async function getCurrenciesInfo() {
  const response = await axios.get("coingecko?_limit=10");
  return response.data;
}
