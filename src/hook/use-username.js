import { useSelector } from "react-redux";

export function useUsername() {
  const email = useSelector((state) => state.auth.email);
  if (email) {
    const atIndex = email.indexOf("@");
    return email.substring(0, atIndex);
  }
}
