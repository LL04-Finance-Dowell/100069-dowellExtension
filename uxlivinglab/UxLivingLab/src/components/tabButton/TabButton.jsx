export default function TabButton ({ description }) {
    return (
        <div style={buttonContainerStyle}>
            <button style={buttonStyle}>{description}</button>
        </div>
    );
}
const buttonStyle = {
    padding : "10px 50px 10px 50px",
    backgroundColor: "#005734",
    color:"#ffffff",
    fontSize:"15px",
    border: "solid #005734",
    borderRadius: "12px"

}

const buttonContainerStyle = {
    top:"89vh",
    left:"82px", 
    position:"absolute",
}