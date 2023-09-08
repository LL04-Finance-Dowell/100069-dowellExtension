import { useQueries, useQuery } from "react-query";
import HeaderComponent from "../components/HeaderComponent";
import TabButton from "../components/TabButton";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import FetchUserInfo from "../lib/api/fetchUserInfo";
import { useStateContext } from "../contexts/Context";
import useStore from "../hooks/use-hook";

export default function Logout() {
  const fields = ["Username", "Email", "Country", "Date & Time", "Workspace"];
  const { sessionId } = useStateContext();
  const { data } = useQuery({
    queryKey: "logout",
    queryFn: async () => await FetchUserInfo(sessionId),
  });

  const org = useStore((state) => state.org);
  const userInfo = data?.data.userinfo;
  return (
    <div style={{ marginLeft: 15 }}>
      <HeaderComponent title="Profile" />
      {userInfo ? (
        <div style={{ height: "88vh", marginTop: 48, marginLeft: 10 }}>
          {Object.entries(fields).map(([key, value]) => (
            <div style={{ height: 60 }} key={key}>
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
              <div style={boxStyle}>
                <div className="rectangle" style={rectangleStyle}>
                  <div style={textWrapperStyle}>
                    {value === "Username"
                      ? userInfo?.username
                      : value === "Email"
                      ? userInfo?.email
                      : value === "Country"
                      ? userInfo?.country
                      : value === "Date & Time"
                      ? userInfo?.dowell_time
                      : value === "Workspace"
                      ? org
                      : // : value === "Org_id"
                        //   ? selectedOrgId
                        null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ height: "90vh", marginTop: 34, marginLeft: 30 }}>
          <p>Loading...</p>
        </div>
      )}

      <div>
        <TabButton description={"Logout"} />
      </div>
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
