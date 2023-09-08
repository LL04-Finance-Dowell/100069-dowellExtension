import HeaderComponent from "../components/HeaderComponent";
// import TabButton from "../components/TabButton";
import "../components/ScrollbarStyles.css";
import { useStateContext } from "../contexts/Context";

export default function CustomerSupport() {
  const { sessionId } = useStateContext();
  return (
    <div style={mainDiv}>
      <div>
        <HeaderComponent title="Customer Support" />
        <div style={topIframe}>
          <div style={{ marginRight: 10, marginTop: 20, marginBottom: 10 }}>
            <iframe
              id="frame"
              title="Customer Support iframe"
              style={{ alignItems: "center", border: 0 }}
              src={`https://100096.pythonanywhere.com/chat/Extension/?session_id=${sessionId}`}
              width="283"
              height="300px"
              allow="fullscreen"
            ></iframe>
          </div>
        </div>
        {/* <TabButton description={"Edit my profile"}/> */}
      </div>
      <div className="container" style={bottomIframe}>
        <iframe
          className="frame"
          id="frame"
          title="Customer Support iframe"
          style={{ alignItems: "center", border: 0, scrollbarWidth: 2 }}
          src="https://uxlivinglab.com/en/faq/"
          width="300"
          height="2500px"
          allow="fullscreen"
        ></iframe>{" "}
      </div>
    </div>
  );
}

const mainDiv = {
  marginLeft: 15,
  height: "100vh",
  overflowY: "scroll",
};
const topIframe = {
  marginLeft: "29px",
  marginTop: "40px",
  borderRadius: "8px",
  width: 283,
  border: "solid #ffffff",
  boxShadow:
    "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
};
const bottomIframe = {
  borderRadius: "8px",
  border: "solid #ffffff",
  // height:"300px",
  marginRight: "0px",
  marginLeft: "20px",
  marginTop: "30px",
  width: 300,
  boxShadow:
    "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",

  // overflowY:"scroll"
};
