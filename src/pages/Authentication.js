import React, { useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import AuthForm from "../component/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import {
  json,
  redirect,
  useActionData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { authActions } from "../store/auth";
import { firebaseErrHandler } from "../util/fb-auth-err-handler";
import { fetchRealTimeDB } from "../util/realTimeDB-req";
import { extractUsername } from "../util/username-extracter";
import classes from "./Authentication.module.css";
import AuthImage0 from "../files/images/login-image/auth-0.jfif";
import AuthImage1 from "../files/images/login-image/auth-1.jfif";

const Authentication = () => {
  const uid = useSelector((state) => state.auth.uid);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  useEffect(() => {
    if (uid) {
      navigate("/");
    }
  }, []);

  return (
    <div className={`${classes["Authentication"]}`}>
      <AuthForm />
      <div className={`${classes["image-container"]}`}>
        {/* {isLogin ? <img src={AuthImage0}></img> : <img src={AuthImage0}></img>} */}
        <img
          className={`${isLogin ? classes["visiable-img"] : null}`}
          src={AuthImage0}
        ></img>
        <img
          className={`${!isLogin ? classes["visiable-img"] : null}`}
          src={AuthImage1}
        ></img>
      </div>
    </div>
  );
};

export default Authentication;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  const data = await request.formData();

  let authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const auth = getAuth();

  switch (mode) {
    case "signup": {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        let user = userCredential.user;

        const userData = {
          email: user.email,
          username: extractUsername(user.email),
          assets: {
            tether: 0,
          },
        };

        await fetchRealTimeDB(`users/${user.uid}`, "PUT", userData);
      } catch (err) {
        return firebaseErrHandler(err.code) || null;
      }

      break;
    }

    case "login": {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );

        // const userData = {
        //   email: user.email,
        //   username: extractUsername(user.email),
        //   assets: {
        //     tether: 0,
        //   },
        // };

        // fetchRealTimeDB(`users/${user.uid}`, "PUT", userData);
      } catch (err) {
        console.log(err);
        return firebaseErrHandler(err.code) || null;
      }

      break;
    }
  }
  return redirect("/");
}
