import { isEmpty } from "./javascript";
import { emailValidation, passwordValidation } from "./regex";

export const validation = ({ email, password }: any): any => {
  const newErrors: any = { email: "", password: "" };

  newErrors.email = validateEmail(email); //validates email
  newErrors.password = validatePassword(password); //validates Password

  return newErrors;
};

const validateEmail = (email: string): string => {
  if (isEmpty(email)) return `Email field is required`;
  else if (!emailValidation(email)) return "Please enter a valid email";
  return "";
};

const validatePassword = (password: string): string => {
  if (isEmpty(password)) return `Password field is required`;
  else if (!passwordValidation(password))
    return "Password:8 characters, 1 uppercase, 1 lowercase.";
  return "";
};
