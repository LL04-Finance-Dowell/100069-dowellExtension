/*global chrome */
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [show, setShow] = useState(true);
  const [sessionId, setSessionId] = useState("");
  const [data, setData] = useState();
  const [userInfo, setUserInfo] = useState({});
<<<<<<< HEAD
  const [notifications, setNotifications] = useState();
=======
  const [favProducts, setFavProducts] = useState([]);
>>>>>>> 2899e5980d0ffb3a8fe2acf94cb8ecb5d9ba3441

  const handleShow = (show) => {
    setShow(show);
  };

  useEffect(() => {
    function logCookies(cookies) {
      for (const cookie of cookies) {
        if (cookie.domain === "100014.pythonanywhere.com") {
          setSessionId(cookie.value);
        }
      }
    }
    chrome.cookies
      .getAll({
        name: "sessionid",
      })
      .then((cookies) => logCookies(cookies));
  }, []);

  useEffect(()=>{
    fetch("https://100092.pythonanywhere.com/notification/notification/")
      .then((response) => response.json())
      .then((data) => setNotifications(data))
  })
 
        

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await axios.post(
          "https://100014.pythonanywhere.com/api/userinfo/",
          {
            session_id: sessionId,
          }
        );
        setUserInfo(response.data.userinfo);

        setData(
          [].concat(
            response?.data.other_org,
            response?.data.own_organisations,
            response?.data.portfolio_info.filter((datum) => datum.org_name)
          )
        );
      } catch (e) {
        if (e.message === "Network Error") {
          console.log("error network");
        } else {
          console.log(e);
        }
      }
    }
    if (sessionId.length > 0) {
      getUserInfo();
    }
  }, [sessionId]);

  return (
    <StateContext.Provider
<<<<<<< HEAD
      value={{ show, notifications, handleShow, sessionId, data, userInfo, setData }}
=======
      value={{
        show,
        handleShow,
        sessionId,
        data,
        userInfo,
        setData,
        setFavProducts,
        favProducts,
      }}
>>>>>>> 2899e5980d0ffb3a8fe2acf94cb8ecb5d9ba3441
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
