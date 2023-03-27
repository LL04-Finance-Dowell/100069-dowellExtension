import "./style.css";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";

export default function Logout() {
  const { show, handleShow, userInfo } = useStateContext();

  return (
    <>
      <div className="popup-container">
        <div className="item">
          <div
            style={{
              color: "gray",
              fontSize: 15,
              width: 300,
              marginLeft: 100,
              textAlign: "left",
            }}
          >
            <h4>
              Username:{" "}
              <p style={{ color: "#61ce70", fontSize: 20 }}>
                {userInfo?.username}
              </p>
            </h4>
            <div
              className="elementor-divider"
              style={{
                width: "270px",
                borderTop: "1.5px solid green",
                marginTop: "5px",
              }}
            />

            <h4>
              Email:{" "}
              <p style={{ color: "#61ce70", fontSize: 20 }}>
                {userInfo?.email}
              </p>
            </h4>
            <div
              className="elementor-divider"
              style={{
                width: "270px",
                borderTop: "1.5px solid green",
                marginTop: "5px",
              }}
            />

            <h4>
              Country:{" "}
              <p style={{ color: "#61ce70", fontSize: 20 }}>
                {userInfo?.country}
              </p>
            </h4>
            <div
              className="elementor-divider"
              style={{
                width: "270px",
                borderTop: "1.5px solid green",
                marginTop: "5px",
              }}
            />
            <h4>
              Date & Time:{" "}
              <p style={{ color: "#61ce70", fontSize: 20 }}>
                {userInfo?.dowell_time}
              </p>
            </h4>
          </div>
          <div className="{ props.text }">
            <a
              href="https://100014.pythonanywhere.com/en/sign-out"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="logout"
                style={{
                  width: 250,

                  top: 400,
                  left: 0,
                  marginLeft: 38,
                }}
              >
                <i
                  className="button-text"
                  id="logoutButton"
                  style={{ fontSize: 20 }}
                >
                  Logout
                </i>
              </button>
            </a>
          </div>
        </div>
        <div style={{ display: "flex", position: "absolute", top: 500 }}>
          <RxCross2
            size={22}
            color="white"
            className="close"
            style={{
              backgroundColor: "red",
              borderRadius: 20,
              marginTop: 10,
              marginLeft: 110,
              left: 0,
            }}
            onClick={() => handleShow(!show)}
          />
        </div>
      </div>
    </>
  );
}
