import { createContext, useState, useContext } from "react";

const StateContext = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState("12345678");

  return (
    <StateContext.Provider value={{ sessionId }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
