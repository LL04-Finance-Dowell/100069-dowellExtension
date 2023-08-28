import React from "react";
import styles from "./styles.module.css";

function AnnouncementDetail() {
  return (
    <div className={styles.announcementDetail}>
      <p className={styles.detail}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
}

function AnnouncementList() {
  return (
    <>
      <div className={styles.announcementDetail}>
        <p className={styles.title}>Announcement 1</p>
      </div>
      <div className={styles.announcementDetail}>
        <p className={styles.title}>Announcement 1</p>
      </div>
    </>
  );
}

export default function Announcement() {
  const [detail, setDetail] = React.useState(true);

  return (
    <div>
      <h3>Public</h3>
      {detail ? <AnnouncementDetail /> : <AnnouncementList />}
    </div>
  );
}
