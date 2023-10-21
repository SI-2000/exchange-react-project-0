import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { getAuth, signOut } from "firebase/auth";

export function useLogout(postExecution) {
  const dispatch = useDispatch();
  return () => {
    const auth = getAuth();
    signOut(auth);
    dispatch(authActions.logout());
    postExecution();
  };
}
