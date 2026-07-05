import { ClipboardCheck, PackageCheck, Search, Users } from "lucide-react";

const stats = [
  { title: "Total Users", value: 24, icon: Users },
  { title: "Lost Items", value: 18, icon: Search },
  { title: "Found Items", value: 15, icon: PackageCheck },
  { title: "Pending Claims", value: 6, icon: ClipboardCheck },
];

const AdminDashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-slate-500">Admin Module</p>
        <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
        <p className="mt-1 text-sm text-slate-600">
          Monitor users, item reports, matches, and pending claim approvals.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-500">{item.title}</p>
                <Icon size={20} className="text-slate-500" />
              </div>
              <p className="mt-3 text-2xl font-bold text-slate-900">{item.value}</p>
            </div>
          );
        })}
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-slate-900">Admin Actions</h2>
        <p className="mt-1 text-sm text-slate-600">
          Use the sidebar to review pending claims and manage the system.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
