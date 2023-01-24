import "./style.css";
import { RxCross2 } from "react-icons/rx";

export default function Logout() {
  return (
    <>
      <div className="popup-container">
        <div className="item">
          <div className="{ props.text }">
            <p className="pad"></p>
            <a
              href="https://100014.pythonanywhere.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="logout">
                <i className="button-text" id="logoutButton">
                  Logout
                </i>
              </button>
            </a>
          </div>
        </div>
        <div onClick={() => window.close()}>
          <RxCross2
            size={24}
            color="white"
            className="close"
            style={{
              backgroundColor: "red",
              borderRadius: 20,
              marginTop: 4,
              marginRight: 350,
              left: 0,
            }}
          />
        </div>
      </div>
    </>
  );
}