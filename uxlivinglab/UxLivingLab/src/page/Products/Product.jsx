import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Dropdown from "react-dropdown";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";
import HeaderComponent from "../../components/HeaderComponent";
import styles from "./style.module.css";
import { getOrganisation } from "../../utils/getOrgs";
import { getProducts } from "../../utils/getProducts";
import FetchUserInfo from "../../lib/api/fetchUserInfo";
import useStore from "../../hooks/use-hook";
import { useStateContext } from "../../Contexts/Context";

export default function Product() {
  const { sessionId } = useStateContext();
  const setOrg = useStore((state) => state.setOrg);
  const setProducts = useStore((state) => state.setProducts);
  const org = useStore((state) => state.org);
  const products = useStore((state) => state.products);
  const orgs = useStore((state) => state.orgs);
  const setOrgs = useStore((state) => state.setOrgs);

  const { data } = useQuery("userInfo", async () => {
    const userInfo = await FetchUserInfo(sessionId);

    const other_org = userInfo.data.other_org || [];
    const own_org = userInfo.data.own_organisations || [];
    const portfolioInfo = userInfo.data.portfolio_info || [];
    const updatedData = [...other_org, ...own_org, portfolioInfo].flat();
    const orgs = getOrganisation(updatedData);
    setOrgs(orgs);
    if (!org) {
      setOrg(orgs[0]?.org_name);
      const products = getProducts(updatedData);
      setProducts(products);
    }
    return updatedData;
  });

  const handleChange = (selectedOrg) => {
    setOrg(selectedOrg.value);
    setProducts(getProducts(data));
  };

  return (
    <div>
      <HeaderComponent title="Product" />
      <div style={{ marginLeft: 20 }}>
        <Dropdown
          className={styles.dropdownRoot}
          options={orgs?.map((item) => item.org_name) ?? []}
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
        {products !== undefined && org && (
          <div
            style={{
              display: "flex",
              columnGap: 50,
              rowGap: 10,
              marginLeft: 20,
              flexWrap: "wrap",
              width: 300,
            }}
          >
            {products
              ?.filter((pro) => pro?.org_name === org)[0]
              .products?.map((item) => (
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
        )}
      </div>
    </div>
  );
}
