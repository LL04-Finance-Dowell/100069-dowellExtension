// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function SideBar() {
  const icons = {
    login: "fas fa-sign-in-alt",
    logout: "fas fa-power-off",
    payments: "fas fa-credit-card",
    profiles: "fas fa-user",
    customer: "fas fa-headset",
    notifications: "fas fa-bell",
    products: "far fa-gem",
    favourites: "fas fa-hand-holding-heart",
  };

  return (
    <div
      style={{
        height: "100vh",
        width: 100,
        borderRadius: 20,
      }}
      className={styles.rectangle1}
    >
      {Object.entries(icons).map(([key, value]) => (
        <Link to={`/${key}`} key={key} style={{ textDecoration: "none" }}>
          <div
            style={{
              padding: 10,
              margin: 10,
              display: "flex",
              flexDirection: "column",
              placeItems: "center",
              borderRadius: 10,
            }}
            key={key}
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
      ))}
      <span>Image</span>
    </div>
  );
}
