import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Logout from "./page/Logout";
import Product from "./page/Product";
import Notification from "./page/Notification";

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
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/products" element={<Product />} />
            <Route path="/notifications" element={<Notification />} />
          </Routes>
        </div>
        <SideBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
