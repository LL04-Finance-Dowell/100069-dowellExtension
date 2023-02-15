import "./style.css";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";


export default function Logout() {
  const { show, handleShow, userinfo} = useStateContext();

  return (
    <>
      <div className="popup-container">
        <div className="item">
          {userinfo?.username}
          {userinfo?.email}
          {userinfo?.country}
          {userinfo?.dowell_time}

          <div className="{ props.text }">
            {/* <p className="pad"></p> */}
            <a
              href="https://100014.pythonanywhere.com/en/sign-out"
              target="_blank"
              rel="noreferrer"
            >
              <button className="logout" style={{width:250,position:"absolute",top:400,left:0,marginLeft:38}}>
                <i className="button-text" id="logoutButton" style={{fontSize:20}}>
                  Logout
                </i>
              </button>
            </a>
          </div>
        </div>
        <div style={{ display: "flex",position:"absolute",top:500}}>
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
        </div>      </div>
    </>
  );
}