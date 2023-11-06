import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";

import Authentication from "./pages/Authentication";
import { action as authenticationAction } from "./pages/Authentication";
import ErrorPage from "./pages/ErrorPage";
import { fetchRealTimeDB } from "./util/realTimeDB-req";
// import { loader as TradingPageLoader } from "./pages/TradingPage";

import classes from "./App.module.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import AssetsPage from "./pages/assets/AssetsPage";
import UnimportantPage from "./pages/UnimportantPage";
import CurrenciesList from "./pages/CurrenciesList";
import TradingPage from "./pages/TradingPage";
import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from "react-query";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANzh3LLqS4Fvg5hFGSE-td8iEyZ_qE60Q",
  authDomain: "exchange-3f817.firebaseapp.com",
  databaseURL: "https://exchange-3f817-default-rtdb.firebaseio.com",
  projectId: "exchange-3f817",
  storageBucket: "exchange-3f817.appspot.com",
  messagingSenderId: "1031330021796",
  appId: "1:1031330021796:web:1b695560b3f67fda014131",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

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
  const queryClient = new QueryClient();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.uid);

  useEffect(() => {
    const auth = getAuth();
    const uid = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const email = user.email;

        dispatch(authActions.login({ uid, email }));

        // for error

        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
