import { createContext, useState, useContext } from "react";

const StateContext = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(
    "w48q98rawyrj63ax2pahjut8efjrodwc"
  );
  const [products, setProducts] = useState([]);

  return (
    <StateContext.Provider value={{ sessionId, products, setProducts }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
