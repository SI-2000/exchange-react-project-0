import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";

import classes from "./App.module.css";

// { name: "bitcoin" },
// { name: "ethereum" },
// { name: "tether" },
// { name: "cardano" },
// { name: "binancecoin" },
// { name: "bitcoincash" },
// { name: "dogecoin" },
// { name: "ethereumclassic" },
// { name: "litecoin" },
// { name: "shibainu" },
// { name: "tron" },
// { name: "ripple" },

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
