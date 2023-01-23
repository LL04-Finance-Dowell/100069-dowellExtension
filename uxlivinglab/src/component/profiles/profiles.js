import "./profiles.css"
import "../popup/popup.css"
import { useState } from "react";


function Profiles () {
    const [changes, setChanges] = useState({
        name: "component",
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        show7: false,
        show8: false,
        show9: false,
        show10: false,
        show11: false,
        show12: false,
        show13: false,    
    });
    const hideComponent = (name) =>{
        switch (name) {
            case "show1":
                setChanges({ show1: !changes.show1 });
                break;
            case "show2":
                setChanges({ show2: !changes.show2 });
                break;
            case "show3":
                setChanges({ show3: !changes.show3 });
                break;
            case "show4":
                setChanges({ show4: !changes.show4 });
                break;
            case "show5":
                setChanges({ show5: !changes.show5 });
                break;
            case "show6":
                setChanges({ show6: !changes.show6 });
                break;
            case "show7":
                setChanges({ show7: !changes.show7 });
                break;
            case "show8":
                setChanges({ show8: !changes.show8 });
                break;
            case "show9":
                setChanges({ show9: !changes.show9 });
                break;
            case "show10":
                setChanges({ show10: !changes.show10 });
                break;

            case "show11":
                setChanges({ show11: !changes.show11 });
                break;
            case "show12":
                setChanges({ show12: !changes.show12 });
                break;

            case "show13":
                setChanges({ show13: !changes.show13 });
                break;
                

            default:
                return null;

            }
    }



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
                <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("show1")}>
                    </i>
                    <p> 01. My Profile</p>
                </div>
                {/* condition to see if div is clicked */}
            </div>
            {changes.show1 && <div className="space"></div>}

            <div className="element-container">
                <div className="item">
                <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("show2")}>
                    </i>

                    <p>02.Set Password</p>
                </div>
            </div>
            {changes.show2 && <div className="space"></div>}
                

            <div className="element-container">
                <div className="item">
                <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("show3")}>
                    </i>

                        <p>03.Device IDs</p>
                    </div>
            </div>
            {changes.show3 && <div className="space"></div>}
  

            <div className="element-container">
                <div className="item">
                <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("show4")}>
                    </i>

                    <p>04.Personal IDs</p>
                </div>                
            </div>
            {changes.show4 && <div className="space"></div>}


            <div className="element-container">
                <div className="item">
                <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("show5")}>
                    </i>

                    <p>05.References</p>
                </div>
            </div>
            {changes.show5 && <div className="space"></div>}
    

            <div className="element-container">
                <div className="item">
                <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("show6")}>
                    </i>

                    <p>06.ID Verification</p>
                </div>
                
            </div>
            {changes.show6 && <div className="space"></div>}
    

            <div className="element-container">
                <div className="item">
                <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("show7")}>
                    </i>

                    <p>07.My Organisation</p>
                </div>    
            </div>
            {changes.show7 && <div className="space"></div>}
    


            <div className="element-container">
                <div className="item">
                <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("show8")}>
                    </i>

                    <p>08.Geographic Profile</p>
                </div>
       
            </div>
            {changes.show8 && <div className="space"></div>}
    

            <div className="element-container">
                <div className="item">
                <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("show9")}>
                    </i>

                    <p>09.Demographic Profile</p>
                </div>
            </div>
            {changes.show9 && <div className="space"></div>}
    

            <div className="element-container">
                <div className="item">
                <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("show10")}>
                    </i>

                    <p>10.Psychographic Profile</p>
                </div>
            </div>
            {changes.show10 && <div className="space"></div>}
  

            <div className="element-container">
                <div className="item">
                <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("show11")}>
                    </i>

                    <p>11.Behavioural Profile</p>
                </div>
            </div>
            {changes.show11 && <div className="space"></div>}


            <div className="element-container">
                <div className="item">
                <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("show12")}>
                    </i>

                    <p>12.Usage Profile</p>
                </div>
            </div>
            {changes.show12 && <div className="space"></div>}
 

            <div className="element-container">
                <div className="item">
                <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("show13")}>
                    </i>

                    <p>13.Section Permissions</p>
                </div>
   
            </div>
            {changes.show13 && <div className="space"></div>}
 


        </div>
        </div>
    );

}

export default Profiles;