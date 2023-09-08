import { Navigate, Route, Routes } from "react-router-dom";
import Product from "../page/Products/Product";
import ProductDetail from "../page/ProductDetail/ProductDetail";
import Profile from "../page/Profile";
import Favourites from "../page/Favourites";
import Login from "../page/Login";
import Logout from "../page/Logout";
import CreditSystem from "../page/CreditsSystem";
import Notification from "../page/Notification";
import { useStateContext } from "../contexts/Context";

export const AppRouter = () => {
  const { sessionId } = useStateContext();

  return (
    <Routes>
      <Route path="/products" element={<Product />} />
      <Route path="/productDetail/:id" element={<ProductDetail />} />
      <Route path="/profiles" element={<Profile />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/payments" element={<CreditSystem />} />
      <Route path="/notifications" element={<Notification />} />
      {/* <Route path="/customer" element={<Customer />} /> */}
      <Route
        path="/"
        element={<Navigate to={sessionId ? "/favourites" : "/login"} replace />}
      />
    </Routes>
  );
};
