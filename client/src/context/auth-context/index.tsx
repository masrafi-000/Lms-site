import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { registerService } from "@/services";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  signInFormData: {},
  setSignInFormData: () => {},
  signUpFormData: {},
  setSignUpFormData: () => {},
  handleRegisterUser: () => {},
});

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);

  async function handleRegisterUser(event) {
    try {
      event.preventDefault();
      const data = await registerService(signUpFormData);
      console.log("Registration successful", data);
    } catch (error) {
      console.error("Registration failed", error.message);
    }
  }

  const authContextValue = {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
