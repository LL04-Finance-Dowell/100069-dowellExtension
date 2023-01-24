import "../sidebar/style.css";
import "../popup/popup.css";
import { RxCross2 } from "react-icons/rx";
import Payments from "../payments";
import CustomerSupport from "../customer_support/customer_support";
import Products from "../products/products";
import Profiles from "../profiles/profiles";
import Notifications from "../notifications/notifications";
import { useState } from "react";
import Login from "../Login"
import Logout from "../Logout";

export default function Sidebar() {
  const [changes, setChanges] = useState({
    name: "component",
    showHideLogin: false,
    showHideLogout: false,
    showHideProducts: false,
    showHidePayments: false,
    showHideCustomerSupport: false,
    showHideProfiles: false,
    showHideNotifications: false,

    // showHideLogin: false,
    // showHideLogin: false,
  });

  const hideComponent = (name) => {
    switch (name) {
      case "showHideLogin":
        setChanges({ showHideLogin: !changes.showHideLogin });
        break;
      case "showHideLogout":
        setChanges({ showHideLogout: !changes.showHideLogout });
        break;
      case "showHidePayments":
        setChanges({ showHidePayments: !changes.showHidePayments });
        break;
      case "showHideCustomerSupport":
        setChanges({ showHideCustomerSupport: !changes.showHideCustomerSupport });
        break;
      
      case "showHideProducts":
        setChanges({ showHideProducts: !changes.showHideProducts });
        break;

      case "showHideProfiles":
          setChanges({ showHideProfiles: !changes.showHideProfiles });
          break;
        
      case "showHideNotifications":
          setChanges({ showHideNotifications: !changes.showHideNotifications });
          break;

      default:
        return null;
    }
  };
  return (
    <div id="grid-container">
      {changes.showHideLogin && <div id="second-container auth"> <Login /> </div>}
      {changes.showHideLogout && <div id="second-container auth"><Logout /></div>}
        {/* <div className="close-second"> */}
        {changes.showHidePayments && <div id="second-container"><Payments text="Payments" /></div>}
        {changes.showHideCustomerSupport && <div id="second-container"><CustomerSupport /></div>}
        {changes.showHideProducts && <div id="second-container"><Products text="Products" /></div>}
        {changes.showHideProfiles && <div id="second-container"><Profiles text="Profiles" /></div>}
        {changes.showHideNotifications && <div id="second-container"><Notifications text="Notifications" /></div>}


        {/* <RxCross2 size={24} color="white" className="close" /> */}

      {/* </div> */}

      <div id="first-container">
        <div className="power">
          <i
            aria-hidden="true"
            className="fas fa-power-off"
            onClick={() => hideComponent("showHideLogout")}
          ></i>
        </div>
        <div className="power">
          <i
            aria-hidden="true"
            className="fas fa-sign-in-alt"
            onClick={() => hideComponent("showHideLogin")}
          ></i>
        </div>
        <div className="power">
          <i
            aria-hidden="true"
            className="fas fa-credit-card"
            onClick={() => hideComponent("showHidePayments")}
          ></i>
        </div>
        <div className="power">
          <i 
            aria-hidden="true" 
            className="fas fa-user"
            onClick={() => hideComponent("showHideProfiles")}
            ></i>
        </div>
        <div className="power">
          <i 
            aria-hidden="true"
            className="fas fa-headset"
            onClick={() => hideComponent("showHideCustomerSupport")}

            ></i>
        </div>
        <div className="power">
          <i 
          aria-hidden="true"
          className="fas fa-bell"
          onClick={() => hideComponent("showHideNotifications")}
          ></i>
        </div>
        <div className="power">
          <i 
            aria-hidden="true" 
            className="far fa-gem"
            onClick={() => hideComponent("showHideProducts")}

            ></i>
        </div>
        <div className="power">
          <i aria-hidden="true" className="fas fa-hand-holding-heart"></i>
        </div>
        <div
          onClick={
            () => window.close()
            // (document.querySelector("second-container").style.display = "none")
          }
        >
          <RxCross2 size={24} color="red" className="close" />
        </div>
      </div>
    </div>
  );
}
