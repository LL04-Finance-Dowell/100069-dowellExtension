import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/root";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          borderRadius: 20,
        }}
      >
        <div
          style={{
            marginRight: "auto",
            width: "100%",
            borderRadius: 20,
          }}
        >
          <AppRouter />
        </div>
        <SideBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
