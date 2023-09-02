import { BsArrowLeft } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
export default function HeaderComponent({ title }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
      }}
    >
      <BsArrowLeft size={30} color="#005734" />
      <div
        style={{
          color: "#005734",
          fontSize: 20,
          fontWeight: 600,
          height: 27,
          letterSpacing: 0,
          lineHeight: "normal",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {title}
      </div>
    </div>
  );
}
