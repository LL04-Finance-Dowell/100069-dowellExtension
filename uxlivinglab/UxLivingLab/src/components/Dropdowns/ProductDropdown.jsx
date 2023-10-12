/* eslint-disable react/prop-types */
import Dropdown from "react-dropdown";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";
import styles from "./style.module.css";

export default function ProductDropdownComponent({
  products,
  setProduct,
  product,
  listProducts,
}) {
  const handleChange = (value) => {
    setProduct(products.products.find((item) => item.product === value));
  };
  return (
    <Dropdown
      className={styles.dropdownRoot}
      options={listProducts}
      onChange={(e) => handleChange(e.value)}
      value={product}
      controlClassName={styles.controlClassName}
      menuClassName={styles.menuClassName}
      arrowClassName={styles.arrowClassName}
      placeholderClassName={styles.placeholderClassName}
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
