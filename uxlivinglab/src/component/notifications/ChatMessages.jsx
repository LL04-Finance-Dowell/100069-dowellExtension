import styles from "./styles.module.css";
import { useState } from "react";

function ChatMessage (props) {
  const [hovering, setHover] = useState('false');
  return (

    <div>
      <div style={styles.notif} onMouseEnter={setHover(true)} onMouseLeave={setHover(false)}>
        <h6>M</h6>
      </div>
      {hovering?
      <div>
        <h3>{props.id}</h3>
        <h3>{props.title}</h3>
        <h3>{props.portfolio}</h3>
        <h3>{props.productName}</h3>
        <h3>{props.message}</h3>
        <h3>{props.link}</h3>
      </div>:null}
    </div>
  );
}

export default ChatMessage;