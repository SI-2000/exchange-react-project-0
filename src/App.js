import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import { action as authenticationAction } from "./pages/Authentication";
import { QueryClient, QueryClientProvider } from "react-query";
import ErrorElement from "./component/error-element-comp/ErrorElement";
import RouterLoading from "./ui/RouterLoading";

const HomePage = lazy(() => import("./pages/HomePage"));
const AssetsPage = lazy(() => import("./pages/AssetsPage"));
const Authentication = lazy(() => import("./pages/Authentication"));
const CurrenciesList = lazy(() => import("./pages/CurrenciesList"));
const TradingPage = lazy(() => import("./pages/TradingPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: (
      <Suspense fallback={<RouterLoading />}>
        <ErrorElement />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<RouterLoading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "assets",
        element: (
          <Suspense fallback={<RouterLoading />}>
            <AssetsPage />
          </Suspense>
        ),
      },
      {
        path: "auth",
        element: (
          <Suspense fallback={<RouterLoading />}>
            <Authentication />
          </Suspense>
        ),
        action: authenticationAction,
      },
      {
        path: "currencies-list",
        element: (
          <Suspense fallback={<RouterLoading />}>
            <CurrenciesList />
          </Suspense>
        ),
      },
      {
        path: "coins",
        children: [
          {
            path: ":coinId",
            element: (
              <Suspense fallback={<RouterLoading />}>
                <TradingPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 1 } },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
