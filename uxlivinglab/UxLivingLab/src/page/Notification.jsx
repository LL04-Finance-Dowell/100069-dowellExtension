import { useQueries, useQuery } from "react-query";
import FetchPublicAnnouncements from "../lib/api/fetchPublicAnnouncement";
import FetchMemberAnnouncements from "../lib/api/fetchMemberAnnouncement";
import FetchUserAnnouncements from "../lib/api/fetchUserAnnouncement";
import HeaderComponent from "../components/HeaderComponent";
import NotificationSkeleton from "../components/NotificationSkeleton";
import { useStateContext } from "../Contexts/Context";
import FetchUserInfo from "../lib/api/fetchUserInfo";
import { useState } from "react";

export default function Notification() {
  const [title,setTitle] = useState("Announcement");
  const { sessionId } = useStateContext();
  const { data } = useQuery({
    queryKey: "userInfo",
    queryFn: async () => await FetchUserInfo(sessionId),
  });
  const handleClick = (title) =>{
    setTitle(title)
  }

  const queries = [
    {
      queryKey: ["publicAnnouncement"],
      queryFn: async () =>
        await FetchPublicAnnouncements(data?.data?.userinfo.userID),
    },
    {
      queryKey: ["memberAnnouncement"],
      queryFn: async () =>
        await FetchMemberAnnouncements(data?.data?.userinfo.userID),
    },
    {
      queryKey: ["userAnnouncement"],
      queryFn: async () =>
        await FetchUserAnnouncements(data?.data?.userinfo.userID),
    },
  ];
  const [
    publicAnnouncementQuery,
    memberAnnouncementQuery,
    userAnnouncementQuery,
  ] = useQueries(queries);
  if (
    publicAnnouncementQuery.isLoading ||
    memberAnnouncementQuery.isLoading ||
    userAnnouncementQuery.isLoading
  ) {
    return <NotificationSkeleton />;
  }

  return (
    <div style={{ marginLeft: 15 }}>
      <HeaderComponent title="Notification" />
      <div style={headerLabelStyle}>
        <div style={headerTextWrapperStyle}>{title}</div>
      </div>
      {sessionId && (
        title=="Announcement"?
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 15,
            cursor:"pointer"
          }}
        >
          <div style={{ height: 50, width: 150 }}>
            <div style={containerStyle}>
              <div style={textWrapperStyle}>
                Team Member ({memberAnnouncementQuery.data.data.data.length})
              </div>
            </div>
          </div>
          <div style={{ height: 50, width: 150 }}>
            <div style={containerStyle}>
              <div style={textWrapperStyle}>
                User ({userAnnouncementQuery.data.data.data.length})
              </div>
            </div>
          </div>
          <div style={{ height: 50, width: 150 }}>
            <div style={containerStyle}>
              <div style={textWrapperStyle}>UX Living Lab (0)</div>
            </div>
          </div>
          <div style={{ height: 50, width: 150 }}>
            <div style={containerStyle}>
              <div style={textWrapperStyle} onClick={()=>handleClick("Public")}>
                Public ({publicAnnouncementQuery.data.data.data.length})
              </div>
            </div>
          </div>
        </div>:<div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    gap: 15,
                    cursor:"pointer"
                  }}
        >{console.log(publicAnnouncementQuery.data.data.data[1].announcement.title)}</div>
      )}
    </div>
  );
}

const containerStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  boxShadow:
    "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
  height: "47px",
  width: "149px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const textWrapperStyle = {
  color: "#005734",
  fontSize: "10px",
  fontWeight: 500,
  height: "15px",
  letterSpacing: "0",
  lineHeight: "normal",
};

const headerLabelStyle = {
  height: "40px",
  width: "170px",
  marginTop: 50,
  marginBottom: 10,
};

const headerTextWrapperStyle = {
  color: "#005734",
  fontFamily: '"Poppins-Regular", Helvetica',
  fontSize: "20px",
  fontWeight: "400",
  height: "50px",
  letterSpacing: "0",
  lineHeight: "normal",
};
