/* eslint-disable react/prop-types */
import Dropdown from "react-dropdown";
import styles from "./style.module.css";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";

export default function ProductDropdown({ options, setProduct, isLoading }) {
  const handleChange = (item) => {
    setProduct(options.find((option) => option.product === item.value));
  };

  return (
    <Dropdown
      options={options?.map((item) => item?.product)}
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
