import Dropdown from "react-dropdown";
import HeaderComponent from "../../components/HeaderComponent";
import styles from "./style.module.css";

const options = ["one", "two", "three"];

export default function Product() {
  return (
    <div style={{ marginLeft: 15 }}>
      <HeaderComponent title="Product" />

      <Dropdown
        className={styles.dropdownRoot}
        options={options}
        controlClassName={styles.controlClassName}
        menuClassName={styles.menuClassName}
        
      />
    </div>
  );
}
