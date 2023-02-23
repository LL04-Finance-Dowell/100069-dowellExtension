/*global chrome */
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [show, setShow] = useState(true);
  const [sessionId, setSessionId] = useState(
    "sdbg5xf5v5qcxrwuyo0xihl2vno3p8i5"
  );
  const [data, setData] = useState();
  const [userInfo, setUserInfo] = useState({});

  const portfolio_info = [
    {
      username: "owner",
      member_type: "team_member",
      product: "Workflow AI",
      data_type: "Real_Data",
      operations_right: "Admin",
      role: "Team Lead",
      security_layer: "None",
      portfolio_name: "WorkflowOwner",
      portfolio_code: "1000000000",
      portfolio_details: "",
      portfolio_uni_code: "10000000000000",
      portfolio_specification: "",
      status: "enable",
      org_id: "6390b313d77dc467630713f2",
      org_name: "WorkflowAi",
    },
    {
      username: ["owner"],
      member_type: "owner",
      product: "Legalzard",
      data_type: "Real_Data",
      operations_right: "Admin",
      role: "Team Lead",
      security_layer: "None",
      portfolio_name: "LegalzardAdmin",
      portfolio_code: "3452769",
      portfolio_specification: "",
      portfolio_uni_code: "",
      portfolio_details: "",
      status: "enable",
    },
  ];

  const handleShow = (show) => {
    setShow(show);
  };

  // useEffect(() => {
  //   function logCookies(cookies) {
  //     for (const cookie of cookies) {
  //       if (cookie.domain === "100014.pythonanywhere.com") {
  //         setSessionId(cookie.value);
  //       }
  //     }
  //   }
  //   chrome.cookies
  //     .getAll({
  //       name: "sessionid",
  //     })
  //     .then((cookies) => logCookies(cookies));
  // }, []);

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
            portfolio_info.filter((datum) => datum.org_name)
            // response.data.portfolio_info
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
      value={{ show, handleShow, sessionId, data, userInfo, setData }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
