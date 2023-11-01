import Avatar from "@mui/material/Avatar";
import "./chatuiform.css";
import { AiOutlineSend } from "react-icons/ai";
import { PiSmileyLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Picker from "@emoji-mart/react";
import CreateRoom from "../lib/api/createRoom";
import { useUserInfo } from "../lib/fetchUserInfo";
import { useStateContext } from "../Contexts/Context";
import FetchMessage from "../lib/api/fetchMessages";
import { Fragment } from "react";

export default function ChatUI() {
  const { sessionId } = useStateContext();
  const [showEmoji, setShowEmoji] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const { data } = useUserInfo(sessionId);
  const [roomId, setroomId] = useState("");
  const [messages, setMessages] = useState([]);

  const { userInfo, portfolio_info } = data?.data || {};
  const user_id = userInfo?.userID;
  const org_id = portfolio_info?.[0]?.org_id;

  useEffect(() => {
    if (data) {
      const room_id = Cookies.get("roomId");
      setroomId(room_id);
      Cookies.remove("roomId");
      if (!room_id) {
        const handleCreateRoom = async () => {
          try {
            const roomData = {
              user_id: data?.data?.userinfo?.userID,
              product_name: "EXTENSION",
              portfolio_name: "extension",
              org_id: data?.data?.portfolio_info[0]?.org_id,
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
        const response = await FetchMessage(roomId);
        setMessages(response.data.response.data);
        // console.log(response.data.response.data);
        setLoading(false);
      };
      fetchMessages();
    }
  }, [data, roomId]);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={mainContainerStyle}>
      <div style={{ overflow: "scroll", overflowX: "hidden", maxHeight: 300 }}>
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
