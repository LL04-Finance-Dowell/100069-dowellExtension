import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useState } from "react";
import { useStateContext } from "../../contexts/Context";

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

  const [activeTab, setActiveTab] = useState(
    sessionId ? icons.favourites : icons.login
  );

  return (
    <div
      style={{
        height: "100vh",
        width: 100,
        borderRadius: 20,
      }}
      className={styles.rectangle1}
    >
      {Object.entries(icons).map(([key, value]) =>
        (sessionId && key === "login") ||
        (!sessionId && key === "logout") ? null : (
          <Link
            to={`/${key}`}
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
            }}
          >
            <div
              style={{
                padding: 10,
                margin: 10,
                display: "flex",
                flexDirection: "column",
                placeItems: "center",
                borderRadius: 10,
              }}
              className={activeTab === value ? styles.rectangle : null}
              key={key}
              onClick={() =>
                !sessionId &&
                (key === "favourites" ||
                  key === "products" ||
                  key === "logout" ||
                  key === "profiles")
                  ? ""
                  : setActiveTab(value)
              }
            >
              <i
                className={value}
                style={{ fontSize: 20, color: "#005734", marginBottom: 5 }}
              />
              <div className={styles.text_wrapper}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
            </div>
          </Link>
        )
      )}
      <span>Image</span>
    </div>
  );
}
