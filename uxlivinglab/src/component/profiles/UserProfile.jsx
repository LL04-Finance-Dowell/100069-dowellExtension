import styles from "./styles.module.css";
import { useState } from "react";
import { useEffect } from "react";

const UserProfile = ({ data }) => {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    if (data.name == "01. My Profile") {
      setIsShown("true");
    }
  }, []);

  return (
    <>
      <div
        className={styles.elementContainer}
        onClick={() => setIsShown(!isShown)}
      >
        <i
          aria-hidden="true"
          className={
            isShown ? "fas inc fa-angles-up" : "fas inc fa-angles-down"
          }
          style={{ marginTop: 15, marginLeft: 5 }}
        ></i>

        <p style={{ color: isShown && "#61ce70", marginLeft: 15 }}>
          {data.name}
        </p>
      </div>

      <div className={isShown ? styles.spaceShow : styles.spaceHide}></div>
    </>
  );
};
export default UserProfile;
