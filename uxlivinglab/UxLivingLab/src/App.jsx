import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Logout from "./page/Logout";
import Product from "./page/Product";

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
            // backgroundColor: "red",
          }}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/products" element={<Product />} />
          </Routes>
        </div>
        <SideBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
