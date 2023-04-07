import "./customer_support.css";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";
import { useState } from "react";

function CustomerSupport() {
  const { show, handleShow, sessionId, data, products } = useStateContext();
  const [buttonClicked, clickButton] = useState(false);
  const [selectedProduct, changeSelectedProduct] = useState("Workflow-AI");
  const allProducts = Array.from(new Set(products));
  {
    console.log(allProducts);
  }

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
      {!buttonClicked && sessionId ? (
        <div
          class="button-div"
          style={{
            marginTop: 25,
            marginLeft: 47,
            marginBottom: 30,
          }}
        >
          <button
            style={{ borderRadius: 20, boxShadow: "1px 2px 9px #00000080" }}
            type="submit"
            class="connectWebsite"
            id="chatcustomersupport"
            onClick={() => clicker()}
          >
            Chat with Customer Support
          </button>
        </div>
      ) : null}

      {buttonClicked ? (
        <div>
          <select
            className="elementor-field-textual elementor-size-sm"
            onChange={(e) => {
              changeSelectedProduct(e.target.value);
            }}
            value={selectedProduct}
            style={{
              width: 250,
              marginTop: 20,
              marginRight: 20,
              marginLeft: 30,
              marginBottom: 5,
              height: 15,
            }}
          >
            <option>Select Product</option>
            {allProducts.map((name, index) => (
              <option value={`${name}`} key={index}>
                {name}
              </option>
            ))}
          </select>
          <div style={{ marginRight: 10, marginTop: 20, marginBottom: 30 }}>
            <iframe
              id="frame"
              title="Customer Support iframe"
              style={{ alignItems: "center", border: 0 }}
              src={`https://100096.pythonanywhere.com/extension-chat/Extension/?session_id=${sessionId}&prdct=${selectedProduct}`}
              width="283"
              height="200"
              allow="fullscreen"
            ></iframe>
          </div>
        </div>
      ) : null}

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
