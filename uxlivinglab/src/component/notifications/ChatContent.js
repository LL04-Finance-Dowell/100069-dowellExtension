import styles from "./styles.module.css";

function ChatContent (props) {
    return (
        <div className={styles.content}>
        <h4 className={styles.littleDetails}>{props.portfolio}</h4>
        <h4 className={styles.littleDetails}>{props.company}</h4>
        <h4 className={styles.littleDetails}>{props.product}</h4>
        <h3 style={{marginTop:40,marginBottom:20}}>{props.message}</h3>
        <button className={styles.button}>mark as seen</button>
        <button className={styles.button} style={{marginLeft:10}}>visit product</button>
      </div>

    );
}