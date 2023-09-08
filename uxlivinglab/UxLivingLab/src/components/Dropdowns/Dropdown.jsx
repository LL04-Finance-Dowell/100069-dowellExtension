import Dropdown from "react-dropdown";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";
import styles from "./style.module.css";

// eslint-disable-next-line react/prop-types
export default function DropdownComponent({ products, setProduct, product }) {
  return (
    <Dropdown
      className={styles.dropdownRoot}
      // eslint-disable-next-line react/prop-types
      options={products?.map((item) => item.product)}
      onChange={(e) => setProduct(e.value)}
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
