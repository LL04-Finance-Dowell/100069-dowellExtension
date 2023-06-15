/*global chrome */
import React, { createContext, useContext, useState, useEffect } from "react";
import FetchNotifications from "../API/FetchNotifications";
import FetchUserInfo from "../API/FetchUserInfo";
import FetchProducts from "../API/FetchProducts";
import FetchAnnouncements from "../API/FetchAnnouncements";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [show, setShow] = useState(true);
  const [sessionId, setSessionId] = useState("");
  const [data, setData] = useState();
  const [userInfo, setUserInfo] = useState({});
  const [notifications, setNotifications] = useState();
  const [favProducts, setFavProducts] = useState([]);
  const [resStatus, setResStatus] = useState(false);
  const [chosenProduct, setChosenProduct] = useState("");
  const [products, setProducts] = useState({});
  const [announcements, setAnnouncements] = useState();

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
        setNotifications(response.data[0]);
      } catch (e) {
        console.log(e);
      }
    }
    fetchNotifications();
  }, [setNotifications]);

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const response = await FetchAnnouncements();
        setAnnouncements(response.data['data']);
        // console.log(announcements)
      } catch (e) {
        console.log(e);
      }
    }
    fetchAnnouncements();
  }, [setAnnouncements]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await FetchProducts();
        setProducts(response.data.product_list);
      } catch (e) {
        console.log(e);
      }
    }
    fetchProducts();
  }, [setProducts]);

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await FetchUserInfo(sessionId);
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
        products,
        resStatus,
        setResStatus,
        setNotifications,
        chosenProduct,
        setChosenProduct,
        announcements,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
