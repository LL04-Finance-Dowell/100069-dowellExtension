import { Route, Routes } from "react-router-dom";
import Product from "../page/Products/Product";
import ProductDetail from "../page/ProductDetail/ProductDetail";
import Profile from "../page/Profile";
import Favourites from "../page/Favourites";
import Logout from "../page/Logout";
import CustomerSupport from "../page/CustomerSupport";
import AddFavourite from "../page/AddFavourite/AddFavourite";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<Product />} />
      <Route path="/productDetail/:id" element={<ProductDetail />} />
      <Route path="/profiles" element={<Profile />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/customer" element={<CustomerSupport />} />
      <Route path="/addFavourite" element={<AddFavourite />} />
    </Routes>
  );
};
