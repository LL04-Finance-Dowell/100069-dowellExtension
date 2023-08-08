import "../sidebar/style.css";
import "../popup/popup.css";
import { RxCross2 } from "react-icons/rx";
import Payments from "../payments/payments";
import CustomerSupport from "../customer_support/customer_support";
import Products from "../products/products";
import Profiles from "../profiles/profiles";
import Notifications from "../notifications/notifications";
import { useState, useEffect } from "react";
import Login from "../Login";
import Logout from "../Logout";
import Favourites from "../favourites/favourites";
import { useStateContext } from "../../contexts/ContextProvider.js";
import SideButtons from "./SideButtons";
import admin from "./admin.png";

export default function Sidebar() {
  const { show, sessionId, userInfo } = useStateContext();

  const initialState = {
    login: false,
    logout: false,
    payments: false,
    profiles: false,
    customer: false,
    notifications: false,
    products: false,
    favourites: false,
  };
  const [hover, setHover] = useState(initialState);
  const icons = {
    login: "fas fa-sign-in-alt",
    logout: "fas fa-power-off",
    payments: "fas fa-credit-card",
    profiles: "fas fa-user",
    customer: "fas fa-headset",
    notifications: "fas fa-bell",
    products: "far fa-gem",
    favourites: "fas fa-hand-holding-heart",
  };

  useEffect(() => {
    if (sessionId) {
      setHover({ ...initialState, favourites: true });
    } else {
      setHover({ ...initialState, favourites: false, login: true });
    }
  }, [sessionId]);

  return (
    <div id="grid-container">
      {show && (
        <>
          <div id="second-container">
            {/* <div> */}
            {hover.logout && <Logout />}
            {hover.login && <Login />}
            {hover.payments && <Payments text="Payments" />}
            {hover.customer && <CustomerSupport />}
            {hover.products && <Products text="Products" />}
            {hover.profiles && <Profiles text="Profiles" />}
            {hover.notifications && <Notifications text="Notifications" />}
            {hover.favourites && <Favourites text="Favourites" />}
            {/* </div> */}
          </div>
        </>
      )}
      <div id="first-container">
        {Object.entries(icons).map(([keys, value]) => (
          <SideButtons
            setHover={setHover}
            keys={keys}
            value={value}
            initialState={initialState}
            key={keys}
            hover={hover}
          />
        ))}

        <img
          class="power"
          onClick={() =>
            window.open(
              "https://100014.pythonanywhere.com/en/?redirect_url=https://100093.pythonanywhere.com/home"
            )
          }
          style={{ height: 45 }}
          src={admin}
        ></img>
        <img
          src={userInfo?.org_img}
          alt=""
          style={{
            marginTop: 3,
            width: 70,
            // marginTop: 40,
            // position: "absolute",
            display: "flex",
          }}
        />
        <div style={{ display: "flex" }} onClick={() => window.close()}>
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
