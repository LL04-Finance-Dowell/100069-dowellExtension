import "./customer_support.css";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";
import { useState } from "react";

function CustomerSupport() {
  const { show, handleShow, sessionId, data, chosenProduct } =
    useStateContext();
  const [buttonClicked, clickButton] = useState(false);
  const [selectedProduct, changeSelectedProduct] = useState("");

  function clicker() {
    clickButton(true);
  }
  return (
    <div className="customer">
      <div className="item">
        <div className="{ props.text }">
          <button className="logout" style={{ width: 270, marginLeft: 8 }}>
            <i
              className="button-text"
              style={{ fontSize: 18, fontStyle: "normal" }}
            >
              Customer Support
            </i>
          </button>
        </div>
      </div>
      <div className="customersupport" style={{ marginLeft: 0 }}>
        <div className="elementor-widget-container" style={{ marginRight: 10 }}>
          <iframe
            id="frame"
            title="Customer Support iframe"
            style={{ alignItems: "center", border: 0 }}
            src="https://uxlivinglab.com/en/faq/"
            width="283"
            height="700"
            allow="fullscreen"
          ></iframe>{" "}
        </div>

        <div
          class="elementor-divider"
          style={{
            width: "270px",
            borderTop: "1.5px solid red",
            marginTop: "15px",
            marginLeft: 30,
          }}
        >
          {" "}
        </div>
        {buttonClicked ? (
          <div>
            {/* <select
              className="elementor-field-textual elementor-size-sm"
              onChange={(e) => {
                changeSelectedProduct(e.target.value);
              }}
              value={selectedProduct}
              style={{
                width: 270,
                marginTop: 20,
                marginRight: 20,
                marginLeft: 40,
                marginBottom: 20,
                height: 15,
              }}
            >
              <option>Select Product</option>

              {Array.from(
                new Set(
                  data
                    ?.filter((datum) => !datum?.portfolio)
                    .map((datum) => datum.product)
                )
              ).map((org_name, index) => (
                <option value={`${org_name}`} key={index}>
                  {org_name}
                </option>
              ))}
            </select> */}
            <div style={{ marginRight: 10, marginTop: 90, marginBottom: 0 }}>
              <iframe
                id="frame"
                title="Customer Support iframe"
                style={{ alignItems: "center", border: 0 }}
                src={`https://100096.pythonanywhere.com/chat/Extension/?session_id=${sessionId}`}
                width="283"
                height="200"
                allow="fullscreen"
              ></iframe>
            </div>
          </div>
        ) : (
          <div class="button-div" style={{ marginTop: 25, marginLeft: 47 }}>
            <button
              type="submit"
              class="connectWebsite"
              id="chatcustomersupport"
              onClick={() => clicker()}
            >
              Chat with Customer Support
            </button>
          </div>
        )}
      </div>
      <div style={{ height: "10px" }}></div>
      <div style={{ display: "flex", marginLeft: 5 }}>
        <RxCross2
          size={24}
          color="white"
          className="close"
          style={{
            backgroundColor: "red",
            borderRadius: 20,
            marginTop: 0,
            marginRight: 30,
            left: 0,
            marginBottom: 10,
            marginLeft: 5,
          }}
          onClick={() => handleShow(!show)}
        />
      </div>
    </div>
  );
}

export default CustomerSupport;
