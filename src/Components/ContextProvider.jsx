import { createContext } from "react";
import { useState } from "react";

export const ValuesContext = createContext();

export const ContextProvider = ({ children }) => {
  const [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
  });

  return (
    <ValuesContext.Provider
      value={{
        signinDetails,
        setSigninDetails,
      }}
    >
      {children}
    </ValuesContext.Provider>
  );
};
