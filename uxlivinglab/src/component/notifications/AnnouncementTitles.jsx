import styles from "./styles.module.css";

function AnnouncementTitles(props) {
  return (
    <h3 style={{ color: "white" }} className={styles.badge}>
      {props.message}
    </h3>
  );
}

export default AnnouncementTitles;
