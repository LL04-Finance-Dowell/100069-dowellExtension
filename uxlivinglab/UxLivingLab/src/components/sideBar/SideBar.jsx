import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import ClientAdmin from "../../assets/admin.png";
import { useStateContext } from "../../Contexts/Context";

export default function SideBar() {
  const { sessionId } = useStateContext();

  const icons = {
    login: "fas fa-power-off fa-rotate-270",
    logout: "fas fa-power-off fa-rotate-270",
    payments: "fas fa-credit-card",
    profiles: "fas fa-user",
    customer: "fas fa-light fa-headphones",
    notifications: "fas fa-regular fa-bell",
    products: "far fa-gem",
    favourites: "fas fa-hand-holding-heart",
  };

  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    if (sessionId) {
      setActiveTab("favourites");
    } else {
      setActiveTab("login");
    }
  }, [sessionId]);

  return (
    <div
      style={{
        // height: "100vh",
        height: 500,
        borderRadius: 20,
        width: 86,
        position: "absolute",
        right: 2,
        backgroundColor: "white",
      }}
      className={styles.rectangle1}
    >
      {Object.entries(icons).map(([key, value]) =>
        (sessionId && key === "login") ||
        (!sessionId && key === "logout") ? null : (
          <Link
            to={key !== "customer" ? `/${key}` : null} // remove condition rendering after chat
            key={key}
            style={{
              textDecoration: "none",
              pointerEvents:
                !sessionId &&
                (key === "favourites" ||
                  key === "products" ||
                  key === "logout" ||
                  key === "profiles")
                  ? "none"
                  : "auto",
              cursor: key === "customer" ? "not-allowed" : "pointer", //remove after chat
            }}
          >
            <div
              style={{
                padding: 5,
                margin: 10,
                display: "flex",
                flexDirection: "column",
                placeItems: "center",
                borderRadius: 10,
              }}
              className={
                activeTab === key && activeTab !== "customer" //remove the & after chat functionality
                  ? styles.rectangle
                  : null
              }
              key={key}
              onClick={() => {
                if (key === "customer") {
                  return;
                } else {
                  !sessionId &&
                  (key === "favourites" ||
                    key === "products" ||
                    key === "logout" ||
                    key === "profiles")
                    ? ""
                    : setActiveTab(key);
                }
              }}
            >
              <i
                className={value}
                style={{ fontSize: 17, color: "#005734", marginBottom: 5 }}
              />
              <div className={styles.text_wrapper}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
            </div>
          </Link>
        )
      )}
      <img
        src={ClientAdmin}
        alt="admin"
        style={{
          width: 60,
          alignItems: "center",
          margin: 10,
          cursor: "pointer",
        }}
        onClick={() => window.open("https://100014.pythonanywhere.com/")}
      />
    </div>
  );
}
