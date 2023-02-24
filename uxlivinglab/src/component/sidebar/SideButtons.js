import { useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";

const SideButtons = ({ setHover, initialState, keys, value }) => {
  const { sessionId } = useStateContext();
  const [showText, setShowText] = useState(false);

  return (
    <>
      {sessionId && keys !== "login" ? (
        <div
          className="power"
          onClick={() =>
            // keys !== "login"
            //   ? setHover({ ...initialState, [keys]: true, login: false })
            //   : setHover({ ...initialState, [keys]: true })
            setHover({ ...initialState, [keys]: true, login: false })
          }
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
        >
          {showText && (
            <p
              style={{
                color: "black",
                position: "absolute",
                // marginBottom: 70,
                // marginLeft: 20,
              }}
            >
              {keys}
            </p>
          )}
          <i aria-hidden="true" className={value}></i>
        </div>
      ) : (
        !sessionId &&
        keys !== "logout" && (
          <div
            className="power"
            style={
              (keys === "profiles") |
              (keys === "notifications") |
              (keys === "products") |
              (keys === "favourites")
                ? { cursor: "not-allowed" }
                : {}
            }
            onClick={() =>
              keys !== "login"
                ? sessionId
                  ? setHover({
                      ...initialState,
                      [keys]: true,
                      login: false,
                    })
                  : keys !== "profiles" &&
                    keys !== "notifications" &&
                    keys !== "products" &&
                    keys !== "favourites"
                  ? setHover({
                      ...initialState,
                      [keys]: true,
                      login: false,
                    })
                  : {}
                : sessionId
                ? setHover({ ...initialState, [keys]: true })
                : keys !== "profiles" &&
                  keys !== "notifications" &&
                  keys !== "products" &&
                  keys !== "favourites"
                ? setHover({ ...initialState, [keys]: true })
                : {}
            }
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
          >
            {/* <div
          class="elementor-divider"
          style={
            (keys === "profiles") |
            (keys === "notifications") |
            (keys === "products")
              ?
            {position:"absolute",width: "58px", borderTop: "2px solid green",marginTop: "5px",marginLeft: 0,transform: "rotate(140deg)"}:
            {color: ""}
              }
            ></div> */}

            {showText && (
              <p
                style={{
                  color: "black",
                  position: "absolute",
                  // marginBottom: 70,
                }}
              >
                {keys}
              </p>
            )}
            <i aria-hidden="true" className={value}></i>
          </div>
        )
      )}
    </>
  );
};

export default SideButtons;
