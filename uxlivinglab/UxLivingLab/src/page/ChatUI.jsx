import Avatar from "@mui/material/Avatar";
import "./chatuiform.css";
import { AiOutlineSend } from "react-icons/ai";
import { PiSmileyLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

export default function ChatUI() {
  const [showEmoji, setShowEmoji] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    Cookies.set("name", "value");
  }, []);

  setTimeout(() => {
    const n = Cookies.get("name");
    console.log("cookue", n);
  }, 4000);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length <= 0) {
      return;
    }
    console.log("first");
  };

  const handleEmoji = (emoji) => {
    setInput(input + emoji);
    setShowEmoji(false);
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
            marginRight: 10,
          }}
        >
          <Avatar sx={{ width: 35, height: 35 }} />
          <div style={textStyle}>
            Hey, How can I help you?Hey, How can I help you? Hey, How can I help
            you?Hey, How can I help you?Hey, How can I help you?Hey, How can I
            help you?Hey, How can I help you?Hey, How can I help you?Hey, How
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
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <PiSmileyLight
            color="#005734"
            style={{ marginRight: 10 }}
            onClick={() => setShowEmoji(!showEmoji)}
          />
          {showEmoji && (
            <div style={{ position: "absolute", top: 7, right: 10 }}>
              <Picker
                data={data}
                onEmojiSelect={(emoji) => handleEmoji(emoji.native)}
              />
            </div>
          )}
          <AiOutlineSend
            color="#005734"
            style={{ marginRight: 10 }}
            onClick={(e) => handleSubmit(e)}
          />
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
