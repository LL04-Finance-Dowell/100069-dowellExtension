import { Routes, Route } from "react-router-dom";

import Login from "../page/Login";
import CreditSystem from "../page/CreditsSystem";
import Notification from "../page/Notification";
import AnnouncementList from "../page/Announcements/AnnouncementList";
import AnnouncementDetail from "../page/Announcements/AnnouncementDetail";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/payments" element={<CreditSystem />} />
      <Route path="/notifications" element={<Notification />} />
      <Route path="/announcements/:title" element={<AnnouncementList />} />
      <Route path="/announcements/:title/:id" element={<AnnouncementDetail />} />

    </Routes>
  );
};
