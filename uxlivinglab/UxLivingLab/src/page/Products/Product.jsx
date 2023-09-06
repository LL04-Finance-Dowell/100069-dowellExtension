import Dropdown from "react-dropdown";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";
import HeaderComponent from "../../components/HeaderComponent";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getOrganisation } from "../../utils/getOrgs";
import { getProducts } from "../../utils/getProducts";
import { useStateContext } from "../../contexts/Context";
import FetchUserInfo from "../../lib/api/fetchUserInfo";
import { useState } from "react";

export default function Product() {
  const { products, setProducts, sessionId } = useStateContext();
  const [org, setOrg] = useState();

  const data = useQuery({
    queryKey: "userInfo",
    queryFn: async () => await FetchUserInfo(sessionId),
  });

  const other_org = data?.data?.data?.other_org || [];
  const own_org = data?.data?.own_organisations || [];
  const updatedData = [...other_org, ...own_org];
  const orgs = getOrganisation(updatedData);

  const handleChange = (data) => {
    const products = getProducts(data.value, updatedData);
    setProducts(products);
    setOrg(data.value);
  };

  return (
    <div style={{ marginLeft: 15 }}>
      <HeaderComponent title="Product" />

      <Dropdown
        className={styles.dropdownRoot}
        options={orgs.map((item) => item.org_name)}
        value={org}
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
        {products?.map((item) => (
          <div className={styles.products} key={item.id}>
            <Link to={`/productDetail/${item.id}`}>
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
