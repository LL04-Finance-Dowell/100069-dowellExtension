import { createContext, useState, useContext } from "react";

const StateContext = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(
    "w48q98rawyrj63ax2pahjut8efjrodwc"
  );

  return (
    <StateContext.Provider value={{ sessionId }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
