import "../sidebar/style.css";
import "../popup/popup.css";
import { RxCross2 } from "react-icons/rx";
import Payments from "../payments";
import CustomerSupport from "../customer_support/customer_support";
import Products from "../products/products";
import Profiles from "../profiles/profiles";
import Notifications from "../notifications/notifications";
import { useState } from "react";
import Login from "../Login";
import Logout from "../Logout";
import Favourites from "../favourites/favourites";
import { useStateContext } from "../../contexts/ContextProvider.js";

export default function Sidebar() {
  const { show, handleShow, sessionId } = useStateContext();
  const [changes, setChanges] = useState({
    name: "component",
    showHideLogin: false,
    showHideLogout: false,
    showHideProducts: false,
    showHidePayments: false,
    showHideCustomerSupport: false,
    showHideProfiles: false,
    showHideNotifications: false,
    showHideFavourites: true,
    showHideNone: true,

    // showHideLogin: false,
    // showHideLogin: false,
  });

  const hideComponent = (name) => {
    handleShow(true);
    switch (name) {
      case "showHideLogin":
        setChanges({
          showHideLogin: true,
          showHideLogout: false,
          showHideProducts: false,
          showHidePayments: false,
          showHideCustomerSupport: false,
          showHideProfiles: false,
          showHideNotifications: false,
          showHideFavourites: false,
          showHideNone: false,
        });
        break;
      case "showHideLogout":
        setChanges({
          showHideLogin: false,
          showHideLogout: true,
          showHideProducts: false,
          showHidePayments: false,
          showHideCustomerSupport: false,
          showHideProfiles: false,
          showHideNotifications: false,
          showHideFavourites: false,
          showHideNone: false,
        });
        break;
      case "showHidePayments":
        setChanges({
          showHideLogin: false,
          showHideLogout: false,
          showHideProducts: false,
          showHidePayments: true,
          showHideCustomerSupport: false,
          showHideProfiles: false,
          showHideNotifications: false,
          showHideFavourites: false,
          showHideNone: false,
        });
        break;
      case "showHideCustomerSupport":
        setChanges({
          showHideLogin: false,
          showHideLogout: false,
          showHideProducts: false,
          showHidePayments: false,
          showHideCustomerSupport: true,
          showHideProfiles: false,
          showHideNotifications: false,
          showHideFavourites: false,
          showHideNone: false,
        });
        break;

      case "showHideProducts":
        setChanges({
          showHideLogin: false,
          showHideLogout: false,
          showHideProducts: true,
          showHidePayments: false,
          showHideCustomerSupport: false,
          showHideProfiles: false,
          showHideNotifications: false,
          showHideFavourites: false,
          showHideNone: false,
        });
        break;

      case "showHideProfiles":
        setChanges({
          showHideLogin: false,
          showHideLogout: false,
          showHideProducts: false,
          showHidePayments: false,
          showHideCustomerSupport: false,
          showHideProfiles: true,
          showHideNotifications: false,
          showHideFavourites: false,
          showHideNone: false,
        });
        break;

      case "showHideNotifications":
        setChanges({
          showHideLogin: false,
          showHideLogout: false,
          showHideProducts: false,
          showHidePayments: false,
          showHideCustomerSupport: false,
          showHideProfiles: false,
          showHideNotifications: true,
          showHideFavourites: false,
          showHideNone: false,
        });
        break;

      case "showHideFavourites":
        setChanges({
          showHideLogin: false,
          showHideLogout: false,
          showHideProducts: false,
          showHidePayments: false,
          showHideCustomerSupport: false,
          showHideProfiles: false,
          showHideNotifications: false,
          showHideFavourites: true,
          showHideNone: false,
        });
        break;

      default:
        setChanges({
          showHideLogin: false,
          showHideLogout: false,
          showHideProducts: false,
          showHidePayments: false,
          showHideCustomerSupport: false,
          showHideProfiles: false,
          showHideNotifications: false,
          showHideFavourites: false,
          showHideNone: true,
        });
        break;
    }
  };
  return (
    <div id="grid-container">
      {/* {show ? ( */}
      <div>
        <div id="second-container">
          {changes.showHideLogout && <Logout />}
          {changes.showHideLogin && <Login />}
          {changes.showHidePayments && <Payments text="Payments" />}
          {changes.showHideCustomerSupport && <CustomerSupport />}
          {changes.showHideProducts && <Products text="Products" />}
          {changes.showHideProfiles && <Profiles text="Profiles" />}
          {changes.showHideNotifications && (
            <Notifications text="Notifications" />
          )}
          {changes.showHideFavourites && <Favourites text="Favourites" />}
          {/* {changes.showHideNone && (
              <div>
                <p className="pad"></p>
                <div style={{ display: "flex" }}>
                  <RxCross2
                    size={22}
                    color="white"
                    className="close"
                    style={{
                      backgroundColor: "red",
                      borderRadius: 20,
                      marginTop: 108,
                      marginLeft: 5,
                      left: 0,
                    }}
                    onClick={() => handleShow(!show)}
                  />
                </div>
              </div>
            )} */}
        </div>

        {/* <div className="close-second"> */}
        {/* <RxCross2 size={24} color="white" className="close" /> */}
        {/* </div> */}
      </div>
      {/* ) : null} */}
      <div id="first-container">
        {sessionId && (
          <div className="power">
            <i
              aria-hidden="true"
              className="fas fa-power-off"
              onClick={() => hideComponent("showHideLogout")}
            ></i>
          </div>
        )}
        {!sessionId && (
          <div className="power">
            <i
              aria-hidden="true"
              className="fas fa-sign-in-alt"
              onClick={() => hideComponent("showHideLogin")}
            ></i>
          </div>
        )}

        <div className="power">
          <i
            aria-hidden="true"
            className="fas fa-credit-card"
            onClick={() => hideComponent("showHidePayments")}
          ></i>
        </div>
        {sessionId && (
          <div className="power">
            <i
              aria-hidden="true"
              className="fas fa-user"
              onClick={() => hideComponent("showHideProfiles")}
            ></i>
          </div>
        )}
        <div className="power">
          <i
            aria-hidden="true"
            className="fas fa-headset"
            onClick={() => hideComponent("showHideCustomerSupport")}
          ></i>
        </div>
        {sessionId && (
          <>
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
              <i
                aria-hidden="true"
                className="fas fa-hand-holding-heart"
                onClick={() => hideComponent("showHideFavourites")}
              ></i>
            </div>
          </>
        )}
        <div
          style={{ display: "flex", marginLeft: 5 }}
          onClick={() => window.close()}
        >
          <RxCross2
            size={22}
            color="white"
            className="close"
            style={{
              backgroundColor: "red",
              borderRadius: 20,
              marginTop: 10,
              marginRight: 10,
              left: 0,
              marginBottom: 10,
              marginLeft: 5,
            }}
          />
        </div>
      </div>
    </div>
  );
}
