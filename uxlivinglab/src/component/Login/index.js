import "./style.css";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";


export default function Login() {
  const { show, handleShow} = useStateContext();
  return (

    <>
      <div className="popup-container">
      {/* <p className="pad"></p> */}

        <div className="item" style={{marginLeft:78,marginTop:20}}>
          <div className="{ props.text }">
            {/* <p className="pad"></p> */}
            <div className="elementor-widget-container" >
            <iframe 
              width="320" 
              height="315" 
              src="https://www.youtube.com/embed/videoseries?list=PLa-BPmUzAKKfVgomvrIsWd9ZGQFTiT0Xb" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
              </iframe>{" "}
            </div>

            <a
              href="https://100014.pythonanywhere.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="logout" style={{width:250,position:"absolute",top:400,left:0,marginLeft:38}}>
                <i className="button-text" id="logoutButton" style={{fontSize:20}}>
                  Login
                </i>
              </button>
            </a>
          </div>
        </div>
        <div style={{ display: "flex",position:'absolute',top:500}}>
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