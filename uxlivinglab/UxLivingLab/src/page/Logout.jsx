import { useQuery } from "react-query";
import HeaderComponent from "../components/HeaderComponent";
import TabButton from "../components/TabButton";
import FetchUserInfo from "../lib/api/fetchUserInfo";
import useStore from "../hooks/use-hook";
import { useStateContext } from "../Contexts/Context";

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
    <div
      style={{
        overflowY: "scroll",
      }}
    >
      <HeaderComponent title="Profile" />
      <div
        style={{
          marginLeft: 15,
          marginBottom: "auto",
        }}
      >
        {userInfo ? (
          <div style={{ marginTop: 8, marginLeft: 10 }}>
            {Object.entries(fields).map(([key, value]) => (
              <div style={{ height: 55 }} key={key}>
                <h3
                  style={{
                    marginBottom: 5,
                    fontSize: 17,
                    fontWeight: "normal",
                    height: 20,
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
            <div style={{ marginTop: 20, marginLeft: 50 }}>
              <a
                href="https://100014.pythonanywhere.com/en/sign-out"
                target="_blank"
                rel="noreferrer"
              >
                <TabButton description={"Logout"} />
              </a>
            </div>
          </div>
        ) : (
          <div style={{}}>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}

const boxStyle = {
  height: "35px",
  width: "310px",
  marginTop: "0px",
  marginRight: "10px",
  marginLeft: "0px",
};

const rectangleStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "100px",
  boxShadow: "3px 3px 7px 0px #9C9C9C7A inset",
  height: "30px",
  width: "310px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const textWrapperStyle = {
  color: "#000000",
  fontSize: "13px",

  fontWeight: 500,
  height: "15px",
  letterSpacing: "0",
  lineHeight: "normal",
  marginRight: "auto",
  marginLeft: "20px",
};
