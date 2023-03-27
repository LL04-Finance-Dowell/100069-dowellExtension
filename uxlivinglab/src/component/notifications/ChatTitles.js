import styles from "./styles.module.css";

function ChatTitles (props) {
    return (
        <h3 className={styles.badge}>{props.title}</h3>
    );
}

export default ChatTitles;