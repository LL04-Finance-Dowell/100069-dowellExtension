import "./profiles.css"
import "../popup/popup.css"
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";


function Profiles () {

    const [arrows, setaArrows] = useState({
        showArrow1: true,
        showArrow2: false,
        showArrow3: false,
        showArrow4: false,
        showArrow5: false,
        showArrow6: false,
        showArrow7: false,
        showArrow8: false,
        showArrow9: false,
        showArrow10: false,
        showArrow11: false,
        showArrow12: false,
        showArrow13: false,

    })

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
          style={{ textAlign: "center", width:"300px",marginLeft:"45px" }}
          >
          <b>
            <i style={{ color: "white", fontWeight:'bold' }}>My Profile</i>
          </b>
          </p>{" "}		
        </div>
      
        <div id="all">
            <div className='all-border'>
            <div className="element-container">
                
                <div className="item" onClick={() => setaArrows({showArrow1: !arrows.showArrow1})} 
>
                <i 
                    // className="fas inc fa-angles-up"s inc fa-angles-up" : "fas inc fa-angles-up"}
                    aria-hidden="true"
                    className={arrows.showArrow1 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    onClick={() => hideComponent("show1")}
                    >
                    </i>
                    <p className={arrows.showArrow1 ? "selected":"unselected"}> 01. My Profile</p>
                </div>
                {/* condition to see if div is clicked */}
            </div>
            {arrows.showArrow1 && <div className="space"></div>}

            <div className="element-container">
                <div className="item" onClick={() => setaArrows({showArrow2: !arrows.showArrow2})}>
                <i 
                    aria-hidden="true"
                    className={arrows.showArrow2 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    onClick={() => hideComponent("show2")}>
                    </i>

                    <p className={arrows.showArrow2 ? "selected":"unselected"} >02.Set Password</p>
                </div>
            </div>
            {arrows.showArrow2 && <div className="space"></div>}
                

            <div className="element-container">
                <div className="item" onClick={() => setaArrows({showArrow3: !arrows.showArrow3})}>
                <i 
                    aria-hidden="true"
                    className={arrows.showArrow3 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    onClick={() => hideComponent("show3")}>
                    </i>

                        <p className={arrows.showArrow3 ? "selected":"unselected"}>03.Device IDs</p>
                    </div>
            </div>
            {arrows.showArrow3 && <div className="space"></div>}
  

            <div className="element-container">
                <div className="item" onClick={() => setaArrows({showArrow4: !arrows.showArrow4})}>
                <i 
                    aria-hidden="true"
                    className={arrows.showArrow4 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    onClick={() => hideComponent("show4")}>
                    </i>

                    <p className={arrows.showArrow4 ? "selected":"unselected"}>04.Personal IDs</p>
                </div>                
            </div>
            {arrows.showArrow4 && <div className="space"></div>}


            <div className="element-container">
                <div className="item" onClick={() => setaArrows({showArrow5: !arrows.showArrow5})}>
                <i 
                    aria-hidden="true"
                    className={arrows.showArrow5 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    onClick={() => hideComponent("show5")}>
                    </i>

                    <p className={arrows.showArrow5 ? "selected":"unselected"}>05.References</p>
                </div>
            </div>
            {arrows.showArrow5 && <div className="space"></div>}
    

            <div className="element-container">
                <div className="item" onClick={() => setaArrows({showArrow6: !arrows.showArrow6})}>
                <i 
                    aria-hidden="true"
                    className={arrows.showArrow6 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    onClick={() => hideComponent("show6")}>
                    </i>

                    <p className={arrows.showArrow6 ? "selected":"unselected"}>06.ID Verification</p>
                </div>
                
            </div>
            {arrows.showArrow6  && <div className="space"></div>}
    

            <div className="element-container">
                <div className="item" onClick={() => setaArrows({showArrow7: !arrows.showArrow7})}>
                <i 
                    aria-hidden="true"
                    className={arrows.showArrow7 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    onClick={() => hideComponent("show7")}>
                    </i>

                    <p className={arrows.showArrow7 ? "selected":"unselected"}>07.My Organisation</p>
                </div>    
            </div>
            {arrows.showArrow7  && <div className="space"></div>}
    


            <div className="element-container">
                <div className="item" onClick={() => setaArrows({showArrow8: !arrows.showArrow8})}>
                <i 
                    aria-hidden="true"
                    className={arrows.showArrow8 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    onClick={() => hideComponent("show8")}>
                    </i>

                    <p className={arrows.showArrow8 ? "selected":"unselected"}>08.Geographic Profile</p>
                </div>
       
            </div>
            {arrows.showArrow8  && <div className="space"></div>}
    

            <div className="element-container">
                <div className="item" onClick={() => setaArrows({showArrow9: !arrows.showArrow9})}>
                <i 
                    aria-hidden="true"
                    className={arrows.showArrow9 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    onClick={() => hideComponent("show9")}>
                    </i>

                    <p className={arrows.showArrow9 ? "selected":"unselected"}>09.Demographic Profile</p>
                </div>
            </div>
            {arrows.showArrow9 && <div className="space"></div>}
    

            <div className="element-container">
                <div className="item" onClick={() => setaArrows({showArrow10: !arrows.showArrow10})}>
                <i 
                    aria-hidden="true"
                    className={arrows.showArrow10 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    onClick={() => hideComponent("show10")}>
                    </i>

                    <p className={arrows.showArrow10 ? "selected":"unselected"}>10.Psychographic Profile</p>
                </div>
            </div>
            {arrows.showArrow10 && <div className="space"></div>}
  

            <div className="element-container">
                <div className="item" onClick={() => setaArrows({showArrow11: !arrows.showArrow11})}>
                <i 
                    aria-hidden="true"
                    className={arrows.showArrow11 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    onClick={() => hideComponent("show11")}>
                    </i>

                    <p className={arrows.showArrow11 ? "selected":"unselected"}>11.Behavioural Profile</p>
                </div>
            </div>
            {arrows.showArrow11 && <div className="space"></div>}


            <div className="element-container">
                <div className="item" onClick={() => setaArrows({showArrow12: !arrows.showArrow12})}>
                <i 
                    aria-hidden="true"
                    className={arrows.showArrow12 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    onClick={() => hideComponent("show12")}>
                    </i>

                    <p className={arrows.showArrow12 ? "selected":"unselected"}>12.Usage Profile</p>
                </div>
            </div>
            {arrows.showArrow12 && <div className="space"></div>}
 

            <div className="element-container last">
                <div className="item" onClick={() => setaArrows({showArrow13: !arrows.showArrow13})}>
                <i 
                    aria-hidden="true"
                    className={arrows.showArrow13 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    onClick={() => hideComponent("show13")}>
                    </i>

                    <p className={arrows.showArrow13 ? "selected":"unselected"}>13.Section Permissions</p>
                </div>
   
            </div>
            {arrows.showArrow13  && <div className="space ls"></div>}
 
            </div>

            <div class="button-div">
              <button type="submit" 
              style={{width: "350px",height: "13px",borderWidth:"1px",backgroundColor:"#7a7a7a",color:"#ffffff"}}
              class="elementor-field-textual bt" id="connectwebsite">
                Edit my profile
                </button>
            </div>


            <div onClick={() => window.close()}>
          <RxCross2
            size={24}
            color="white"
            className="close"
            style={{
              backgroundColor: "red",
              borderRadius: 20,
              marginTop: 4,
              marginRight: 350,
              left: 0,
            }}
          />
            </div>

        </div>
        </div>
    );

}

export default Profiles;