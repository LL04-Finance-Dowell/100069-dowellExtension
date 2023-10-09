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
import CustomerSupport from "../page/CustomerSupport";
import AddFavourite from "../page/AddFavourite/AddFavourite";
import AnnouncementList from "../page/Announcements/AnnouncementList";
import AnnouncementDetail from "../page/Announcements/AnnouncementDetail";


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
      <Route path="/customer" element={<CustomerSupport />} />
      <Route path="/addFavourite" element={<AddFavourite />} />
      <Route path="/announcements/:title" element={<AnnouncementList />} />
      <Route path="/announcements/:title/:id" element={<AnnouncementDetail />} />


      <Route
        path=""
        element={<Navigate to={sessionId ? "/favourites" : "/login"} />}
      />
      <Route
        path="*"
        element={sessionId ? <Favourites /> : <Login />}
        // element={<Navigate to={sessionId ? "/favourites" : "/login"} />}
      />
    </Routes>
  );
};
