import HeaderComponent from "../components/HeaderComponent";
import { IoIosArrowForward } from "react-icons/io";
import "../components/ScrollbarStyles.css"
import TabButton from "../components/tabButton/tabButton";
  
export default function Profile () {
    const fields = ["01. My Profile","02. Set Password","03. Device IDs","04. Personal IDs","05. References","06. ID Verification","07. My Organisation","08. Geographic Profile","09. Demographic Profile","10. Psychographic Profile","11. Behavioural Profile","12. Usage Profile","13. Section Permissions"]
    return (
        <div style={{marginLeft : 15}}>
            <HeaderComponent title="Profile" />
            <div style={containerStyles}>
                {Object.entries(fields).map(([key,value])=>(
                        <div style={boxStyle}>
                        <div className="rectangle" style={rectangleStyle}>
                            <div style={textWrapperStyle}>{value}</div>
                            <IoIosArrowForward size={15} color="#005734" style={{ marginLeft: "10px", marginRight: "20px" }}/>
                        </div>
                        </div>

                ))}
            </div>
            <TabButton description={"Edit my profile"}/>
        </div>
    );
}
const containerStyles = {
  marginTop : "44px",
  height : "70vh",
  overflowY : "scroll",
}
const boxStyle = {
    height: "37px",
    width: "310px",
    marginTop: "20px",
    marginRight: "10px",
    marginLeft: "10px",
    marginBottom:"26px"
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
  

