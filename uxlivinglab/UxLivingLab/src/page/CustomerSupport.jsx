import HeaderComponent from "../components/HeaderComponent";
import TabButton from "../components/TabButton";
import { useStateContext } from "../Contexts/Context";
import "../components/ScrollbarStyles.css"



export default function CustomerSupport () {
    const {sessionId} = useStateContext();   
    return (
        <div>
        <div style={{marginLeft : 15}}>
            <HeaderComponent title="Customer Support" />
            <div style={topIframe}>
                <div style={{ marginRight: 10, marginTop: 20, marginBottom: 10 }}>
                    <iframe
                    id="frame"
                    title="Customer Support iframe"
                    style={{ alignItems: "center", border: 0 }}
                    src={`https://100096.pythonanywhere.com/chat/Extension/?session_id=${sessionId}`}
                    width="283"
                    height="170"
                    allow="fullscreen"
                    ></iframe>
                </div>
            </div>
            {/* <TabButton description={"Edit my profile"}/> */}
        </div>
                <div className="container" style={bottomIframe}>
                    <iframe
                        className="frame"
                        id="frame"
                        title="Customer Support iframe"
                        style={{ alignItems: "center", border:0 }}
                        src="https://uxlivinglab.com/en/faq/"
                        width="283"
                        height="100%"
                        allow="fullscreen"
                    ></iframe>{" "}
                </div>
            </div>

);
}

const topIframe = {
    marginLeft:"29px",
    marginTop:"35px",
    borderRadius:"8px",
    border:"solid #ffffff"

}
const bottomIframe = {
    borderRadius:"8px",
    border:"solid #ffffff",
    height:"300px",
    marginLeft:"30px",
    overflowY:"hidden"
}