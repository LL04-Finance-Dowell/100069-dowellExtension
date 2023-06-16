import styles from "./styles.module.css";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";
import ChatTitles from "./ChatTitles";
import AnnouncementTitles from "./AnnouncementTitles";
import UpdateNotifications from "../../API/UpdateNotifications";

function Notifications() {
  const {
    show,
    handleShow,
    notifications,
    announcements,
    userInfo,
    sessionId,
  } = useStateContext();
  const user = userInfo.username;
  const product = "Workflow AI";

  const allNotifications = Array.from(new Set(notifications));

  const notificationNumber = allNotifications.filter(
    (datum) =>
      datum['notification'].seen === false &&
      datum['notification'].username === user &&
      datum['notification'].productName === product
  ).length;

  const markSeenClick = async (pk) => {
    try {
      await UpdateNotifications(pk);
    } catch (e) {
      console.log(e);
    }
  };

  const timeOut = (pk, time) => {
    setTimeout(() => markSeenClick(pk), time * 3600000);
  };

  function timeOutFunction(ID, duration) {
    try {
      if (parseInt(duration) > 0) {
        timeOut(ID, parseInt(duration) * 36000);
      } else {
        timeOut(ID, parseInt(1) * 36000);
      }
    } catch (e) {
      timeOut(ID, parseInt(1) * 36000);
    }
  }

  const redirectClick = (data) => {
    window.open(`${data}`);
  };

  const redirectnotification = (data) => {
    window.open(`${data}`);
  };

  const [arrows, setaArrows] = useState({
    showArrow1: true,
    showArrow2: false,
    showArrow3: false,
    showArrow4: false,
    showArrow5: false,
    showArrow6: false,
    showArrow7: false,
  });

  function UserAnnouncements() {
    return (
      <div>
        {announcements
          ?.filter((data) => data['announcement'].member_type === "User")
          .map((data, index) => (
            // remember to filter based on product name and seen status before pushing (Workflow AI)
            <div style={{ display: "flex" }}>
              {/* <p
                      style={{
                        border: "3px solid white",
                        padding: "1px 5px 5px 5px",
                        fontSize: 14,
                        height: 15,
                        marginBottom: 3,
                        marginTop: 23,
                        marginLeft: 5,
                        borderRadius: 100,
                        color: "white",
                        backgroundColor: "black",
                      }}
                    >
                      {index + 1}
                    </p> */}

              <h3
                style={{
                  backgroundColor: "rgb(74, 162, 74)",
                  borderRadius: 20,
                  width: 200,
                  color: "white",
                  marginLeft: 35,
                  // height: 200,
                  padding: 8,
                  marginBottom: 0,
                  cursor: "pointer",
                }}
              >
                {data['announcement'].description}
              </h3>
            </div>
          ))}{" "}
      </div>
    );
  }

  function MemberAnnouncements() {
    return (
      <div>
        {announcements
          ?.filter((data) => data['announcement'].member_type === "Member")
          .map((data, index) => (
            // remember to filter based on product name and seen status before pushing (Workflow AI)
            <div style={{ display: "flex" }}>
              {/* <p
                      style={{
                        border: "3px solid white",
                        padding: "1px 5px 5px 5px",
                        fontSize: 14,
                        height: 15,
                        marginBottom: 3,
                        marginTop: 23,
                        marginLeft: 5,
                        borderRadius: 100,
                        color: "white",
                        backgroundColor: "black",
                      }}
                    >
                      {index + 1}
                    </p> */}

              <h3
                style={{
                  backgroundColor: "rgb(74, 162, 74)",
                  borderRadius: 20,
                  width: 200,
                  color: "white",
                  marginLeft: 35,
                  // height: 200,
                  padding: 8,
                  marginBottom: 0,
                  cursor: "pointer",
                }}
              >
                {data['announcement'].description}
              </h3>
            </div>
          ))}{" "}
      </div>
    );
  }

  function PublicAnnouncements() {
    return (
      <div>
        {announcements
          ?.filter((data) => data['announcement'].member_type === "Public")
          .map((data, index) => (
            // remember to filter based on product name and seen status before pushing (Workflow AI)
            <div style={{ display: "flex" }}>
              {/* <p
                      style={{
                        border: "3px solid white",
                        padding: "1px 5px 5px 5px",
                        fontSize: 14,
                        height: 15,
                        marginBottom: 3,
                        marginTop: 23,
                        marginLeft: 5,
                        borderRadius: 100,
                        color: "white",
                        backgroundColor: "black",
                      }}
                    >
                      {index + 1}
                    </p> */}

              <h3
                style={{
                  backgroundColor: "rgb(74, 162, 74)",
                  borderRadius: 20,
                  width: 200,
                  color: "white",
                  marginLeft: 35,
                  // height: 200,
                  padding: 8,
                  marginBottom: 0,
                  cursor: "pointer",
                }}
              >
                {data['announcement'].description}
              </h3>
            </div>
          ))}{" "}
      </div>
    );
  }

  const MessageContent = ({ data }) => {
    const markSeenClick = async (pk) => {
      changeMarked();
      try {
        await UpdateNotifications(pk);
      } catch (e) {
        console.log(e);
      }
    };

    // <p style={{position:'absolute',border:"3px solid white",padding:"2px 8px 8px 8px",height:15,marginBottom:43,marginLeft:50,borderRadius:100,color:'white',backgroundColor:"#ff0000"}}>
    // {}</p>

    function changeMarked() {
      setMarked(false);
    }
    const [marked, setMarked] = useState(true);
    const [isOnMessage, flipIsOnMessage] = useState(false);
    const [userClicked, setClick] = useState(false);
    return (
      <div className={styles.messages}>
        {marked ? (
          <div>
            <div
              className={styles.badges}
              onClick={() => redirectnotification(data['notification'].link)}
            >
              <ChatTitles title={data['notification'].title} />
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  const handleArrows = (show, bool) => {
    setaArrows({ [show]: bool });
  };

  return (
    <>
      <div className={styles.items}>
        <button className={styles.logout}>
          <i
            style={{
              fontSize: 20,
              color: "#ffffff",
              fontStyle: "normal",
              fontWeight: 700,
            }}
          >
            Notifications
          </i>
        </button>
        {sessionId ? (
          <div className={styles.all}>
            <p className={styles.texts}>Announcements</p>

            <div className={styles.allBorder}>
              <div
                className={styles.elementContainer}
                onClick={() => handleArrows("showArrow1", !arrows.showArrow1)}
              >
                <i
                  aria-hidden="true"
                  className={
                    arrows.showArrow1
                      ? "fas fa-angles-up"
                      : "fas fa-angles-down"
                  }
                  style={{ marginTop: 15, marginLeft: 5 }}
                ></i>

                <p
                  style={{
                    color: arrows.showArrow1 && "#61ce70",
                    marginLeft: 15,
                  }}
                >
                  Team Member (
                  {
                    announcements?.filter((data) => data['announcement'].member_type == "Member")
                      .length
                  }
                  )
                </p>
              </div>
              <div
                className={
                  arrows.showArrow1 ? styles.spaceShow : styles.spaceHide
                }
              >
                <MemberAnnouncements />
              </div>
              <div
                className={styles.elementContainer}
                onClick={() => handleArrows("showArrow2", !arrows.showArrow2)}
              >
                <i
                  aria-hidden="true"
                  className={
                    arrows.showArrow2
                      ? "fas fa-angles-up"
                      : "fas fa-angles-down"
                  }
                  style={{ marginTop: 15, marginLeft: 5 }}
                ></i>

                <p
                  style={{
                    color: arrows.showArrow2 && "#61ce70",
                    marginLeft: 15,
                  }}
                >
                  User (
                  {
                    announcements?.filter((data) => data['announcement'].member_type == "User")
                      .length
                  }
                  )
                </p>
              </div>

              <div
                className={
                  arrows.showArrow2 ? styles.spaceShow : styles.spaceHide
                }
              >
                <UserAnnouncements />
              </div>

              <div
                className={styles.elementContainer}
                onClick={() => handleArrows("showArrow3", !arrows.showArrow3)}
              >
                <i
                  aria-hidden="true"
                  className={
                    arrows.showArrow3
                      ? "fas fa-angles-up"
                      : "fas fa-angles-down"
                  }
                  style={{ marginTop: 15, marginLeft: 5 }}
                ></i>

                <p
                  style={{
                    color: arrows.showArrow3 && "#61ce70",
                    marginLeft: 15,
                  }}
                >
                  Public (
                  {
                    announcements?.filter((data) => data['announcement'].member_type == "Public")
                      .length
                  }
                  )
                </p>
              </div>
              <div
                className={
                  arrows.showArrow3 ? styles.spaceShowContent : styles.spaceHide
                }
              >
                <PublicAnnouncements />
              </div>

              <div
                className={styles.elementContainer}
                onClick={() => handleArrows("showArrow4", !arrows.showArrow4)}
              >
                <i
                  aria-hidden="true"
                  className={
                    arrows.showArrow4
                      ? "fas fa-angles-up"
                      : "fas fa-angles-down"
                  }
                  style={{ marginTop: 15, marginLeft: 5 }}
                ></i>

                <p
                  style={{
                    color: arrows.showArrow4 && "#61ce70",
                    marginLeft: 15,
                  }}
                >
                  UX Living Lab (0)
                </p>
              </div>

              <div
                className={
                  arrows.showArrow4 ? styles.spaceShow : styles.spaceHide
                }
              ></div>
            </div>
            <p className={styles.texts}>Tasks</p>

            <div className={styles.allBorder}>
              <div
                className={styles.elementContainer}
                onClick={() => handleArrows("showArrow5", !arrows.showArrow5)}
              >
                <i
                  aria-hidden="true"
                  className={
                    arrows.showArrow5
                      ? "fas fa-angles-up"
                      : "fas fa-angles-down"
                  }
                  style={{ marginTop: 15, marginLeft: 5 }}
                ></i>

                <p
                  style={{
                    color: arrows.showArrow5 && "#61ce70",
                    marginLeft: 15,
                  }}
                >
                  Workflow AI ({notificationNumber})
                </p>
              </div>
              <div
                className={
                  arrows.showArrow5 ? styles.spaceShowContent : styles.spaceHide
                }
              >
                {allNotifications
                  .filter(
                    (datum) =>
                      datum['notification'].seen === false &&
                      datum['notification'].username === user &&
                      datum['notification'].productName === product
                  )
                  .map((data, index) => (
                    // remember to filter based on product name and seen status before pushing (Workflow AI)
                    <div style={{ display: "flex" }}>
                      <p
                        style={{
                          border: "3px solid white",
                          padding: "1px 5px 5px 5px",
                          fontSize: 14,
                          height: 15,
                          marginBottom: 3,
                          marginTop: 23,
                          marginLeft: 5,
                          borderRadius: 100,
                          color: "white",
                          backgroundColor: "black",
                        }}
                      >
                        {index + 1}
                      </p>

                      <MessageContent data={data} key={index} />
                    </div>
                  ))}
              </div>
              <div
                className={styles.elementContainer}
                onClick={() => handleArrows("showArrow6", !arrows.showArrow6)}
              >
                <i
                  aria-hidden="true"
                  className={
                    arrows.showArrow6
                      ? "fas fa-angles-up"
                      : "fas fa-angles-down"
                  }
                  style={{ marginTop: 15, marginLeft: 5 }}
                ></i>

                <p
                  style={{
                    color: arrows.showArrow6 && "#61ce70",
                    marginLeft: 15,
                  }}
                >
                  Digital Queue (0)
                </p>
              </div>

              <div
                className={
                  arrows.showArrow6 ? styles.spaceShow : styles.spaceHide
                }
              ></div>

              <div
                className={styles.elementContainer}
                onClick={() => handleArrows("showArrow7", !arrows.showArrow7)}
              >
                <i
                  aria-hidden="true"
                  className={
                    arrows.showArrow7
                      ? "fas fa-angles-up"
                      : "fas fa-angles-down"
                  }
                  style={{ marginTop: 15, marginLeft: 5 }}
                ></i>

                <p
                  style={{
                    color: arrows.showArrow7 && "#61ce70",
                    marginLeft: 15,
                  }}
                >
                  UX Live (0)
                </p>
              </div>

              <div
                className={
                  arrows.showArrow7 ? styles.spaceShow : styles.spaceHide
                }
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "100%",
                marginLeft: "5px",
                marginTop: "20px",
              }}
            >
              <RxCross2
                size={24}
                color="white"
                style={{
                  cursor: "pointer",
                  backgroundColor: "red",
                  borderRadius: 20,
                  marginTop: 4,
                  marginBottom: 8,
                  fontWeight: 1000,
                }}
                onClick={() => handleShow(!show)}
              />
            </div>
          </div>
        ) : (
          <div className={styles.all}>
            <p className={styles.texts}>Announcements</p>

            <div className={styles.allBorder}>
              <div
                className={styles.elementContainer}
                onClick={() => handleArrows("showArrow3", !arrows.showArrow3)}
              >
                <i
                  aria-hidden="true"
                  className={
                    arrows.showArrow3
                      ? "fas fa-angles-up"
                      : "fas fa-angles-down"
                  }
                  style={{ marginTop: 15, marginLeft: 5 }}
                ></i>

                <p
                  style={{
                    color: arrows.showArrow3 && "#61ce70",
                    marginLeft: 15,
                  }}
                >
                  Public (
                  {
                    announcements?.filter((data) => data['announcement'].member_type == "Public")
                      .length
                  }
                  )
                </p>
              </div>
              <div
                className={
                  arrows.showArrow3 ? styles.spaceShowContent : styles.spaceHide
                }
              >
                <PublicAnnouncements />
              </div>
              <div
                className={styles.elementContainer}
                onClick={() => handleArrows("showArrow2", !arrows.showArrow2)}
              >
                <i
                  aria-hidden="true"
                  className={
                    arrows.showArrow2
                      ? "fas fa-angles-up"
                      : "fas fa-angles-down"
                  }
                  style={{ marginTop: 15, marginLeft: 5 }}
                ></i>

                <p
                  style={{
                    color: arrows.showArrow2 && "#61ce70",
                    marginLeft: 15,
                  }}
                >
                  User (
                  {
                    announcements?.filter((data) => data['announcement'].member_type == "User")
                      .length
                  }
                  )
                </p>
              </div>
              <div
                className={
                  arrows.showArrow2 ? styles.spaceShow : styles.spaceHide
                }
              >
                <UserAnnouncements />
              </div>

              <div
                className={styles.elementContainer}
                onClick={() => handleArrows("showArrow4", !arrows.showArrow4)}
              >
                <i
                  aria-hidden="true"
                  className={
                    arrows.showArrow4
                      ? "fas fa-angles-up"
                      : "fas fa-angles-down"
                  }
                  style={{ marginTop: 15, marginLeft: 5 }}
                ></i>

                <p
                  style={{
                    color: arrows.showArrow4 && "#61ce70",
                    marginLeft: 15,
                  }}
                >
                  UX Living Lab (0)
                </p>
              </div>

              <div
                className={
                  arrows.showArrow4 ? styles.spaceShow : styles.spaceHide
                }
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "100%",
                marginLeft: "5px",
                marginTop: "20px",
              }}
            >
              <RxCross2
                size={24}
                color="white"
                style={{
                  cursor: "pointer",
                  backgroundColor: "red",
                  borderRadius: 20,
                  marginTop: 200,
                  marginBottom: 8,
                  fontWeight: 1000,
                }}
                onClick={() => handleShow(!show)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Notifications;
