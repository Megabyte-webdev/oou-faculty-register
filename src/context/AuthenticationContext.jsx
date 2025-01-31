import { createContext, useEffect, useState } from "react";

const primaryInfo = "primary";
const tokenKey = "token";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
 

  const [authDetails, setAuthDetails] = useState({
    token: JSON.parse(sessionStorage.getItem("myToken")),
    user: JSON.parse(sessionStorage.getItem(primaryInfo)),
  });

  const storePrimaryDetails = () => {
    sessionStorage.setItem(primaryInfo, JSON.stringify(authDetails.user));
    sessionStorage.setItem("myToken", JSON.stringify(authDetails.token));
  };
  const storeToken = () => {
    sessionStorage.setItem(tokenKey, JSON.stringify(authDetails.token));
  }


  useEffect(() => {
    if (authDetails?.token) {
      storePrimaryDetails();
      storeToken()
    }
  }, [authDetails?.token, authDetails?.user]);

  return (
    <AuthenticationContext.Provider value={{ authDetails, setAuthDetails }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
