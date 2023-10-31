/*global chrome */

import { createContext, useState, useContext, useEffect } from "react";

const StateContext = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(
    "ilenru1vxwllyvdq3auq0aal626yprka"
  );

  // useEffect(() => {
  //   function logCookies(cookies) {
  //     for (const cookie of cookies) {
  //       if (cookie.domain === "100014.pythonanywhere.com") {
  //         setSessionId(cookie.value);
  //         // console.log(cookie.value);
  //       }
  //     }
  //   }
  //   chrome.cookies
  //     .getAll({
  //       name: "sessionid",
  //     })
  //     .then((cookies) => logCookies(cookies));
  // }, []);

  return (
    <StateContext.Provider value={{ sessionId }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
