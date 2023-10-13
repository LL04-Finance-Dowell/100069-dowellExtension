/* eslint-disable react/prop-types */
import Dropdown from "react-dropdown";
import styles from "./style.module.css";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";

export default function PortfolioDropdown({
  portfolios,
  setPortfolio,
  isLoading,
}) {
  const handleChange = (item) => {
    setPortfolio(item.value);
  };

  return (
    <Dropdown
      options={portfolios}
      onChange={handleChange}
      disabled={isLoading}
      className={styles.controlStyle}
      menuClassName={styles.menuClassName}
      placeholderClassName={styles.placeholderClassName}
      controlClassName={styles.controlClassName}
      arrowOpen={
        <LiaAngleDownSolid
          size={12}
          style={{ marginRight: 10, marginTop: 5 }}
        />
      }
      arrowClosed={
        <LiaAngleRightSolid
          size={12}
          style={{ marginRight: 10, marginTop: 5 }}
        />
      }
    />
  );
}
