export default function TabButton ({ description }) {
    return (
        <div style={{left:81,top:"89vh",position:"absolute"}}>
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
    borderRadius: "12px",
    width:"200px"
}

// const buttonContainerStyle=(left) = {
//     top:"89vh",
//     left: left, 
//     position:"absolute",
// }