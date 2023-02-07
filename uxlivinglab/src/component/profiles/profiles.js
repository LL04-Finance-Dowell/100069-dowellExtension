import styles from "./styles.module.css";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import UserProfile from "./UserProfile";
import { useStateContext } from "../../contexts/ContextProvider";
import { useState } from "react";

function Profiles() {
  const { show, handleShow } = useStateContext();
  const [arrows, setaArrows] = useState({
    showArrow1: true,
    showArrow2: false,
    showArrow3: false,
    showArrow4: false,
    showArrow5: false,
    showArrow6: false,
    showArrow7: false,
    showArrow8: false,
    showArrow9: false,
    showArrow10: false,
    showArrow11: false,
    showArrow12: false,
    showArrow13: false,
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
            My Profile
          </i>
        </button>
        <div className={styles.all}>
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
                01. My Profile
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
                02. Set Password
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
                03. Device IDs
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
                04. Personal IDs
              </p>
            </div>

            <div
              className={
                arrows.showArrow4 ? styles.spaceShow : styles.spaceHide
              }
            ></div>

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
                05. References
              </p>
            </div>

            <div
              className={
                arrows.showArrow5 ? styles.spaceShow : styles.spaceHide
              }
            ></div>

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
                06. ID Verification
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
                07. My Organisation
              </p>
            </div>

            <div
              className={
                arrows.showArrow7 ? styles.spaceShow : styles.spaceHide
              }
            ></div>

            <div
              className={styles.elementContainer}
              onClick={() => handleArrows("showArrow8", !arrows.showArrow8)}
            >
              <i
                aria-hidden="true"
                className={
                  arrows.showArrow8 ? "fas fa-angles-up" : "fas fa-angles-down"
                }
                style={{ marginTop: 15, marginLeft: 5 }}
              ></i>

              <p
                style={{
                  color: arrows.showArrow8 && "#61ce70",
                  marginLeft: 15,
                }}
              >
                08. Geographic Profile
              </p>
            </div>

            <div
              className={
                arrows.showArrow8 ? styles.spaceShow : styles.spaceHide
              }
            ></div>

            <div
              className={styles.elementContainer}
              onClick={() => handleArrows("showArrow9", !arrows.showArrow9)}
            >
              <i
                aria-hidden="true"
                className={
                  arrows.showArrow9 ? "fas fa-angles-up" : "fas fa-angles-down"
                }
                style={{ marginTop: 15, marginLeft: 5 }}
              ></i>

              <p
                style={{
                  color: arrows.showArrow9 && "#61ce70",
                  marginLeft: 15,
                }}
              >
                09. Demographic Profile
              </p>
            </div>

            <div
              className={
                arrows.showArrow9 ? styles.spaceShow : styles.spaceHide
              }
            ></div>

            <div
              className={styles.elementContainer}
              onClick={() => handleArrows("showArrow10", !arrows.showArrow10)}
            >
              <i
                aria-hidden="true"
                className={
                  arrows.showArrow10 ? "fas fa-angles-up" : "fas fa-angles-down"
                }
                style={{ marginTop: 15, marginLeft: 5 }}
              ></i>

              <p
                style={{
                  color: arrows.showArrow10 && "#61ce70",
                  marginLeft: 15,
                }}
              >
                10. Psychographic Profile
              </p>
            </div>

            <div
              className={
                arrows.showArrow10 ? styles.spaceShow : styles.spaceHide
              }
            ></div>

            <div
              className={styles.elementContainer}
              onClick={() => handleArrows("showArrow11", !arrows.showArrow11)}
            >
              <i
                aria-hidden="true"
                className={
                  arrows.showArrow11 ? "fas fa-angles-up" : "fas fa-angles-down"
                }
                style={{ marginTop: 15, marginLeft: 5 }}
              ></i>

              <p
                style={{
                  color: arrows.showArrow11 && "#61ce70",
                  marginLeft: 15,
                }}
              >
                11. Behavioural Profile
              </p>
            </div>

            <div
              className={
                arrows.showArrow11 ? styles.spaceShow : styles.spaceHide
              }
            ></div>

            <div
              className={styles.elementContainer}
              onClick={() => handleArrows("showArrow12", !arrows.showArrow12)}
            >
              <i
                aria-hidden="true"
                className={
                  arrows.showArrow12 ? "fas fa-angles-up" : "fas fa-angles-down"
                }
                style={{ marginTop: 15, marginLeft: 5 }}
              ></i>

              <p
                style={{
                  color: arrows.showArrow12 && "#61ce70",
                  marginLeft: 15,
                }}
              >
                12. Usage Profile
              </p>
            </div>

            <div
              className={
                arrows.showArrow12 ? styles.spaceShow : styles.spaceHide
              }
            ></div>

            <div
              className={styles.elementContainer}
              onClick={() => handleArrows("showArrow13", !arrows.showArrow13)}
            >
              <i
                aria-hidden="true"
                className={
                  arrows.showArrow13 ? "fas fa-angles-up" : "fas fa-angles-down"
                }
                style={{ marginTop: 15, marginLeft: 5 }}
              ></i>

              <p
                style={{
                  color: arrows.showArrow13 && "#61ce70",
                  marginLeft: 15,
                }}
              >
                13. Section Permissions
              </p>
            </div>

            <div
              className={
                arrows.showArrow13 ? styles.spaceShow : styles.spaceHide
              }
            ></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button type="submit" className={styles.EditProfileBtn}>
              Edit My Profile
            </button>
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
                alignSelf: "flex-start",
              }}
              onClick={() => handleShow(!show)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profiles;
