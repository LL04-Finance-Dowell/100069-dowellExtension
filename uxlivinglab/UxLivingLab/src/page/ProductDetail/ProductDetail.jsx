import { useParams } from "react-router";
import HeaderComponent from "../../components/HeaderComponent";
import { useStateContext } from "../../contexts/Context";
import Dropdown from "react-dropdown";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";
import styles from "./style.module.css";

export default function ProductDetail() {
  const { id } = useParams();
  const { products } = useStateContext();

  const product = products?.find((item) => item.id === id);

  console.log(product);

  return (
    <div
      style={{
        marginLeft: 15,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeaderComponent title="Product Detail" />
      <div>dropDown</div>
      <img
        src={product?.image}
        alt=""
        style={{ width: "100%", opacity: 0.4 }}
      />
      <div
        style={{
          ...rectangleStyle,
          position: "absolute",
          top: 140,
        }}
      >
        <div style={headerStyle}>{product.product}</div>
        <Dropdown
          options={["1", "2"]}
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
        <div style={buttonStyle}>
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
};
