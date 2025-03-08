import { nanoid } from "nanoid";

export const signUpFormControls = [
  {
    id: nanoid(),
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    type: "text",
    componentType: "input",
  },
  {
    id: nanoid(),
    name: "userEmail",
    label: "User Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "input",
  },
  {
    id: nanoid(),
    name: "password",
    label: "Password",
    placeholder: "Enter your user password",
    type: "password",
    componentType: "input",
  },
];

export const signInFormControls = [
  {
    id: nanoid(),
    name: "userEmail",
    label: "User Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "input",
  },
  {
    id: nanoid(),
    name: "password",
    label: "Password",
    placeholder: "Enter your user password",
    type: "password",
    componentType: "input",
  },
];

export const initialSignInFormData = {
  userEmail: "",
  password: "",
};
export const initialSignUpFormData = {
  userName: "",
  userEmail: "",
  password: "",
};
