import "../sidebar/style.css";
import { RxCross2 } from "react-icons/rx";

export default function Sidebar() {
  return (
    <div id="grid-container">
      <div className="power">
        <i aria-hidden="true" className="fas fa-power-off"></i>
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
  );
}
