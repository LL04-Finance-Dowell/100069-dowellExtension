import { useState } from "react";
import Dropdown from "react-dropdown";
import HeaderComponent from "../../components/HeaderComponent";
import styles from "./style.module.css";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getOrganisation } from "../../utils/getOrgs";
import { getProducts } from "../../utils/getProducts";

export default function Product() {
  const { data } = useQuery("userInfo");
  const other_org = data?.data?.other_org;
  const own_org = data?.data?.own_organisations;
  const updatedData = [...other_org, ...own_org];
  const orgs = getOrganisation(updatedData);
  const [selectedOrg, setSelectedOrg] = useState();

  const handleChange = (data) => {
    const products = getProducts(data.value, updatedData);
    console.log(products);
    // setSelectedOrg(value);
    // console.log(value);
  };

  return (
    <div style={{ marginLeft: 15 }}>
      <HeaderComponent title="Product" />

      <Dropdown
        className={styles.dropdownRoot}
        options={orgs.map((item) => item.org_name)}
        onChange={handleChange}
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
        <Link to={`/productDetail/${123}`}>
          <div className={styles.products}>
            <img
              className={styles.product_image}
              alt="product"
              src="https://uxlivinglab.com/wp-content/uploads/2022/12/Digital-Q-1.png"
            />
          </div>
        </Link>
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
