import { BsArrowLeft } from "react-icons/bs";
// import Avatar from "@material-ui/core/Avatar"; 

export default function ChatUI () {
    return (
        <div style={mainContainerStyle}>
            {/* Header component */}
            <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
            }}
            >
            <BsArrowLeft size={22} color="#005734" onClick={navigation} />
            <div
                style={{
                color: "#005734",
                fontSize: 20,
                fontWeight: 600,
                height: 20,
                letterSpacing: 0,
                lineHeight: "normal",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                }}
            >
                
            </div>
            </div>
        
            <div>
                <div style={avatarStyle}></div>
                <div style={textStyle}></div>
            </div>
        </div>
    );
}

const avatarStyle = {

}
const textStyle = {

}

const mainContainerStyle = {
    marginLeft: "50px",
    marginTop: "40px",  
    width:300,
    height:283,
    marginLeft:10,
    borderRadius: "8px",
    width: 283,
    border: "solid #ffffff",
    boxShadow:
      "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
  
    // border:"solid 3px black"
}