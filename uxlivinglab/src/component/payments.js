import "./payments.css";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../contexts/ContextProvider";

function Payments() {
  const { show, handleShow } = useStateContext();

  return (
    <div>
      <section
        className="elementor-section elementor-inner-section elementor-element elementor-element-5d7fce56 hidden elementor-section-boxed elementor-section-height-default"
        data-id="5d7fce56"
        data-element_type="section"
        id="paymentset"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div
              className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4748b1a2"
              data-id="4748b1a2"
              data-element_type="column"
              data-settings='{"background_background":"classic"}'
            >
              <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-2d472405 elementor-widget elementor-widget-text-editor"
                    data-id="2d472405"
                    data-element_type="widget"
                    id="roletotal"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="item">
                        <div className="{ props.text }">
                          <button
                            className="logout"
                            style={{ width: 270, marginLeft: 8 }}
                          >
                            <i
                              className="button-text"
                              style={{ fontSize: 17, fontStyle: "normal" }}
                            >
                              Payment
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-24fc416 elementor-widget elementor-widget-html"
                    data-id="24fc416"
                    data-element_type="widget"
                    data-widget_type="html.default"
                  >
                    <div
                      className="elementor-widget-container"
                      style={{ marginRight: 10 }}
                    >
                      <iframe
                        id="frame"
                        title="Payments iframe"
                        style={{ alignItems: "center", border: 0 }}
                        src="https://workflowai.online/en/pricing/"
                        width="280"
                        height="700"
                        allow="fullscreen"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <div style={{ height: 15 }}></div>
      <div style={{ display: "flex", marginLeft: 5 }}>
        <RxCross2
          size={24}
          color="white"
          className="close"
          style={{
            backgroundColor: "red",
            borderRadius: 20,
            marginTop: 4,
            marginRight: 300,
            marginBottom: 8,
            left: 0,
          }}
          onClick={() => handleShow(!show)}
        />
      </div>
    </div>
  );
}
export default Payments;
