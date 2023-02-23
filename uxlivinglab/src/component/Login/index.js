import "./style.css";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";
import { useState } from "react";
import LoadingSpinner from "../spinner/spinner";

export default function Login() {
  const [showIframe, setIframe] = useState(false);
  const { show, handleShow } = useStateContext();

  return (
    <>
      <div className="popup-container">
        <div className="item" style={{ marginLeft: 78, marginTop: 50 }}>
          <div className="{ props.text }">
            <div className="elementor-widget-container">
              {showIframe ? (
                <iframe
                  width="320"
                  height="315"
                  src="https://www.youtube.com/embed/videoseries?list=PLa-BPmUzAKKfVgomvrIsWd9ZGQFTiT0Xb"
                  title="YouTube video player"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div style={{ marginTop: 200, marginLeft: 140 }}>
                  <LoadingSpinner>
                    {setTimeout(() => {
                      setIframe(true);
                    }, 4000)}
                  </LoadingSpinner>
                  {/* {() => showIframe(true)} */}
                </div>
              )}
            </div>

            <a
              href="https://100014.pythonanywhere.com"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="logout"
                style={{
                  width: 250,
                  top: 400,
                  marginLeft: 38,
                }}
              >
                <i
                  className="button-text"
                  id="logoutButton"
                  style={{ fontSize: 20 }}
                >
                  Login
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
