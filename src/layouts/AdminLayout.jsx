import { LayoutDashboard, ClipboardCheck, LogOut } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AdminLayout = ({ children }) => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex">
        <aside className="min-h-screen w-64 bg-slate-900 p-5 text-white">
          <h1 className="mb-8 text-xl font-bold">FindBack Admin</h1>

          <nav className="space-y-2">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${
                  isActive ? "bg-white text-slate-900" : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <LayoutDashboard size={18} />
              Dashboard
            </NavLink>

            <NavLink
              to="/admin/claims"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${
                  isActive ? "bg-white text-slate-900" : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <ClipboardCheck size={18} />
              Claims Approval
            </NavLink>

            <button
              type="button"
              onClick={logout}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800"
            >
              <LogOut size={18} />
              Logout
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-6">{children || <Outlet />}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
