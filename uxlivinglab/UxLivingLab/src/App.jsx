import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            marginRight: "auto",
            backgroundColor: "yellow",
            width: "100%",
          }}
        >
          Hello WOrld
        </div>
        <SideBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
