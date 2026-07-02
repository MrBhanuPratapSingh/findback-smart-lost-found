import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import ReportLostPage from "../pages/ReportLostPage";
import LostItemsPage from "../pages/LostItemsPage";
import ReportFoundPage from "../pages/ReportFoundPage";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/report-lost"
        element={
          <PrivateRoute>
            <ReportLostPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/lost-items"
        element={
          <PrivateRoute>
            <LostItemsPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/report-found"
        element={
          <PrivateRoute>
            <ReportFoundPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;