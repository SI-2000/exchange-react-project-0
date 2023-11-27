import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "../component/MainHeader";
import MainFooter from "../component/MainFooter";
import { useDispatch, useSelector } from "react-redux";
import { assetsActions } from "../store/assets";
import { useQuery } from "react-query";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { authActions } from "../store/auth";
import RouterLoading from "../ui/RouterLoading";
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

const RootLayout = () => {
  const uid = useSelector((state) => state.auth.uid);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const fullPath = location.pathname + location.search;
  const userIsInTradePath = fullPath.startsWith("/coins");
  const showMainFooter = !userIsInTradePath;

  const dispatch = useDispatch();

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
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <RouterLoading />;

  return (
    <div>
      <MainHeader />
      <Outlet />
      {showMainFooter && <MainFooter />}
    </div>
  );
};

export default RootLayout;
