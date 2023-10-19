import { useQueries, useQuery } from "react-query";
import FetchPublicAnnouncements from "../lib/api/fetchPublicAnnouncement";
import FetchMemberAnnouncements from "../lib/api/fetchMemberAnnouncement";
import FetchUserAnnouncements from "../lib/api/fetchUserAnnouncement";
import HeaderComponent from "../components/HeaderComponent";
import NotificationSkeleton from "../components/NotificationSkeleton";
import FetchUserInfo from "../lib/api/fetchUserInfo";
import { useState } from "react";
import { useStateContext } from "../contexts/Context";
import { Link } from "react-router-dom";

export default function Notification() {
  const [title, setTitle] = useState("Announcement");
  const [islist, setList] = useState(true);
  const [description, setDescription] = useState("");
  const { sessionId } = useStateContext();
  const { data } = useQuery({
    queryKey: "userInfo",
    queryFn: async () => await FetchUserInfo(sessionId),
  });
  const handleClick = (title) => {
    setTitle(title);
  };

  const handleDescriptionClick = (description) => {
    setList(false);
    setDescription(description);
  };
  function revertTitle() {
    setTitle("Announcement");
    setList(true);
  }
  const queries = [
    {
      queryKey: ["publicAnnouncement"],
      queryFn: async () =>
        await FetchPublicAnnouncements(data?.data?.userinfo?.userID),
    },
    {
      queryKey: ["memberAnnouncement"],
      queryFn: async () =>
        await FetchMemberAnnouncements(data?.data?.userinfo?.userID),
    },
    {
      queryKey: ["userAnnouncement"],
      queryFn: async () =>
        await FetchUserAnnouncements(data?.data?.userinfo?.userID),
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

  // eslint-disable-next-line react/prop-types
  function AnnouncementList({ title }) {
    return islist && title ? (
      (title === "Pulic"
        ? publicAnnouncementQuery
        : title === "User"
        ? userAnnouncementQuery
        : title === "Team Member"
        ? memberAnnouncementQuery
        : publicAnnouncementQuery
      ).data.data.data?.map((value) => (
        <div
          style={titleTextWrapperStyle}
          onClick={() => handleDescriptionClick(value.announcement.description)}
          key={value}
        >
          {value.announcement.title}
        </div>
      ))
    ) : (
      <div style={descriptionTextWrapperStyle}>{description}</div>
    );
  }

  return (
    <div>
      <div onClick={() => revertTitle()}>
        <HeaderComponent title="Notification" />
      </div>
      <div  style={{ marginLeft: 15 }}>
      <div style={headerLabelStyle}>
        <div style={headerTextWrapperStyle}>{title}</div>
      </div>
      {title &&
        (title == "Announcement" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 15,
              cursor: "pointer",
            }}
          >
            <div style={{ height: 50, width: 150 }}>
              <Link
                to={`/announcements/${"Member"}`}
                style={{textDecoration:"none"}}
              >
              <div
                style={containerStyle}
              >

                <div style={textWrapperStyle}>
                  Team Member ({memberAnnouncementQuery.data.data.data.length})
                </div>
              </div>
            </Link>
            </div>
            <div style={{ height: 50, width: 150 }}>
                <Link 
                  to={`/announcements/${"User"}`}
                  style={{textDecoration:"none"}}>
                <div
                style={containerStyle} 
              >
                <div style={textWrapperStyle}>
                  User ({userAnnouncementQuery.data.data.data.length})
                </div>
                </div>
                </Link>
            </div>
            <div style={{ height: 50, width: 150 }}>
              <div style={containerStyle}>
                <div style={textWrapperStyle}>UX Living Lab (0)</div>
              </div>
            </div>
            <div style={{ height: 50, width: 150 }}>
              <Link 
                to={`/announcements/${"Public"}`}
                style={{textDecoration:"none"}}>
              <div
                style={containerStyle} 
              >
                <div style={textWrapperStyle}>
                  Public ({publicAnnouncementQuery.data.data.data.length})
                </div>
              </div>
              </Link>
            </div>
          </div>
        ) : title == "Public" || title === "Team Member" || title === "User" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              gap: 15,
              cursor: "pointer",
            }}
          >
            {/* {title==="Public"?(publicAnnouncementQuery.data.data.data?.map(
        (value)=> (<div>
            {console.log(value.announcement.title)}
        </div>)
      )):null} */}
            <AnnouncementList title={title} />
          </div>
        ) : null)}
        </div>
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
  fontSize: "12px",
  fontWeight: 500,
  height: "15px",
  letterSpacing: "0",
  lineHeight: "normal",
};

const titleTextWrapperStyle = {
  color: "#005734",
  backgroundColor: "#ffffff",
  fontSize: "12px",
  borderRadius: "10px",
  boxShadow:
    "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
  padding: "10px 10px 10px 10px",
  width: "310px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const descriptionTextWrapperStyle = {
  color: "#005734",
  backgroundColor: "#ffffff",
  fontSize: "11px",
  borderRadius: "10px",
  boxShadow:
    "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
  padding: "10px 10px 10px 10px",
  width: "310px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
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
