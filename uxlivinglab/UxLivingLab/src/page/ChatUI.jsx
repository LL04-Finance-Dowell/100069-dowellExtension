import { BsArrowLeft } from "react-icons/bs";
// import Avatar from "@material-ui/core/Avatar"; 
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./chatuiform.css"
import { AiOutlineSend } from "react-icons/ai"
import {PiSmileyLight} from "react-icons/pi"

export default function ChatUI () {
    function ChatMessage (image_url,message) {
        return (
            <div>
                <Avatar src={image_url?image_url:null} sx={{width:35,height:35}}/>
                <div style={textStyle}>
                    {message}
                
                </div>
            </div>
        );
    }

    return (
        <div style={mainContainerStyle}>
            {/* Header component */}
            <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                height:35,
                boxShadow:
                "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
                
          
            }}
            >
            <BsArrowLeft style={{cursor:"pointer"}} size={22} color="#005734" onClick={()=> navigation} />
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
                <div style={chatSectionStyle}>
                    <div style={{paddingTop:20, paddingLeft:8,display: "flex", flexDirection:"row"}}>
                        <Avatar sx={{width:35,height:35}}/>
                        <div style={textStyle}>
                            Hey, How can I help you?
                           
                        </div>
                        
                    </div>
                </div>

                <div style={contentStyle}>
                    <div >
                        <Avatar sx={{width:25,height:25}}/>
                    </div>
                    <form action="#">
                        <input style={innerfieldStyle} placeholder="Typing..." type="text"/>
                        <PiSmileyLight color="#005734" style={{margin:"13px 5px 5px 5px"}}/>
                        <AiOutlineSend color="#005734" style={{margin:"13px 5px 5px 5px"}}/>
                    </form>
                    {/* <p>{value}</p> */}
                </div>
            </div>
        </div>
    );
}

const avatarStyle = {

}
const chatSectionStyle = {
    height:"290px"
}

const contentStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "100px",
    boxShadow: "3px 3px 3px 0px #9C9C9C7A inset",
    height: "37px",
    width: "240px",
    fontSize: 15,
    display: "flex",
    marginTop:0,
    marginLeft:15,
    paddingLeft:10,
    flexDirection: "row",
    alignItems: "center",
    border:"1px"
  }

const textStyle = {
    width: "200px",
    borderRadius: "100px",
    // boxShadow: "3px 3px 3px 0px #9C9C9C7A inset",
    backgroundColor: "#005734",
    color:"white",
    padding:"8px 5px 5px 2px",
    textAlign:"center",
    fontSize: 10,
    marginLeft:11,
    marginTop:4



}
  
const innerfieldStyle = {
    backgroundColor: "#ffffff",
    // borderRadius: "100px",
    // boxShadow: "3px 3px 3px 0px #9C9C9C7A inset",
    height: "28px",
    fontSize: 12,
    display: "flex",
    margin:"5px 5px 5px 5px",
    borderWidth:0
    

}

const mainContainerStyle = {
    // marginLeft: "50px",
    marginTop: "40px",  
    // width:300,
    height:383,
    marginLeft:10,
    borderRadius: "8px",
    width: 283,
    border: "solid #ffffff",
    boxShadow:
      "0px 0px 0px #0000001a, 0px 1px 3px #0000001a, 2px 5px 5px #00000017, 4px 11px 7px #0000000d, 8px 19px 8px #00000003, 12px 29px 9px transparent",
  
    // border:"solid 3px black"
}