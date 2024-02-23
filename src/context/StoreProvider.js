import React, { useState, createContext } from "react";

export const MyContext = createContext();

const StoreProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  return (
    <MyContext.Provider value={{ mode, setMode }}>
      {children}
    </MyContext.Provider>
  );
};

export default StoreProvider;
