import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [show, setShow] = useState(true);

  const handleShow = (show) => {
    setShow(show);
  };

  return (
    <StateContext.Provider value={{ show, handleShow }}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);