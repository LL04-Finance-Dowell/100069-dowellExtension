import styles from "./styles.module.css";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useState } from "react";

const FeatureBox = ({ product, org_name, type }) => {
  const { data, sessionId, userInfo } = useStateContext();
  const [portfolio, setPortfolio] = useState("");
  const handleClick = () => {
    window.open(
      `https://100093.pythonanywhere.com/exportfolio?session_id=${sessionId}&org=${org_name}&product=${product.title}&portfolio=${portfolio}&username=${userInfo?.username}`
    );
  };

  if (type === "products") {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.title}>{product.title}</div>
          <select
            onChange={(e) => {
              setPortfolio(e.target.value);
            }}
          >
            <option>Select Portfolio</option>
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
                <option
                  style={{ height: 40 }}
                  key={index}
                  value={dat?.portfolio_name}
                  id="portfolio"
                >
                  {dat?.portfolio_name}
                </option>
              ))}
          </select>
          <button
            className={styles.button}
            style={{ fontSize: 17, width: 150 }}
            onClick={handleClick}
          >
            Connect
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.title}>{product.productName}</div>
          <select
            onChange={(e) => {
              setPortfolio(e.target.value);
            }}
          >
            <option>Select Portfolio</option>
            <option value={product.portfolio}>{product.portfolio}</option>
          </select>
          <button
            className={styles.button}
            style={{ fontSize: 17, width: 150 }}
            onClick={handleClick}
          >
            Connect
          </button>
        </div>
      </div>
    );
  }
};

export default FeatureBox;
