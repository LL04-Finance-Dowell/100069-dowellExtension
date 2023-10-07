import { useQuery } from "react-query";
import HeaderComponent from "../components/HeaderComponent";
import Logo from "../assets/mdi_null-off.png";
import FetchService from "../lib/api/fetchService";
import TabButton from "../components/TabButton";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineCopy,
} from "react-icons/ai";
import FetchUserInfo from "../lib/api/fetchUserInfo";

import { useState } from "react";
import { useStateContext } from "../contexts/Context";

export default function CreditSystem() {
  const fields = ["Service Key", "Credit", "Status"];
  const [creditsVisible, setCreditsVisible] = useState(false);
  const { sessionId } = useStateContext();
  const [copied, setCopied] = useState(false);

  function copyItem() {
    navigator.clipboard.writeText(creditDataQuery?.data?.data?.data?.api_key);
    setCopied(true);
  }

  function makeVisible() {
    setCreditsVisible(!creditsVisible);
  }
  const { data: userInfoData, isLoading: userInfoLoading } = useQuery({
    queryKey: "userInfo",
    queryFn: () => FetchUserInfo(sessionId),
  });

  const adminId = userInfoData?.data?.userinfo?.client_admin_id;

  const { data: creditDataQuery, isLoading: creditLoading } = useQuery(
    {
      queryKey: ["creditData", adminId],
      queryFn: () => FetchService(adminId),
    },
    {
      enabled: !!adminId,
    }
  );

  if (creditLoading || userInfoLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100px",
          marginLeft: 50,
          fontSize: 20,
        }}
      >
        Loading...
      </div>
    );
  }

  const ServiceKeyField = () => {
    return (
      <div style={boxStyle}>
        <div className="rectangle" style={rectangleStyle}>
          <div style={apiKeyTextWrapperStyle}>
            {creditsVisible ? (
              <span style={{ fontSize: 12 }}>
                {creditDataQuery?.data?.data?.api_key}
              </span>
            ) : (
              "**************************"
            )}
            <span
              style={{
                marginLeft: creditsVisible ? "7px" : "79px",
                cursor: "pointer",
              }}
              onClick={() => copyItem()}
            >
              <AiOutlineCopy size={16} color={copied ? "green" : "black"} />
            </span>
            <span
              onClick={() => makeVisible()}
              style={{ marginLeft: 0, cursor: "pointer" }}
            >
              {creditsVisible ? (
                <AiOutlineEyeInvisible size={15} />
              ) : (
                <span style={{ marginLeft: 0 }}>
                  <AiOutlineEye size={15} />
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div style={{ marginLeft: 15 }}>
        <HeaderComponent title="CREDITS SYSTEM" />
      </div>
      <TabButton description={"Buy Credits"} />

      {creditDataQuery?.data?.success ? (
        <div>
          <div style={{ height: "90vh", marginTop: 100, marginLeft: 30 }}>
            {Object.entries(fields).map(([key, value]) => (
              <div style={{ height: 70 }} key={key}>
                <h3
                  style={{
                    marginBottom: 5,
                    fontSize: 17,
                    fontWeight: "normal",
                    height: 25,
                  }}
                >
                  {value}:
                </h3>
                {value === "Service Key" ? (
                  <ServiceKeyField />
                ) : (
                  <div style={boxStyle}>
                    <div className="rectangle" style={rectangleStyle}>
                      <div style={textWrapperStyle}>
                        {value === "Credit"
                          ? creditDataQuery?.data?.data?.total_credits
                          : value === "Status"
                          ? creditDataQuery?.data?.data?.is_active
                            ? "Active"
                            : "Inactive"
                          : null}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          style={{ marginTop: 150, display: "flex", flexDirection: "column" }}
        >
          <img src={Logo} style={{ width: 100, marginLeft: 140 }} />
          <p style={{ marginLeft: 57, color: "#D5D4D4" }}>
            You have not created a service key
          </p>
        </div>
      )}
    </div>
  );
}

const boxStyle = {
  height: "37px",
  width: "310px",
  marginTop: "0px",
  marginRight: "10px",
  marginLeft: "0px",
};

const rectangleStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "100px",
  boxShadow: "3px 3px 7px 0px #9C9C9C7A inset",
  height: "37px",
  width: "310px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const textWrapperStyle = {
  color: "#000000",
  fontSize: "13px",
  fontWeight: 300,
  height: "15px",
  letterSpacing: "0",
  lineHeight: "normal",
  marginRight: "auto",
  marginLeft: "20px",
};

const apiKeyTextWrapperStyle = {
  color: "#000000",
  width: "90%",
  fontSize: "13px",
  fontWeight: 300,
  height: "15px",
  // letterSpacing: "0",
  lineHeight: "normal",
  marginRight: "auto",
  marginLeft: "20px",
};
