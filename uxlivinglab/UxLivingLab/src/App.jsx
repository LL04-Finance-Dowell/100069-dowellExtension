import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Logout from "./page/Logout";
import Product from "./page/Products/Product";
import Notification from "./page/Notification";
import Favourites from "./page/Favourites";
import ProductDetail from "./page/ProductDetail/ProductDetail";
import CreditSystem from "./page/CreditsSystem";
import Profile from "./page/Profile";

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
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/productDetail/:id" element={<ProductDetail />} />
            <Route path="/payments" element={<CreditSystem />} />
            <Route path="/profiles" element={<Profile />} />
          </Routes>
        </div>
        <SideBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
