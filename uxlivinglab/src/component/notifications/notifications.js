import "./notifications.css"
import "../popup/popup.css"
import { useState } from "react";


function Notifications () {
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
        <div class="elementor-text-editor elementor-clearfix">
        <p
          className="auth-button"
          style={{ textAlign: "center" }}
          >
          <b>
            <i style={{ color: "white", fontWeight:'bold' }}>Notifications</i>
          </b>
          </p>{" "}		
        </div>


        <div id="all">
            <div>
                <p className="texts">Chat Messages</p>
            </div>

            <div className="element-container">
                <div className="item">
                    <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("showTeamMember")}>
                    </i>
                    <p>Team Member (009)</p>
                </div>
                {/* condition to see if div is clicked */}
            </div>
            {changes.showTeamMember && <div className="space"></div>}

            <div className="element-container">
                <div className="item">
                    <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("showUser")}>
                    </i>
                    <p>User (010)</p>
                </div>
                {/* condition to see if div is clicked */}
            </div>
            {changes.showUser && <div className="space"></div>}

            <div className="element-container">
                <div className="item">
                    <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("showPublic")}>
                    </i>
                    <p>Public (00200)</p>
                </div>
                {/* condition to see if div is clicked */}
            </div>
            {changes.showPublic && <div className="space"></div>}

            <div className="element-container">
                <div className="item">
                    <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("showUXLivingLab")}>
                    </i>
                    <p>UX Living Lab (00200)</p>
                </div>
                {/* condition to see if div is clicked */}
            </div>
            {changes.showUXLivingLab && <div className="space"></div>}

            <div>
                <p className="texts">Tasks</p>
            </div>

            <div className="element-container">
                <div className="item">
                    <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("showWorkflowAI")}>
                    </i>
                    <p>Workflow AI (009)</p>
                </div>
                {/* condition to see if div is clicked */}
            </div>
            {changes.showWorkflowAI && <div className="space"></div>}

            <div className="element-container">
                <div className="item">
                    <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("showDigitaQueue")}>
                    </i>
                    <p>Digita Queue (010)</p>
                </div>
                {/* condition to see if div is clicked */}
            </div>
            {changes.showDigitaQueue && <div className="space"></div>}

            <div className="element-container">
                <div className="item">
                    <i 
                    className="fas inc fa-angles-down"
                    aria-hidden="true"
                    onClick={() => hideComponent("showUXLive")}>
                    </i>
                    <p>UX Live (00200)</p>
                </div>
                {/* condition to see if div is clicked */}
            </div>
            {changes.showUXLive && <div className="space"></div>}


        </div>


        </div>
      
    );

}

export default Notifications;