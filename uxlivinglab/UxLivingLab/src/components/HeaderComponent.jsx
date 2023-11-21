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
        paddingTop: 15,
        paddingBottom: 20,
        backgroundColor: "rgb(240, 245, 243)",
        borderRadius: "10px 0px 0px 0px",
        width: "100%",
        borderBottom: "1px solid #0057344D",
        // borderBottomLeftRadius: title === "Customer Support" ? 20 : 0,
        // borderBottomRightRadius: title === "Customer Support" ? 10 : 0,
      }}
    >
      {type && (
        <BsArrowLeft
          size={30}
          color="black"
          onClick={navigation}
          style={{ cursor: "pointer", paddingLeft: 15 }}
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
          width: "90%",
          marginRight: type ? 45 : null,
        }}
      >
        {title}
      </div>
    </div>
  );
}
