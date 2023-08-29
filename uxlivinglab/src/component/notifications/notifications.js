import styles from "./styles.module.css";
import { useStateContext } from "../../contexts/ContextProvider";
import AnnouncementList from "./AnnouncementList";
import { useState, useEffect } from "react";
import FetchPublicAnnouncements from "../../API/FetchPublicAnnouncements";
import FetchMemberAnnouncements from "../../API/FetchMemberAnnouncements";
import FetchUserAnnouncements from "../../API/FetchUserAnnouncements";
import LoadingSpinner from "../spinner/spinner";

export default function Notifications() {
  const { sessionId, userInfo, selectedOrgId } = useStateContext();
  const [showAnnouncementList, setShowAnnouncementList] = useState(false);
  const [publicAnnouncementsData, setPublicAnnouncements] = useState();
  const [memberAnnouncementsData, setMemberAnnouncements] = useState();
  const [userAnnouncementsData, setUserAnnouncements] = useState();
  const [showProducts, setShowProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const memberData = await FetchMemberAnnouncements(
          userInfo.userID,
          selectedOrgId
        );
        const publicData = await FetchPublicAnnouncements(userInfo.userID);
        const userData = await FetchUserAnnouncements(
          userInfo.userID,
          selectedOrgId
        );
        setPublicAnnouncements(publicData.data["data"]);
        setMemberAnnouncements(memberData.data["data"]);
        setUserAnnouncements(userData.data["data"]);
        setLoading(false);
      } catch (error) {
        console.log("fetching announcement error", error);
      }
    };
    fetchAnnouncements();
  }, [userInfo.userID, selectedOrgId]);

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <LoadingSpinner />
      </div>
    );

  const handleClick = ({ data, title }) => {
    if (data?.length === 0) return;
    setShowProducts({
      title,
      data,
    });
    setShowAnnouncementList(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1>Notifications</h1>
      </div>
      <div className={styles.announcementContainer}>
        {showAnnouncementList ? (
          <AnnouncementList
            onClick={() => setShowAnnouncementList(false)}
            showProducts={showProducts}
          />
        ) : (
          <>
            <h3>Announcements</h3>
            <div className={styles.announcement}>
              {sessionId && (
                <>
                  <div
                    className={styles.announcementContent}
                    onClick={() =>
                      handleClick({
                        data: memberAnnouncementsData,
                        title: "Team Member",
                      })
                    }
                  >
                    <p>Team Member ({memberAnnouncementsData?.length})</p>
                  </div>

                  <div
                    className={styles.announcementContent}
                    onClick={() =>
                      handleClick({
                        data: userAnnouncementsData,
                        title: "User",
                      })
                    }
                  >
                    <p>User ({userAnnouncementsData?.length})</p>
                  </div>
                  <div className={styles.announcementContent}>
                    <p>UX Living Lab (0)</p>
                  </div>
                </>
              )}
              <div
                className={styles.announcementContent}
                onClick={() =>
                  handleClick({
                    data: publicAnnouncementsData,
                    title: "Public",
                  })
                }
              >
                <p>Public ({publicAnnouncementsData?.length})</p>
              </div>
            </div>
          </>
        )}
      </div>
      {/* tasks */}
      {sessionId && !showAnnouncementList && (
        <div className={styles.announcementContainer}>
          <h3>Tasks</h3>
          <div className={styles.announcement}>
            <div className={styles.announcementContent}>
              <p>Workflow AI (10)</p>
            </div>
            <div className={styles.announcementContent}>
              <p>Digital Queue (10)</p>
            </div>
            <div className={styles.announcementContent}>
              <p>UX Live (10)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
