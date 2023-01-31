import styles from "./styles.module.css";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";

export default function Notifications() {
  const { show, handleShow } = useStateContext();
  const chatData = [
    {
      id: crypto.randomUUID(),
      name: "Team Member (009)",
    },
    {
      id: crypto.randomUUID(),
      name: "User (010)",
    },
    {
      id: crypto.randomUUID(),
      name: "Public (00200)",
    },
    {
      id: crypto.randomUUID(),
      name: "UX Living Lab (0020)",
    },
  ];

  return (
    <>
      <div className={styles.items}>
        <button className={styles.logout}>
          <i
            style={{
              fontSize: 20,
              color: "#ffffff",
              fontStyle: "normal",
              fontWeight: 700,
            }}
          >
            Notifications
          </i>
        </button>
        <p>Chat Messages</p>
      </div>
    </>
  );
}
