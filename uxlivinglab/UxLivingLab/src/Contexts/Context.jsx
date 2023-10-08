import { createContext, useState, useContext } from "react";

const StateContext = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(
    "ilenru1vxwllyvdq3auq0aal626yprka"
  );

  return (
    <StateContext.Provider value={{ sessionId }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
