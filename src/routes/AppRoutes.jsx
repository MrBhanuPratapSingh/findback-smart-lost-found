import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import ReportLostPage from "../pages/ReportLostPage";
import LostItemsPage from "../pages/LostItemsPage";
import ReportFoundPage from "../pages/ReportFoundPage";
import FoundItemsPage from "../pages/FoundItemsPage";
import ItemDetailsPage from "../pages/ItemDetailsPage";
import MatchesPage from "../pages/MatchesPage";
import MyClaimsPage from "../pages/MyClaimsPage";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import AdminClaimsPage from "../pages/AdminClaimsPage";
import NotFoundPage from "../pages/NotFoundPage";
import UnauthorizedPage from "../pages/UnauthorizedPage";
import NotificationsPage from "../pages/NotificationsPage";
import ProfilePage from "../pages/ProfilePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
      <Route path="/report-lost" element={<PrivateRoute><ReportLostPage /></PrivateRoute>} />
      <Route path="/lost-items" element={<PrivateRoute><LostItemsPage /></PrivateRoute>} />
      <Route path="/report-found" element={<PrivateRoute><ReportFoundPage /></PrivateRoute>} />
      <Route path="/found-items" element={<PrivateRoute><FoundItemsPage /></PrivateRoute>} />
      <Route path="/item/:type/:id" element={<PrivateRoute><ItemDetailsPage /></PrivateRoute>} />
      <Route path="/matches" element={<PrivateRoute><MatchesPage /></PrivateRoute>} />
      <Route path="/claims" element={<PrivateRoute><MyClaimsPage /></PrivateRoute>} />
      <Route path="/notifications" element={<PrivateRoute><NotificationsPage /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayout>
              <AdminDashboardPage />
            </AdminLayout>
          </AdminRoute>
        }
      />

      <Route
        path="/admin/claims"
        element={
          <AdminRoute>
            <AdminLayout>
              <AdminClaimsPage />
            </AdminLayout>
          </AdminRoute>
        }
      />

      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
