import React from "react";
import styles from "./styles.module.css";
import { useStateContext } from "../../../contexts/ContextProvider";
const FeatureBox = ({ product, org_name }) => {
  const { data, sessionId } = useStateContext();
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>{product.title}</div>
        <select>
          {data
            ?.filter(
              (datum) =>
                (datum?.org_name === org_name) &
                (datum?.product === product.title)
            )
            .map((dat) => (
              <option>{dat?.portfolio_name}</option>
            ))}
          {/* {product.porfolios.map((item) => (
            <option key={item.id} className={styles.opt}>
              {item.portfolio_name}
            </option>
          ))} */}
        </select>
        <a
          href={
            sessionId && product.title === "Workflow AI"
              ? `https://ll04-finance-dowell.github.io/100018-dowellWorkflowAi-testing/#/?session_id=${sessionId}`
              : ""
          }
          target={
            sessionId && product.title === "Workflow AI" ? "_blank" : null
          }
          rel="noreferrer"
        >
          <button
            className={styles.button}
            style={{ fontSize: 20, width: 150 }}
          >
            Connect
          </button>
        </a>
      </div>
    </div>
  );
};

export default FeatureBox;
