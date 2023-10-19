/* eslint-disable react/prop-types */
import { BsArrowLeft } from "react-icons/bs";

export default function HeaderComponent({
  title,
  navigation = () => {},
  type = "",
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop:5,
        paddingTop: 15,
        paddingBottom:20,
        // marginLeft:0,
        backgroundColor:"rgba(0, 87, 52, 0.3)",
        borderRadius:"10px 0px 0px 0px",
        marginLeft:5
        
      }}
    >
      {type && (
        <BsArrowLeft
          size={30}
          color="black"
          onClick={navigation}
          style={{ cursor: "pointer", paddingLeft:15 }}
        />
      )}
      <div
        style={{
          color: "#005734",
          fontSize: 20,
          fontWeight: 600,
          height: 23,
          letterSpacing: 0,
          lineHeight: "normal",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginRight: type ? 45 : null,
        }}
      >
        {title}
      </div>
    </div>
  );
}
