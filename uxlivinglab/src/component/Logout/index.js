import "./style.css";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";
import { useState } from "react";

export default function Logout() {
  const { show, handleShow, userInfo, chosenProduct } = useStateContext();
  const [fields, setFields] = useState([
    "Username",
    "Email",
    "Country",
    "Date & Time",
    "Workspace",
  ]);
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
            {fields.map((data) => (
              <div>
                <h4>
                  {data}:{" "}
                  <p style={{ color: "#61ce70", fontSize: 15 }}>
                    {data === "Username"
                      ? userInfo?.username
                      : data === "Email"
                      ? userInfo?.email
                      : data === "Country"
                      ? userInfo?.country
                      : data === "Date & Time"
                      ? userInfo?.dowell_time
                      : data === "Workspace"
                      ? chosenProduct
                      : null}
                  </p>
                </h4>
                <div
                  className="elementor-divider"
                  style={{
                    width: "270px",
                    borderTop: "1.5px solid green",
                    marginTop: "1px",
                  }}
                />
              </div>
            ))}
            {/* 
            <h4>
              Email:{" "}
              <p style={{ color: "#61ce70", fontSize: 15 }}>
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
              <p style={{ color: "#61ce70", fontSize: 15 }}>
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
              <p style={{ color: "#61ce70", fontSize: 15 }}>
                {userInfo?.dowell_time}
              </p>
            </h4> */}
          </div>
          <div
            className="{ props.text }"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <a
              href="https://100014.pythonanywhere.com/en/sign-out"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="logout"
                style={{
                  width: 250,
                  bottom: 40,
                  top: 100,
                  left: 10,
                  marginLeft: 70,
                  marginBottom: 20,
                  marginTop: 30,
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
        <div style={{ display: "flex", position: "relative" }}>
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
