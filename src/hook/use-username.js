import { useSelector } from "react-redux";

export function useUsername() {
  const email = useSelector((state) => state.email);
  if (email) {
    console.log(email + "dfaef");
    const atIndex = email.indexOf("@");
    return email.substring(0, atIndex);
  }
}
