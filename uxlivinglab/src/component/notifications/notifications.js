import "./notifications.css"
import "../popup/popup.css"
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../contexts/ContextProvider";


function Notifications () {
    const { show, handleShow} = useStateContext();


    const [arrows, setaArrows] = useState({
        showArrow1: true,
        showArrow2: false,
        showArrow3: false,
        showArrow4: false,
        showArrow5: false,
        showArrow6: false,
        showArrow7: false,
        })
    const [changes, setChanges] = useState({
        name: "component",
        showTeamMember: false,
        showUser: false,
        showPublic: false,
        showUXLivingLab: false,
        showWorkflowAI: false,
        showDigitaQueue: false,
        showUXLive: false,
    });

    const hideComponent = (name) =>{
        switch (name) {
            case "showTeamMember":
                setChanges({ showTeamMember: !changes.showTeamMember });
                break;
            case "showUser":
                setChanges({ showUser: !changes.showUser });
                break;
            case "showPublic":
                setChanges({ showPublic: !changes.showPublic });
                break;
            case "showUXLivingLab":
                setChanges({ showUXLivingLab: !changes.showUXLivingLab });
                break;
            case "showWorkflowAI":
                setChanges({ showWorkflowAI: !changes.showWorkflowAI });
                break;
            case "showDigitaQueue":
                setChanges({ showDigitaQueue: !changes.showDigitaQueue });
                break;
            case "showUXLive":
                setChanges({ showUXLive: !changes.showUXLive });
                break;
            default:
                return null;    
                }
        }
    

    return (
        <div>
        <div className="item">
          <div className="{ props.text }" >
              <button className="logout" style={{width:350}}>
                <i className="button-text" style={{fontSize:20,}}>
                  Notifications
                </i>
              </button>
          </div>
        </div>


        <div id="all">

            <div>
                <p className="texts">Chat Messages</p>
            </div>
            <div className='all-border'>

            <div className="element-container">
                <div className="item" onClick={() => setaArrows({showArrow1: !arrows.showArrow1})}>
                    <i 
                    className={arrows.showArrow1 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    aria-hidden="true"
                    onClick={() => hideComponent("showTeamMember")}>
                    </i>
                    <p className={arrows.showArrow1 ? "selected":"unselected"}>Team Member (009)</p>
                </div>
                {/* condition to see if div is clicked */}
            </div>
            {arrows.showArrow1 && <div className="space"></div>}

            <div className="element-container">
                <div className="item" onClick={() => setaArrows({showArrow2: !arrows.showArrow2})}>
                    <i 
                    className={arrows.showArrow2 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    aria-hidden="true"
                    onClick={() => hideComponent("showUser")}>
                    </i>
                    <p className={arrows.showArrow2 ? "selected":"unselected"}>User (010)</p>
                </div>
                {/* condition to see if div is clicked */}
            </div>
            {arrows.showArrow2 && <div className="space"></div>}

            <div className="element-container">
                <div className="item" onClick={() => setaArrows({showArrow3: !arrows.showArrow3})}>
                    <i 
                    className={arrows.showArrow3 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    aria-hidden="true"
                    onClick={() => hideComponent("showPublic")}>
                    </i>
                    <p className={arrows.showArrow3 ? "selected":"unselected"}>Public (00200)</p>
                </div>
                {/* condition to see if div is clicked */}
            </div>
            {arrows.showArrow3 && <div className="space"></div>}

            <div className="element-container last">
                <div className="item" onClick={() => setaArrows({showArrow4: !arrows.showArrow4})}>
                    <i 
                    className={arrows.showArrow4 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    aria-hidden="true"
                    onClick={() => hideComponent("showUXLivingLab")}>
                    </i>
                    <p className={arrows.showArrow4 ? "selected":"unselected"}>UX Living Lab (00200)</p>
                </div>
                {/* condition to see if div is clicked */}
            </div>
            {arrows.showArrow4 && <div className="space ls"></div>}
            </div>
            <div>
                <p className="texts">Tasks</p>
            </div>
            <div className="all-border">
            <div className="element-container">
                <div className="item" onClick={() => setaArrows({showArrow5: !arrows.showArrow5})}>
                    <i 
                    className={arrows.showArrow5 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    aria-hidden="true"
                    onClick={() => hideComponent("showWorkflowAI")}>
                    </i>
                    <p className={arrows.showArrow5 ? "selected":"unselected"}>Workflow AI (009)</p>
                </div>
                {/* condition to see if div is clicked */}
            </div>
            {arrows.showArrow5 && <div className="space"></div>}

            <div className="element-container">
                <div className="item" onClick={() => setaArrows({showArrow6: !arrows.showArrow6})}>
                    <i 
                    className={arrows.showArrow6 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    aria-hidden="true"
                    onClick={() => hideComponent("showDigitaQueue")}>
                    </i>
                    <p className={arrows.showArrow6 ? "selected":"unselected"}>Digita Queue (010)</p>
                </div>
                {/* condition to see if div is clicked */}
            </div>
            {arrows.showArrow6 && <div className="space"></div>}

            <div className="element-container last">
                <div className="item" onClick={() => setaArrows({showArrow7: !arrows.showArrow7})}>
                    <i 
                    className={arrows.showArrow7 ? "fas inc fa-angles-up" : "fas inc fa-angles-down"}
                    aria-hidden="true"
                    onClick={() => hideComponent("showUXLive")}>
                    </i>
                    <p className={arrows.showArrow7 ? "selected":"unselected"}>UX Live (00200)</p>
                </div>
                {/* condition to see if div is clicked */}
            </div>
            {arrows.showArrow7 && <div className="space ls"></div>}

            </div>
            <div style={{marginTop:"5px"}}></div>

        </div>
        <div style={{ display: "flex", marginLeft: 8 }}>
          <RxCross2
            size={24}
            color="white"
            className="close"
            style={{
              backgroundColor: "red",
              borderRadius: 20,
              marginTop: 4,
              marginRight:300,
              marginBottom:6,                
              left: 0
            }}
            onClick={() => handleShow(!show)}
          />
        </div>


        </div>
      
    );

}

export default Notifications;