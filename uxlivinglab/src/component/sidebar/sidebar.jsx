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
import SideButtons from "./SideButtons";

export default function Sidebar() {
  const { show } = useStateContext();

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

  return (
    <div id="grid-container">
      {show && (
        <div>
          <div id="second-container">
            {hover.logout && <Logout />}
            {hover.login && <Login />}
            {hover.payments && <Payments text="Payments" />}
            {hover.customer && <CustomerSupport />}
            {hover.products && <Products text="Products" />}
            {hover.profiles && <Profiles text="Profiles" />}
            {hover.notifications && <Notifications text="Notifications" />}

            {hover.favourites && <Favourites text="Favourites" />}
          </div>
        </div>
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
