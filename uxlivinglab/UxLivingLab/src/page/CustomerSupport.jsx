// import Cookies from "js-cookie";
import HeaderComponent from "../components/HeaderComponent";
import "../components/ScrollbarStyles.css";
import ChatUI from "./ChatUI";
// import { useStateContext } from "../Contexts/Context";

export default function CustomerSupport() {
  // const { setMessages } = useStateContext();

  // const handleDeleteRoom = async (e) => {
  //   e.preventDefault();
  //   setMessages([]);
  //   Cookies.remove("roomId");
  //   console.log(Cookies.get("roomId"));
  // };

  return (
    <div style={mainDiv}>
      <HeaderComponent title="Customer Support" />
      <ChatUI />
      {/* <div
        style={{
          marginTop: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          onClick={(e) => handleDeleteRoom(e)}
          style={{ color: "red", cursor: "pointer" }}
        >
          delete room
        </span>
      </div> */}
    </div>
  );
}

const mainDiv = {
  height: "50vh",
};
