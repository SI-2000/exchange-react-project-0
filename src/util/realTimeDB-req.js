import { json } from "react-router-dom";

export async function fetchRealTimeDB(keys, method = "GET", data) {
  const response = await fetch(
    "https://exchange-3f817-default-rtdb.firebaseio.com/" + keys + ".json",
    {
      method: method,
      headers:
        method === "GET"
          ? {}
          : {
              "Content-Type": "application/json",
            },
      body: method === "GET" ? null : JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw json({ message: "Could not get data." }, { status: 500 });
  }

  const resData = await response.json();
  return resData;
}
