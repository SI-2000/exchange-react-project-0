import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import Authentication from "./pages/Authentication";
import { action as authenticationAction } from "./pages/Authentication";

import UnimportantPage from "./pages/UnimportantPage";
import CurrenciesList from "./pages/CurrenciesList";
import TradingPage from "./pages/TradingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AssetsPage from "./pages/AssetsPage";
import ErrorElement from "./component/error-element-comp/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorElement />,
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
  // {path:"*", element:<ErrorElement />}
]);

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: true, retry: 1 } },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
