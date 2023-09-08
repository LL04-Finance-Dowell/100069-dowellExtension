/* eslint-disable react/prop-types */
import Dropdown from "react-dropdown";
import styles from "./style.module.css";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";
import useStore from "../../hooks/use-hook";

export default function PortfolioDropdown({ product, setPortfolio }) {
  const products = useStore((state) => state.products);
  const options = products?.filter((item) => item?.product === product) || [];

  const handleChange = (item) => {
    setPortfolio(item.value);
  };

  return (
    <Dropdown
      options={options?.map((item) => item.portfolio) || []}
      onChange={handleChange}
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
