import "./customer_support.css"
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";


function CustomerSupport () {
  const { show, handleShow} = useStateContext();

    return (
      <div className="customer">
        <div className="item">
          <div className="{ props.text }" >
              <button className="logout" style={{width:270, marginLeft:8}}>
                <i className="button-text" style={{fontSize:20,}}>
                  Customer Support
                </i>
              </button>
          </div>
        </div>
  <div className="customersupport" style={{marginLeft:0}}>
  {/* title="Customer Support iframe"
  src="https://workflowai.online/support/" */}
  <div className="elementor-widget-container" style={{marginRight:10}}>
                      <iframe
                        id="frame"
                        title="Customer Support iframe"
                        style={{ alignItems:'center'}}
                        src="https://workflowai.online/support/"
                        width="270"
                        height="700"
                        allow="fullscreen"
                      ></iframe>{" "}
                    </div>

  <div class="elementor-divider"  style={{width:"270px",borderTop:"1.5px solid red",marginTop:'5px',marginLeft:30}} 
>		</div>
    	<div class="elementor-element elementor-element-82d1611 elementor-button-align-stretch elementor-widget elementor-widget-form" data-id="82d1611" data-element_type="widget" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
    <div class="elementor-widget-container">
      <form class="elementor-form" method="post" name="Form1">
        <input type="hidden" name="post_id" value="8155"/>
        <input type="hidden" name="form_id" value="82d1611"/>
        <input type="hidden" name="referer_title" value="uxlivinglab - innovating from people's mind"/>
        <input type="hidden" name="queried_id" value="8155"/>

        <div class="elementor-form-fields-wrapper elementor-labels-above" style={{marginLeft:30}}>
            <div class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
              <label for="form-field-level3name" class="elementor-field-label">Select Product</label>
              <div class="elementor-field elementor-select-wrapper ">
                <select name="form_fields[level3name]" id="form-field-level3name" class="elementor-field-textual elementor-size-sm" style={{width:284,height:15}}>
                  <option value="Product 01">Product 01</option>
                  <option value="Product 02">Product 02</option>
                  <option value="Product 03">Product 03</option>
                </select>
              </div>
            </div>
            <div class="button-div">
              <button type="submit" 
          style={{cursor:"pointer",width: 230,fontSize:14,height: "13px",borderWidth:"1px",backgroundColor:"#7a7a7a",color:"#ffffff"}}
          class="elementor-field-textual bt" id="connectwebsite">
                connect to Website
                </button>
            </div>
        </div>
      </form>
    </div>
	</div>
  <div class="elementor-divider"  style={{width:"270px",borderTop:"1.5px solid red",marginTop:'5px',marginLeft:30}} 
  >
      {/* <hr></hr> */}
    </div>
  	<div class="elementor-widget-container">
		<form class="elementor-form" method="post" name="Form1">
      <input type="hidden" name="post_id" value="8155"/>
      <input type="hidden" name="form_id" value="2d0c3a0"/>
      <input type="hidden" name="referer_title" value="uxlivinglab - innovating from people's mind"/>
			<input type="hidden" name="queried_id" value="8155"/>

      <div class="elementor-form-fields-wrapper elementor-labels-above" style={{marginLeft:30}}>
				<div class="elementor-field-type-select elementor-field-group elementor-column elementor-field-group-level3name elementor-col-100">
						<div></div>
            <label for="form-field-level3name" class="elementor-field-label">
					    Select Product room							</label>
					<div class="elementor-field elementor-select-wrapper ">
            <select name="form_fields[level3name]" id="form-field-level3name" class="elementor-field-textual elementor-size-sm" style={{width:284}}>
						  <option value="Product 01">Product 01</option>
						  <option value="Product 02">Product 02</option>
						  <option value="Product 03">Product 03</option>
				    </select>
          </div>
			  </div>
				<div class="button-div">
		      <button type="submit" 
          style={{cursor:"pointer",width: 230,fontSize:14,height: "13px",borderWidth:"1px",backgroundColor:"#7a7a7a",color:"#ffffff"}}
          class="elementor-field-textual bt" id="chatcustomersupport">
              Chat with Customer Support
		      </button>
	      </div>
      </div>
    </form>
	  </div>
    </div>
    <div
    style={{height:"40px"}}></div>
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
              left: 0,
              marginBottom: 10,
              marginLeft:5
            }}
            onClick={() => handleShow(!show)}
          />
        </div>

    </div>
    );
}

export default CustomerSupport;