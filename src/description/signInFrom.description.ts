interface LoginAttribute {
  name: string;
  type: string;
  label: string;
  id: string;
  eyeIcon?: boolean;
}

export interface LoginInitialState {
  email: string;
  password: string;
  [key: string]: string;
}

export const logInAttributes: LoginAttribute[] = [
  {
    name: "email",
    type: "text",
    label: "Email",
    id: "email",
  },
  {
    name: "password",
    type: "password",
    id: "password",
    label: "Password",
    eyeIcon: true,
  },
];
export const loginInitialState: LoginInitialState = {
  email: "",
  password: "",
};
