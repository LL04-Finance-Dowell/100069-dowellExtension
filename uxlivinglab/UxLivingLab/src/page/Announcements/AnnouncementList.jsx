/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useParams } from "react-router";
import { useQueries, useQuery } from "react-query";
import HeaderComponent from "../../components/HeaderComponent";
import { useNavigate } from "react-router";
import FetchPublicAnnouncements from "../../lib/api/fetchPublicAnnouncement";
import FetchMemberAnnouncements from "../../lib/api/fetchMemberAnnouncement";
import FetchUserAnnouncements from "../../lib/api/fetchUserAnnouncement";
import FetchUserInfo from "../../lib/api/fetchUserInfo";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useStateContext } from "../../Contexts/Context";

export default function AnnouncementList() {
  const { sessionId } = useStateContext();
  const { title } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState("");

  const handleClick = (text) => {
    setDetail(text);
  };
  const { data } = useQuery({
    queryKey: "userInfo",
    queryFn: async () => await FetchUserInfo(sessionId),
  });

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

  function AnnouncementLister({ title }) {
    return title ? (
      (title === "Pulic"
        ? publicAnnouncementQuery
        : title === "User"
        ? userAnnouncementQuery
        : title === "Member"
        ? memberAnnouncementQuery
        : publicAnnouncementQuery
      ).data?.data?.data?.map((value) => (
        <div
          onClick={() => handleClick(value.announcement.description)}
          key={value._id}
        >
          <Link
            state={{ data: value.announcement }}
            to={`/announcements/${title}/${value._id}`}
            style={{ textDecoration: "none" }}
          >
            <div style={titleTextWrapperStyle} key={value}>
              {value.announcement.title}
            </div>
          </Link>
        </div>
      ))
    ) : (
      <div style={descriptionTextWrapperStyle}>{description}</div>
    );
  }

  return (
    <div >
      <div>
        <HeaderComponent
          title="Notification"
          type="announcements"
          navigation={() => navigate(-1)}
        />
      </div>
      <div style={{ marginLeft: 15 }}>
      <div style={headerLabelStyle}>
        <div style={headerTextWrapperStyle}>{title}</div>
      </div>

      {title == "Public" || title === "Member" || title === "User" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: 15,
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          <AnnouncementLister title={title} />
        </div>
      ) : null}
      </div>
    </div>
  );
}

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
