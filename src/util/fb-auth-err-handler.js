import { json } from "react-router-dom";

export function firebaseErrHandler(errorCode) {
  switch (errorCode) {
    case "auth/invalid-email":
      return "ایمیل وارد شده معتبر نیست";
    case "auth/user-disabled":
      return "حساب کاربری شما غیرفعال شده است";
    case "auth/user-not-found":
      return "حساب کاربری با این ایمیل یافت نشد";
    case "auth/wrong-password":
      return "رمز عبور اشتباه است.";
    case "auth/invalid-login-credentials":
      return " رمز عبور اشتباه است";
    case "auth/email-already-in-use":
      return "از قبل حسابی با این ایمیل وجود دارد";
    case "email-already-in-use":
      return "از قبل حسابی با این ایمیل ثبت شده است";
    case "network-request-failed":
      return "مشکل دسترسی به اینترنت!";
    default:
      throw json({ message: "Something went wrong" }, { status: 500 });
  }
}
