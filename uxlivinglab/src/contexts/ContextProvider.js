/*global chrome */
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import FetchNotifications from "../API/FetchNotifications";
import FetchUserInfo from "../API/FetchUserInfo";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [show, setShow] = useState(true);
  const [sessionId, setSessionId] = useState("");
  const [data, setData] = useState();
  const [userInfo, setUserInfo] = useState({});
  const [notifications, setNotifications] = useState();
  const [favProducts, setFavProducts] = useState([]);
  const [resStatus, setResStatus] = useState(false);

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

  useEffect(() => {
    async function fetchNotifications() {
     try {
      const response = await FetchNotifications();
      setNotifications(response.data)
     } catch(e) {
      console.log(e)
     }
    }
    fetchNotifications()
  },[setNotifications])

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await FetchUserInfo(sessionId)
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
      value={{
        show,
        handleShow,
        sessionId,
        data,
        userInfo,
        setData,
        setFavProducts,
        favProducts,
        notifications,
        resStatus,
        setResStatus,
        setNotifications,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
