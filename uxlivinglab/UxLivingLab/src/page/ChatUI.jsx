import Avatar from "@mui/material/Avatar";
import "./chatuiform.css";
import { AiOutlineSend } from "react-icons/ai";
import { PiSmileyLight } from "react-icons/pi";

export default function ChatUI() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("first");
  };

  return (
    <div style={mainContainerStyle}>
      <div style={{ overflow: "scroll", overflowX: "hidden", maxHeight: 300 }}>
        <div
          style={{
            paddingLeft: 8,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Avatar sx={{ width: 35, height: 35 }} />
          <div style={textStyle}>
            Hey, How can I help you? Hey, How can I help you? Hey, How can I
            help you? Hey, How can I help you? Hey, How can I help you? Hey, How
            can I help you?
          </div>
        </div>
      </div>
      <div style={contentStyle}>
        <div>
          <Avatar sx={{ width: 25, height: 25 }} />
        </div>
        <form style={{ width: "100%" }} onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Typing..."
            style={{ border: "none", paddingLeft: 10, marginRight: "auto" }}
          />
          <PiSmileyLight color="#005734" style={{ marginRight: 10 }} />
          <AiOutlineSend color="#005734" style={{ marginRight: 10 }} />
        </form>
      </div>
    </div>
  );
}

const contentStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "100px",
  boxShadow: "3px 3px 3px 0px #9C9C9C7A inset",
  fontSize: 15,
  display: "flex",
  marginTop: 20,
  marginBottom: 10,
  marginLeft: 15,
  padding: 6,
  flexDirection: "row",
  alignItems: "center",
  border: "1px",
};

const textStyle = {
  width: "100%",
  borderRadius: "10px",
  backgroundColor: "#005734",
  color: "white",
  padding: "8px 5px 5px 5px",
  fontSize: 10,
  marginLeft: 11,
  marginRight: 11,
  marginTop: 4,
};

const mainContainerStyle = {
  marginTop: 40,
  marginLeft: 10,
  marginRight: 10,
  borderRadius: "8px",
  maxHeight: 350,
  display: "flex",
  flexDirection: "column",
  border: "solid #ffffff",
  boxShadow:
    "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
};
