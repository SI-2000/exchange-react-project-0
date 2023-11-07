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

const Authentication = () => {
  const uid = useSelector((state) => state.auth.uid);
  const navigate = useNavigate();

  useEffect(() => {
    if (uid) {
      navigate("/");
    }
  }, []);

  return <AuthForm />;
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

  let token = null;
  let user = null;

  switch (mode) {
    case "signup": {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        user = userCredential.user;
        const userData = {
          email: user.email,
          userName: extractUsername(user.email),
          assets: {},
        };
        // fetchRealTimeDB(`users/${user.uid}`, "put", userData);
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
        user = userCredential.user;

        const userData = {
          email: user.email,
          username: extractUsername(user.email),
          assets: {
            tether: 0,
          },
        };

        fetchRealTimeDB(`users/${user.uid}`, "PUT", userData);
      } catch (err) {
        console.log(err);
        return firebaseErrHandler(err.code) || null;
      }

      break;
    }
  }
  return redirect("/");
}
