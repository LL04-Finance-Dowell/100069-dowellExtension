import Dropdown from "react-dropdown";
import styles from "./style.module.css";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";
import { getProducts } from "../../utils/getProducts";
import useStore from "../../hooks/use-hook";

// eslint-disable-next-line react/prop-types
export default function DropdownComponent({ options, setOrg, data }) {
  const setProducts = useStore((state) => state.setProducts);

  const handleChange = (item) => {
    setOrg(item.value);
    setProducts(getProducts(item.value, data));
  };

  return (
    <Dropdown
      options={options}
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
