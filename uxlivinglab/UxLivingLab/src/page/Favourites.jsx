import { useNavigate } from "react-router";
import HeaderComponent from "../components/HeaderComponent";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";

export default function Favourites() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", paddingLeft: 30 }}>
        <HeaderComponent title="Favourites" />
      </div>
      <div style={boxStyle}>
        <div className="rectangle" style={rectangleStyle}>
          <div style={textWrapperStyle}>Add Your Favourites</div>
          <AiOutlineEye size={15} color="lightgrey" />
          <AiOutlinePlus
            size={15}
            color="#005734"
            style={{ marginLeft: "10px", marginRight: "20px" }}
            onClick={() => navigate("/addFavourite")}
          />
        </div>
      </div>
      <div style={rectangle}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "auto",
            marginLeft: 15,
            marginTop: 30,
          }}
        >
          <div
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: "#005734",
              letterSpacing: 0,
              lineHeight: "normal",
            }}
          >
            Details
          </div>
          <span style={label}>Name: Username</span>
          <span style={label}>Workspace: HR_Dowellllllllllllllllllllllll</span>
          <span style={label}>Product: Digital Queue</span>
          <span style={label}>Portfolio: HR_Dowell-portfolio</span>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          style={imageStyle}
          sizes="contain"
        />
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

const rectangle = {
  width: "290px",
  height: "184px",
  marginTop: "40px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "row",
  boxShadow:
    "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
};

const imageStyle = {
  width: 102,
  height: 158,
  boxShadow:
    "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
  borderRadius: "10px",
  marginRight: "15px",
  marginTop: "10px",
  objectFit: "cover",
};

const label = {
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  width: "150px",
  color: "#005734",
  fontSize: "12px",
  fontWeight: "500",
  marginTop: "5px",
};
