import "./profiles.css"
import "../popup/popup.css"
function Profiles () {
    return (
        <div>
        <div class="elementor-text-editor elementor-clearfix">
        <p
          className="auth-button"
          style={{ textAlign: "center" }}
          >
          <b>
            <i style={{ color: "white", fontWeight:'bold' }}>My Profile</i>
          </b>
          </p>{" "}		
        </div>
      
        <div id="all">
            <div className="element-container">
                <div className="item">
                    <p>01.My Profile</p>
                </div>
                <div className="space"></div>
            </div>

            <div className="element-container">
                <div className="item">
                    <p>02.Set Password</p>
                </div>
                <div className="space"></div>
                
            </div>

            <div className="element-container">
                <div className="item">
                        <p>03.Device IDs</p>
                    </div>
                    <div className="space"></div>
  
            </div>

            <div className="element-container">
                <div className="item">
                    <p>04.Personal IDs</p>
                </div>
                <div className="space"></div>
                
            </div>

            <div className="element-container">
                <div className="item">
                    <p>05.References</p>
                </div>
                <div className="space"></div>
    
            </div>

            <div className="element-container">
                <div className="item">
                    <p>06.ID Verification</p>
                </div>
                <div className="space"></div>
    
                
            </div>

            <div className="element-container">
                <div className="item">
                    <p>07.My Organisation</p>
                </div>
                <div className="space"></div>
    
    
            </div>

            <div className="element-container">
                <div className="item">
                    <p>08.Geographic Profile</p>
                </div>
                <div className="space"></div>
    
       
            </div>

            <div className="element-container">
                <div className="item">
                    <p>09.Demographic Profile</p>
                </div>
                <div className="space"></div>
    
            </div>

            <div className="element-container">
                <div className="item">
                    <p>10.Psychographic Profile</p>
                </div>
                <div className="space"></div>
  
            </div>

            <div className="element-container">
                <div className="item">
                    <p>11.Behavioural Profile</p>
                </div>
                <div className="space"></div>

            </div>

            <div className="element-container">
                <div className="item">
                    <p>12.Usage Profile</p>
                </div>
                <div className="space"></div>
 
            </div>

            <div className="element-container">
                <div className="item">
                    <p>13.Section Permissions</p>
                </div>
                <div className="space"></div>
 
   
            </div>


        </div>
        </div>
    );

}

export default Profiles;