import React from "react";
import styles from "./styles.module.css";
import { useStateContext } from "../../../contexts/ContextProvider";
const FeatureBox = ({ product, org_name }) => {
  const { data, sessionId } = useStateContext();
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>{product.title}</div>
        <select style={{ height: 40 }}>
          {[
            ...new Map(
              data?.map((item) => [item["portfolio_name"], item])
            ).values(),
          ]
            ?.filter(
              (datum) =>
                (datum?.org_name === org_name) &
                (datum?.product === product.title)
            )
            .map((dat, index) => (
              <option style={{ height: 40 }} key={index}>
                {dat?.portfolio_name}
              </option>
            ))}
        </select>
        {sessionId && product.title === "Workflow AI" ? (
          <a
            href={`https://ll04-finance-dowell.github.io/100018-dowellWorkflowAi-testing/#/?session_id=${sessionId}`}
            target="_blank"
            rel="noreferrer"
          >
            <button
              className={styles.button}
              style={{ fontSize: 17, width: 150 }}
            >
              Connect
            </button>
          </a>
        ) : (
          <button
            className={styles.button}
            style={{ fontSize: 20, width: 150 }}
          >
            Connect
          </button>
        )}
      </div>
    </div>
  );
};

export default FeatureBox;
