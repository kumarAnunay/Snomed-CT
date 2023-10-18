import { createContext } from "react";
import { useState } from "react";

export const ValuesContext = createContext();

export const ContextProvider = ({ children }) => {
  // const [signupDetails, setSignupDetails] = useState({});
  // const [data, setData] = useState([])

  const [freeWordsText, setFreeWordsText] = useState("");
  const [queryText, setqueryText] = useState("");

  const [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
  });

  return (
    <ValuesContext.Provider
      value={{
        signinDetails,
        setSigninDetails,
        freeWordsText,
        setFreeWordsText,
        queryText,
        setqueryText,
      }}
    >
      {children}
    </ValuesContext.Provider>
  );
};
