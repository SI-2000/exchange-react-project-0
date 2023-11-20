import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import Authentication from "./pages/Authentication";
import { action as authenticationAction } from "./pages/Authentication";
import ErrorPage from "./pages/ErrorPage";
import { fetchRealTimeDB } from "./util/realTimeDB-req";
import classes from "./App.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import UnimportantPage from "./pages/UnimportantPage";
import CurrenciesList from "./pages/CurrenciesList";
import TradingPage from "./pages/TradingPage";
import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from "react-query";
import AssetsPage from "./pages/AssetsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "assets", element: <AssetsPage /> },
      {
        path: "auth",
        element: <Authentication />,
        action: authenticationAction,
      },
      { path: "currencies-list", element: <CurrenciesList /> },
      {
        path: "coins",
        children: [
          {
            path: ":coinId",
            // loader: TradingPageLoader,
            element: <TradingPage />,
          },
        ],
      },
      {
        path: "unimportant-page",
        element: <UnimportantPage />,
      },
    ],
  },
]);

function App() {
  
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });


  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
