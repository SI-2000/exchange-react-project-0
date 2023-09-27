import React, { useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import AuthForm from "../component/AuthForm";
import { useDispatch } from "react-redux";
import { json, useActionData, useSearchParams } from "react-router-dom";
import { authActions } from "../store/auth";
import { firebaseErrHandler } from "../util/fb-auth-err-handler";

const Authentication = () => {
  const token = useActionData();
  const dispatch = useDispatch();

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
      } catch (err) {
        console.log(err.code);
        return firebaseErrHandler(err.code) || null;
      }

      break;
    }
  }
  return null;
}
