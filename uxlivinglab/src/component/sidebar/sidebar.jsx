import "../sidebar/style.css";
import { RxCross2 } from "react-icons/rx";
import MyButton from "../popup/popup";
import Payments from "../payments";

const Check = (event,parameter) => {
  const check_value = 'Login';
}
export default function Sidebar() {
  return (
    <div id="grid-container">
      <div id="second-container">
        <Payments />
      </div>  

      <div id="first-container">

        <div className="power">
          <i aria-hidden="true" className="fas fa-power-off" onClick={event => Check(event,"Login") }></i>
        </div>
        <div className="power">
          <i aria-hidden="true" className="fas fa-sign-in-alt"></i>
        </div>
        <div className="power">
          <i aria-hidden="true" className="fas fa-credit-card"></i>
        </div>
        <div className="power">
          <i aria-hidden="true" className="fas fa-user"></i>
        </div>
        <div className="power">
          <i aria-hidden="true" className="fas fa-headset"></i>
        </div>
        <div className="power">
          <i aria-hidden="true" className="fas fa-bell"></i>
        </div>
        <div className="power">
          <i aria-hidden="true" className="far fa-gem"></i>
        </div>
        <div className="power">
          <i aria-hidden="true" className="fas fa-hand-holding-heart"></i>
        </div>
        <div>
          <RxCross2 size={24} color="red" className="close" />
        </div>
      </div>
  </div>


  );
}
