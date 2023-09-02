import { createContext, useState, useContext, useEffect } from "react";
import { useQuery } from "react-query";
import FetchUserInfo from "../lib/api/fetchUserInfo";

const StateContext = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(
    "w48q98rawyrj63ax2pahjut8efjrodwc"
  );

  useQuery({
    queryKey: "userInfo",
    queryFn: async () => await FetchUserInfo(sessionId),
  });

  return (
    <StateContext.Provider value={{ sessionId }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
