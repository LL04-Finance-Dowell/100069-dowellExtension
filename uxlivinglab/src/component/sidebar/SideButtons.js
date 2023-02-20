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
          onClick={() => setHover({ ...initialState, [keys]: true })}
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
        >
          {showText && (
            <p
              style={{
                color: "black",
                position: "absolute",
                marginBottom: 70,
                marginLeft: 20,
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
              (keys === "products")
                ? { backgroundColor: "red" }
                : { color: "" }
            }
            onClick={() =>
              sessionId
                ? setHover({ ...initialState, [keys]: true })
                : keys !== "profiles" &&
                  keys !== "notifications" &&
                  keys !== "products"
                ? setHover({ ...initialState, [keys]: true })
                : {}
            }
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
          >
            {showText && (
              <p
                style={{
                  color: "black",
                  position: "absolute",
                  marginBottom: 70,
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
