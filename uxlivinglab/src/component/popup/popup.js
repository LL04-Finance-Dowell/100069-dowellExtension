import "./popup.css"
import { RxCross2 } from "react-icons/rx";

function MyButton(props) {
    return (
        <div className="popup-container">
            <div className="item">
                <div className="{ props.text }">
                    <p className="pad"></p>    
                    <button className="auth-button">
                    <i className="button-text">{props.text}</i>
                    </button>
                </div>
            </div>        
            <div className="cross">
            <RxCross2 size={24} color="white" className="close" />
            </div>

        </div>
    );
}



function Popup(props) {
    return (
        <div className="popup-container">
            <MyButton text={props.text}/>            
            <div className="cross">
            <RxCross2 size={24} color="white" className="close" />
            </div>

        </div>
    );
}
export default MyButton;
