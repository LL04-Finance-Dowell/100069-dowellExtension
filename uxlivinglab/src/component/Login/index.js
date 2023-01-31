import "./style.css";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";


export default function Login() {
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
              <button className="logout" style={{width:250}}>
                <i className="button-text" id="logoutButton" style={{fontSize:20}}>
                  Login
                </i>
              </button>
            </a>
          </div>
        </div>
        <div style={{ display: "flex"}}>
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