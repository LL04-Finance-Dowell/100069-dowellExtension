import { useNavigate, useParams } from "react-router";
import HeaderComponent from "../../components/HeaderComponent";
import Dropdown from "react-dropdown";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useStore from "../../hooks/use-hook";
import FetchUserInfo from "../../lib/api/fetchUserInfo";
import ProductDropdownComponent from "../../components/Dropdowns/ProductDropdown";
import { useStateContext } from "../../Contexts/Context";

export default function ProductDetail() {
  const { id } = useParams();
  const { sessionId } = useStateContext();

  const { data } = useQuery({
    queryKey: "productDetail",
    queryFn: async () => await FetchUserInfo(sessionId),
  });
  const products = useStore((state) => state.products);
  const org = useStore((state) => state.org);

  const [product, setProduct] = useState(null);
  const [portfolio, setPortfolio] = useState(null);

  const listProducts = products
    ?.filter((item) => item.org_name === org)[0]
    .products.map((pro) => pro.product);

  const navigate = useNavigate();

  useEffect(() => {
    setProduct(
      products
        ?.filter((item) => item.org_name === org)[0]
        .products.find((pro) => pro.id === id)
    );
  }, []);

  const handleClick = () => {
    if (!data?.data?.userinfo?.username || !product || !portfolio) {
      return null;
    } else {
      window.open(
        `https://100093.pythonanywhere.com/exportfolio?session_id=${sessionId}&org=${org}&product=${product.product}&portfolio=${portfolio}&username=${data?.data?.userinfo?.username}`
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <HeaderComponent
        title="Product Detail"
        navigation={() => navigate(-1)}
        type="detail"
      />
      <div
        style={{
          marginLeft: 50,
          alignSelf: "center",
          backgroundColor: "white",
          position: "absolute",
          top: 100,
          left: 0,
          zIndex: 1,
        }}
      >
        <ProductDropdownComponent
          listProducts={listProducts ?? []}
          setProduct={setProduct}
          product={product?.product}
          products={products?.filter((item) => item.org_name === org)[0]}
        />
      </div>

      <img
        src={product?.image}
        alt=""
        style={{
          opacity: 0.4,
          marginTop: 20,
          position: "fixed",
          top: 180,
          left: 50,
        }}
      />
      <div
        style={{
          ...rectangleStyle,
          position: "fixed",
          top: 210,
          left: 30,
        }}
      >
        <div style={headerStyle}>{product?.product}</div>
        <Dropdown
          options={product?.portfolios ?? []}
          onChange={(e) => setPortfolio(e.value)}
          className={styles.dropdownRoot}
          controlClassName={styles.controlClassName}
          placeholderClassName={styles.placeholderClassName}
          menuClassName={styles.menuClassName}
          arrowClassName={styles.arrowClassName}
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
        <div style={buttonStyle} onClick={handleClick}>
          <span style={{ color: "#ffffff", fontSize: 16, fontWeight: 500 }}>
            Connect
          </span>
        </div>
      </div>
    </div>
  );
}

const rectangleStyle = {
  marginLeft: "20px",
  borderRadius: "10px",
  boxShadow:
    "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
  height: "219px",
  width: "285px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
};

const headerStyle = {
  color: "#005734",
  fontSize: "16",
  fontWeight: "bold",
  height: "24",
  letterSpacing: "0",
  lineHeight: "normal",
  marginTop: "8px",
};

const buttonStyle = {
  backgroundColor: "#005734",
  borderRadius: "9px",
  height: "40px",
  width: "190px",
  marginBottom: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};
