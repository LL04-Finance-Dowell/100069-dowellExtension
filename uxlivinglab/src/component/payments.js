import "./payments.css";
function Payments() {
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
                      <div className="elementor-text-editor elementor-clearfix">
                        <p
                          className="auth-button"
                          style={{ textAlign: "center",width:"300px",marginLeft:"48px" }}
                        >
                          <b>
                            <i style={{ color: "white", fontWeight:'bold' }}>Payment</i>
                          </b>
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-24fc416 elementor-widget elementor-widget-html"
                    data-id="24fc416"
                    data-element_type="widget"
                    data-widget_type="html.default"
                  >
                    <div className="elementor-widget-container">
                      <iframe
                        id="frame"
                        title="Payments iframe"
                        style={{ alignItems:'center'}}
                        src="https://workflowai.online/shop/"
                        width="350"
                        height="700"
                        allow="fullscreen"
                      ></iframe>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}
export default Payments;
