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
  const [products, setProducts] = useState(null);

  const handleChange = (data) => {
    const products = getProducts(data.value, updatedData);
    // console.log(updatedData);
    // console.log("break");
    // console.log(products);
    setProducts(products);
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
        {products?.map((item, key) => (
          <div className={styles.products} key={key}>
            <Link to={`/productDetail/${123}`}>
              <img
                className={styles.product_image}
                alt="product"
                src={item.image}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
