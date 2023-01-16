import "./payments.css"
import MyButton from "./popup/popup";
function Payments () {
    return (
        <div>
        <MyButton text="payments"/>
        <section class="elementor-section elementor-inner-section elementor-element elementor-element-5d7fce56 hidden elementor-section-boxed elementor-section-height-default" data-id="5d7fce56" data-element_type="section" id="paymentset">
                    <div class="elementor-container elementor-column-gap-default">
                        <div class="elementor-row">
                <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4748b1a2" data-id="4748b1a2" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div class="elementor-column-wrap elementor-element-populated">
                        <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-element-2d472405 elementor-widget elementor-widget-text-editor" data-id="2d472405" data-element_type="widget" id="roletotal" data-widget_type="text-editor.default">
            <div class="elementor-widget-container">
                            <div class="elementor-text-editor elementor-clearfix">
            <p className="auth-button" style="text-align: center;"><b><i>Payment</i></b></p>					</div>
                    </div>
            </div>
            <div class="elementor-element elementor-element-24fc416 elementor-widget elementor-widget-html" data-id="24fc416" data-element_type="widget" data-widget_type="html.default">
            <div class="elementor-widget-container">
        <iframe src="https://workflowai.online/shop/" width="900" height="700" allow="fullscreen"></iframe>		</div>
            </div>
                    </div>
                </div>
    </div>
                            </div>
                </div>
    </section>        </div>
    );
}
export default Payments;