import { Link, NavLink, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`;

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/dashboard" className="text-xl font-bold text-slate-900">
          FindBack
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/report-lost" className={linkClass}>
            Report Lost
          </NavLink>
          <NavLink to="/report-found" className={linkClass}>
            Report Found
          </NavLink>
          <NavLink to="/lost-items" className={linkClass}>
            Lost Items
          </NavLink>
          <NavLink to="/found-items" className={linkClass}>
            Found Items
          </NavLink>
          <NavLink to="/matches" className={linkClass}>
            Matches
          </NavLink>
          <NavLink to="/claims" className={linkClass}>
            Claims
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-slate-800">
              {user?.name || "User"}
            </p>
            <p className="text-xs text-slate-500">{user?.role}</p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;