import "../sidebar/style.css";
import "../popup/popup.css";
import { RxCross2 } from "react-icons/rx";
import MyButton from "../popup/popup";
import Payments from "../payments";
import CustomerSupport from "../customer_support/customer_support";
import Products from "../products/products";
import Profiles from "../profiles/profiles";
import { useState } from "react";

export default function Sidebar() {
  const [changes, setChanges] = useState({
    name: "component",
    showHideLogin: false,
    showHideLogout: false,
    showHideProducts: false,
    showHidePayments: false,
    showHideCustomerSupport: false,
    showHideProfiles: false,

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

      default:
        return null;
    }
  };
  return (
    <div id="grid-container">
      <div id="second-container">
        {/* <div className="close-second"> */}
        {changes.showHideLogin && <MyButton text="Login" />}
        {changes.showHideLogout && <MyButton text="Logout" />}
        {changes.showHidePayments && <Payments text="Payments" />}
        {changes.showHideCustomerSupport && <CustomerSupport />}
        {changes.showHideProducts && <Products text="Products" />}
        {changes.showHideProfiles && <Profiles text="Profiles" />}


        {/* <RxCross2 size={24} color="white" className="close" /> */}
      </div>

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
          <i aria-hidden="true" className="fas fa-bell"></i>
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
