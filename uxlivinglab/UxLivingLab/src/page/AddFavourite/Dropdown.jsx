/* eslint-disable react/prop-types */
import Dropdown from "react-dropdown";
import styles from "./style.module.css";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";
import { getProducts } from "../../utils/getProducts";
import useStore from "../../hooks/use-hook";

export default function DropdownComponent({
  options,
  setOrg,
  data,
  isLoading,
}) {
  const setProducts = useStore((state) => state.setProducts);

  const handleChange = (item) => {
    setOrg(options.find((opt) => opt.org_name === item.value));
    setProducts(getProducts(item.value, data));
  };

  return (
    <Dropdown
      options={options.map((item) => item.org_name)}
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
