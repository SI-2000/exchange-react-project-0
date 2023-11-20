// These functions receive currency information from the "https://api.coingecko.com" API

export async function getCurrenciesInfo() {
    const response = await fetch("http://localhost:8000/coingecko?_limit=10");
    const data = response.json()
    return data
  }
  