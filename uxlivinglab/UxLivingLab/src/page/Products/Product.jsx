import Dropdown from "react-dropdown";
import HeaderComponent from "../../components/HeaderComponent";
import styles from "./style.module.css";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";

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
      <div
        style={{
          display: "flex",
          columnGap: 50,
          rowGap: 10,
          marginLeft: 20,
          flexWrap: "wrap",
        }}
      >
        <div className={styles.products}>
          <img
            className={styles.product_image}
            alt="product"
            src="https://uxlivinglab.com/wp-content/uploads/2022/12/Digital-Q-1.png"
          />
        </div>
        <div className={styles.products}>
          <img
            className={styles.product_image}
            alt="product"
            src="https://uxlivinglab.com/wp-content/uploads/2022/12/Digital-Q-1.png"
          />
        </div>
        <div className={styles.products}>
          <img
            className={styles.product_image}
            alt="product"
            src="https://uxlivinglab.com/wp-content/uploads/2022/12/Digital-Q-1.png"
          />
        </div>
      </div>
    </div>
  );
}
