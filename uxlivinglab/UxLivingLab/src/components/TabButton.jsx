/* eslint-disable react/prop-types */
export default function TabButton({ description }) {
  return (
    <div>
      <button style={buttonStyle}>{description}</button>
    </div>
  );
}
const buttonStyle = {
  padding: "10px 50px 10px 50px",
  backgroundColor: "#005734",
  color: "#ffffff",
  fontSize: "15px",
  border: "solid #005734",
  borderRadius: "12px",
  width: "200px",
  cursor: "pointer",
};
