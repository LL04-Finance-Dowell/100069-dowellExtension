import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineCopy } from "react-icons/ai";
import { useState } from "react";

export default function CreditListItem({ name, value }) {
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState(false);
  function changeSeen() {
    setShowKey(!showKey);
  }
  function copyItem() {
    navigator.clipboard.writeText(value)
    console.log("copied")
    setCopied(true);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid #ccc",
        width: "100%",
        paddingBottom: 10,
        marginTop: 20,
      }}
    >
      <span
        style={{
          color: "gray",
          fontSize: 17,
          fontWeight: "bold",
          marginBottom: 5,
        }}
      >
        {name}:
      </span>
      {/* <span style={{marginLeft: 10}}></span> */}
      <span style={{ marginLeft: 10 }}>{name === "Service Key" ? (showKey ? <span style={{ fontSize: 11 }}>{value}</span> : <span style={{ fontSize: 16.5 }}> ********-****-****-****-*****</span>) : (value)}       <span style={{ paddingLeft: 13, cursor: "pointer" }} onClick={() => changeSeen()}>{name === "Service Key" && (showKey ? <AiOutlineEyeInvisible size={16} color="black" /> : <AiOutlineEye size={16} color="black" />)}</span>
        {name === "Service Key" ? <span style={{ paddingLeft: 1, cursor: "pointer" }} onClick={() => copyItem()}><AiOutlineCopy size={16} color={copied ? "green" : "black"} /></span> : null}
      </span>

    </div>
  );
}
