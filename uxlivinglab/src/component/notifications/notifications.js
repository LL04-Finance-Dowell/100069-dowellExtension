import React from "react";
import styles from "./styles.module.css";
import { useStateContext } from "../../contexts/ContextProvider";
import AnnouncementList from "./AnnouncementList";
import { useState } from "react";

export default function Notifications() {
  const { sessionId } = useStateContext();
  const [showAnnouncementList, setShowAnnouncementList] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1>Notifications</h1>
      </div>
      <div className={styles.announcementContainer}>
        {showAnnouncementList ? (
          <AnnouncementList />
        ) : (
          <>
            <h3>Announcements</h3>
            <div className={styles.announcement}>
              {sessionId && (
                <>
                  <div className={styles.announcementContent}>
                    <p>Team Member (10)</p>
                  </div>

                  <div className={styles.announcementContent}>
                    <p>User (10)</p>
                  </div>
                  <div className={styles.announcementContent}>
                    <p>UX Living Lab (10)</p>
                  </div>
                </>
              )}
              <div className={styles.announcementContent}>
                <p>Public (10)</p>
              </div>
            </div>
          </>
        )}
      </div>
      {/* tasks */}
      {sessionId && (
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
