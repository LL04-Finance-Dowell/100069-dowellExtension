import styles from "./styles.module.css";
import { useState } from "react";
import { useEffect } from "react";

const UserProfile = ({ data }) => {
  const [isShown, setIsShown] = useState(false);
  // const [changes, setChanges] = useState({
  //   name: "component",
  //   show1: true,
  //   show2: false,
  //   show3: false,
  //   show4: false,
  //   show5: false,
  //   show6: false,
  //   show7: false,
  //   show8: false,
  //   show9: false,
  //   show10: false,
  //   show11: false,
  //   show12: false,
  //   show13: false,
  // });
  useEffect(() => {
    if (data.name == "01. My Profile") {
      setIsShown("true");
    }
  }, []);

  // const handleClicked = (show) => {
  //   setChanges([...changes, [show] : !isShown])
  // }

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
