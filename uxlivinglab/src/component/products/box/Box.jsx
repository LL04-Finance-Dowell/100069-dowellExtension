import React, { useState } from "react";
import FeatureBox from "../featureBox/FeatureBox";
import styles from "./styles.module.css";

const Box = ({ product, org_name }) => {
  const [currentItem, setCurrentItem] = useState(null);
  const handleHover = (id) => {
    setCurrentItem(id);
  };
  const handleLeave = () => {
    setCurrentItem(null);
  };

  return (
    <div
      style={{ backgroundImage: `url(${product.image})` }}
      className={styles.item}
      data-order="1"
      onMouseEnter={() => handleHover(product.id)}
    >
      <div
        onMouseLeave={() => handleLeave(product.id)}
        style={{
          width: "100%",
          height: "100%",
          display: `${product.id === currentItem ? "block" : "none"}`,
        }}
      >
        <FeatureBox product={product} org_name={org_name} />
      </div>
    </div>
  );
};

export default Box;
