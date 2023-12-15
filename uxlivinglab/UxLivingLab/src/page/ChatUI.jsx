import Avatar from "@mui/material/Avatar";
import "./chatuiform.css";
import { AiOutlineSend } from "react-icons/ai";
import { PiSmileyLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import CreateRoom from "../lib/api/createRoom";
import { useUserInfo } from "../lib/fetchUserInfo";
import { useStateContext } from "../Contexts/Context";
import FetchMessage from "../lib/api/fetchMessages";
import { Fragment } from "react";
import CreateMessage from "../lib/api/createMessage";

export default function ChatUI() {
  const { sessionId, messages, setMessages } = useStateContext();
  const [showEmoji, setShowEmoji] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const { data: userData } = useUserInfo(sessionId);
  const [roomId, setroomId] = useState(undefined);

  useEffect(() => {
    if (userData) {
      const room_id = Cookies.get("roomId");
      if (!room_id) {
        const handleCreateRoom = async () => {
          try {
            const roomData = {
              user_id: userData?.data?.userinfo?.userID,
              product_name: "EXTENSION",
              portfolio_name: "extension",
              org_id: userData?.data?.portfolio_info[0]?.org_id,
            };
            const response = await CreateRoom(roomData);
            setroomId(response.data.response._id);
            Cookies.set("roomId", response.data.response._id);
          } catch (error) {
            console.error("Error creating room:", error);
          }
        };
        handleCreateRoom();
      }
      const fetchMessages = async () => {
        const response = await FetchMessage(roomId ?? room_id);
        setMessages(response.data.response.data);
        setLoading(false);
      };
      fetchMessages();
    }
  }, [userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.length <= 0) {
      return;
    }
    try {
      setSending(true);
      const roomId = Cookies.get("roomId");
      const messageData = {
        type: "create_message",
        room_id: roomId,
        message_data: input,
        side: true,
        author: userData?.data?.userinfo?.username,
        message_type: "text",
      };
      const res = await CreateMessage(messageData);
      if (res.data.success) {
        const response = await FetchMessage(roomId);
        setMessages(response.data.response.data);
      }
    } catch (error) {
      console.log("error creating message", error);
    } finally {
      setSending(false);
      setInput("");
    }
  };

  const handleEmoji = (emoji) => {
    setInput(input + emoji);
    setShowEmoji(false);
  };

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div style={mainContainerStyle}>
      <div
        style={{
          overflow: "scroll",
          overflowX: "hidden",
          height: 300,
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        {messages.map((message) => (
          <Fragment key={message?._id}>
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
              <div style={textStyle}>{message?.message_data}</div>
            </div>
          </Fragment>
        ))}
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
            disabled={sending}
          />
          <PiSmileyLight
            color="#005734"
            style={{ marginRight: 10, cursor: "pointer" }}
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
            style={{ marginRight: 10, cursor: "pointer" }}
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
