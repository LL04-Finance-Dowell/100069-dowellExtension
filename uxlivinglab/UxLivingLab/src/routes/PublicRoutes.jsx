import { Routes, Route } from "react-router-dom";

import Login from "../page/Login";
import CreditSystem from "../page/CreditsSystem";
import Notification from "../page/Notification";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/payments" element={<CreditSystem />} />
      <Route path="/notifications" element={<Notification />} />
    </Routes>
  );
};
