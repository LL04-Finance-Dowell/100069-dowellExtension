import "./style.css";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";


export default function Logout() {
  const { show, handleShow} = useStateContext();

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
              <button className="logout" style={{width:350}}>
                <i className="button-text" id="logoutButton" style={{fontSize:20}}>
                  Logout
                </i>
              </button>
            </a>
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: 5 }}>
          <RxCross2
            size={24}
            color="white"
            className="close"
            style={{
              backgroundColor: "red",
              borderRadius: 20,
              marginTop: 4,
              marginRight: 300,
              left: 0,
            }}
            onClick={() => handleShow(!show)}
          />
        </div>      </div>
    </>
  );
}