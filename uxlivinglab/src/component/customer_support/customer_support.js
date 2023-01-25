import "./customer_support.css"
function CustomerSupport () {
    return (
      <div className="customer">
  <div class="elementor-text-editor elementor-clearfix">
  <p
    className="auth-button"
    style={{ textAlign: "center",width:"300px",marginLeft:"48px" }}
    >
    <b>
      <i style={{ color: "white", fontWeight:'bold' }}>Customer Support</i>
    </b>
    </p>{" "}		
  </div>
  <div className="customersupport">
	<div class="elementor-widget-container">
    <iframe                         title="Customer Support iframe"
loading="lazy" src="https://workflowai.online/support/" width="350px" height="700px" allow="fullscreen"></iframe>		
  </div>

  <div class="elementor-divider"  style={{width:"370px",borderTop:"1.5px solid red",marginTop:'5px'}} 
>		</div>
    	<div class="elementor-element elementor-element-82d1611 elementor-button-align-stretch elementor-widget elementor-widget-form" data-id="82d1611" data-element_type="widget" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
    <div class="elementor-widget-container">
      <form class="elementor-form" method="post" name="Form1">
        <input type="hidden" name="post_id" value="8155"/>
        <input type="hidden" name="form_id" value="82d1611"/>
        <input type="hidden" name="referer_title" value="uxlivinglab - innovating from people's mind"/>
        <input type="hidden" name="queried_id" value="8155"/>

        <div class="elementor-form-fields-wrapper elementor-labels-above">
            <div class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
              <label for="form-field-level3name" class="elementor-field-label">Select Product</label>
              <div class="elementor-field elementor-select-wrapper ">
                <select name="form_fields[level3name]" id="form-field-level3name" class="elementor-field-textual elementor-size-sm">
                  <option value="Product 01">Product 01</option>
                  <option value="Product 02">Product 02</option>
                  <option value="Product 03">Product 03</option>
                </select>
              </div>
            </div>
            <div class="button-div">
              <button type="submit" 
              style={{width: "300px",height: "13px",borderWidth:"1px",backgroundColor:"#7a7a7a",color:"#ffffff"}}
              class="elementor-field-textual bt" id="connectwebsite">
                connect to Website
                </button>
            </div>
        </div>
      </form>
    </div>
	</div>
  <div class="elementor-divider" style={{width:"370px",borderTop:"1.5px solid red",marginTop:'5px'}}>
      {/* <hr></hr> */}
    </div>
  	<div class="elementor-widget-container">
		<form class="elementor-form" method="post" name="Form1">
      <input type="hidden" name="post_id" value="8155"/>
      <input type="hidden" name="form_id" value="2d0c3a0"/>
      <input type="hidden" name="referer_title" value="uxlivinglab - innovating from people's mind"/>
			<input type="hidden" name="queried_id" value="8155"/>

      <div class="elementor-form-fields-wrapper elementor-labels-above">
				<div class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
						<div></div>
            <label for="form-field-level3name" class="elementor-field-label">
					    Select Product room							</label>
					<div class="elementor-field elementor-select-wrapper ">
            <select name="form_fields[level3name]" id="form-field-level3name" class="elementor-field-textual elementor-size-sm">
						  <option value="Product 01">Product 01</option>
						  <option value="Product 02">Product 02</option>
						  <option value="Product 03">Product 03</option>
				    </select>
          </div>
			  </div>
				<div class="button-div">
		      <button type="submit" 
          style={{width: "300px",height: "13px",borderWidth:"1px",backgroundColor:"#7a7a7a",color:"#ffffff"}}
          class="elementor-field-textual bt" id="chatcustomersupport">
              Chat with Customer Support
		      </button>
	      </div>
      </div>
    </form>
	  </div>
    </div>
    </div>
    );
}

export default CustomerSupport;