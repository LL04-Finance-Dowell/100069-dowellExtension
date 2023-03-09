import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";
import ChatMessage from "./ChatMessages";
import ChatTitles from "./ChatTitles"; 

function Notifications() {
  const { show, handleShow,notifications, userInfo } = useStateContext();

  const [userClicked, setClick] = useState(false);
  const user = userInfo.username;
  const product = "Workflow AI"


  const allNotifications = Array.from(
    new Set(notifications));

  function clicked () {
    setClick(!userClicked);
    
  }

  const markSeenClick = (pk) => {
      fetch(`https://100092.pythonanywhere.com/notification/putProductNotification/${pk}`,{
        method: "PUT",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({"seen":true})
      })
    
    
  };

  const timeOut = (pk,time) => {
    setTimeout(()=>markSeenClick(pk),time*(3600))
  }



  const redirectClick = (data) => {
    window.open(
      `https://www.${data}`)
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
        <div className={styles.all}>
          <p className={styles.texts}>Chat Messages</p>

          <div className={styles.allBorder}>
            <div
              className={styles.elementContainer}
              onClick={() => handleArrows("showArrow1", !arrows.showArrow1)}
            >
              <i
                aria-hidden="true"
                className={
                  arrows.showArrow1 ? "fas fa-angles-up" : "fas fa-angles-down"
                }
                style={{ marginTop: 15, marginLeft: 5 }}
              ></i>

              <p
                style={{
                  color: arrows.showArrow1 && "#61ce70",
                  marginLeft: 15,
                }}
              >
                Team Member (009)
              </p>
            </div>
            <div
              className={
                arrows.showArrow1 ? styles.spaceShow : styles.spaceHide
              }
            ></div>
            <div
              className={styles.elementContainer}
              onClick={() => handleArrows("showArrow2", !arrows.showArrow2)}
            >
              <i
                aria-hidden="true"
                className={
                  arrows.showArrow2 ? "fas fa-angles-up" : "fas fa-angles-down"
                }
                style={{ marginTop: 15, marginLeft: 5 }}
              ></i>

              <p
                style={{
                  color: arrows.showArrow2 && "#61ce70",
                  marginLeft: 15,
                }}
              >
                User (010)
              </p>
            </div>

            <div
              className={
                arrows.showArrow2 ? styles.spaceShow : styles.spaceHide
              }
            ></div>

            <div
              className={styles.elementContainer}
              onClick={() => handleArrows("showArrow3", !arrows.showArrow3)}
            >
              <i
                aria-hidden="true"
                className={
                  arrows.showArrow3 ? "fas fa-angles-up" : "fas fa-angles-down"
                }
                style={{ marginTop: 15, marginLeft: 5 }}
              ></i>

              <p
                style={{
                  color: arrows.showArrow3 && "#61ce70",
                  marginLeft: 15,
                }}
              >
                Public (00200)
              </p>
            </div>

            <div
              className={
                arrows.showArrow3 ? styles.spaceShow : styles.spaceHide
              }
            ></div>

            <div
              className={styles.elementContainer}
              onClick={() => handleArrows("showArrow4", !arrows.showArrow4)}
            >
              <i
                aria-hidden="true"
                className={
                  arrows.showArrow4 ? "fas fa-angles-up" : "fas fa-angles-down"
                }
                style={{ marginTop: 15, marginLeft: 5 }}
              ></i>

              <p
                style={{
                  color: arrows.showArrow4 && "#61ce70",
                  marginLeft: 15,
                }}
              >
                UX Living Lab
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
                  arrows.showArrow5 ? "fas fa-angles-up" : "fas fa-angles-down"
                }
                style={{ marginTop: 15, marginLeft: 5 }}
              ></i>

              <p
                style={{
                  color: arrows.showArrow5 && "#61ce70",
                  marginLeft: 15,
                }}
              >
                Workflow AI (009)
              </p>
            </div>
            <div
              className={
                arrows.showArrow5 ? styles.spaceShowContent : styles.spaceHide
              }
            >
                  {notifications.filter((datum)=>(datum.seen===false && datum.username === user && datum.productName === product)).map((data)=>(
                  // remember to filter based on product name and seen status before pushing (Workflow AI)
                  
                  <div className={styles.messages}>
                      <div className={styles.badges} onClick={clicked}>        
                        <ChatTitles title={data.title}/>
                      </div>
                      {userClicked &&
                      <div className={styles.content}>
                        <h4 className={styles.littleDetails}>{data.portfolio}</h4>
                        <h4 className={styles.littleDetails}>{data.companyID}</h4>
                        {/* <h4 className={styles.littleDetails}>{data.productName}</h4> */}
                        <h3 style={{marginTop:40,marginBottom:20}}>{data.message}</h3>

                        <button onClick={()=>markSeenClick(data.id)} className={styles.button}>mark as seen</button>
                        <button onClick={()=>redirectClick(data.link)} className={styles.button} style={{marginLeft:10}}>visit product</button>
                      </div>
                      
                      }
                      {userClicked?timeOut(data.ID,parseInt(data.duration)):null}
                      
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
                  arrows.showArrow6 ? "fas fa-angles-up" : "fas fa-angles-down"
                }
                style={{ marginTop: 15, marginLeft: 5 }}
              ></i>

              <p
                style={{
                  color: arrows.showArrow6 && "#61ce70",
                  marginLeft: 15,
                }}
              >
                Digital Queue (010)
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
                  arrows.showArrow7 ? "fas fa-angles-up" : "fas fa-angles-down"
                }
                style={{ marginTop: 15, marginLeft: 5 }}
              ></i>

              <p
                style={{
                  color: arrows.showArrow7 && "#61ce70",
                  marginLeft: 15,
                }}
              >
                UX Live (00200)
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
      </div>
    </>
  );
}

export default Notifications;
