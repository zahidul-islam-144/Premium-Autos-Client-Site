import React, { createContext, useState } from "react";
import useFirebase from "../hooks/useFirebase";

// creating context to share auth in whole project
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const [orderInfo, setOrderInfo] = useState(null);

  // kept in variable all auth taks from useFirebase custom hook & sending it inside value by context provider
  const allContexts = useFirebase();
  return (
    <AuthContext.Provider value={allContexts}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
