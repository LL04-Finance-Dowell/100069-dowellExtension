import Cookies from "js-cookie";
import HeaderComponent from "../components/HeaderComponent";
// import TabButton from "../components/TabButton";
import "../components/ScrollbarStyles.css";
// import { useStateContext } from "../contexts/Context";
import ChatUI from "./ChatUI";

export default function CustomerSupport() {
  const handleDeleteRoom = (e) => {
    e.preventDefault();
    Cookies.remove("roomId");
    // console.log("rr", Cookies.get("roomId"));
    // window.location.reload();
  };

  return (
    <div style={mainDiv}>
      <HeaderComponent title="Customer Support" />
      <ChatUI />
      <div
        style={{
          marginTop: 20,
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
      </div>
    </div>
  );
}

const mainDiv = {
  height: "50vh",
  // overflowY: "scroll",
};
// const topIframe = {
//   marginLeft: "29px",
//   marginTop: "40px",
//   borderRadius: "8px",
//   width: 283,
//   border: "solid #ffffff",
//   boxShadow:
//     "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
// };
// const bottomIframe = {
//   borderRadius: "8px",
//   border: "solid #ffffff",
//   // height:"300px",
//   marginRight: "0px",
//   marginLeft: "20px",
//   marginTop: "30px",
//   width: 300,
//   boxShadow:
//     "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
// };
