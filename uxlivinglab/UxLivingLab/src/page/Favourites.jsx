import HeaderComponent from "../components/HeaderComponent";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";

export default function Favourites() {
  return (
    <div style={{ marginLeft: 15 }}>
      <HeaderComponent title="Favourites" />
      <div style={boxStyle}>
        <div className="rectangle" style={rectangleStyle}>
          <div style={textWrapperStyle}>Add Your Favourites</div>
          <AiOutlineEye size={15} color="lightgrey" />
          <AiOutlinePlus
            size={15}
            color="#005734"
            style={{ marginLeft: "10px", marginRight: "20px" }}
          />
        </div>
      </div>
    </div>
  );
}

const boxStyle = {
  height: "37px",
  width: "310px",
  marginTop: "40px",
  marginRight: "10px",
  marginLeft: "10px",
};

const rectangleStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  boxShadow:
    "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
  height: "37px",
  width: "310px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const textWrapperStyle = {
  color: "#005734",
  fontSize: "10px",
  fontWeight: 500,
  height: "15px",
  letterSpacing: "0",
  lineHeight: "normal",
  marginRight: "auto",
  marginLeft: "20px",
};
