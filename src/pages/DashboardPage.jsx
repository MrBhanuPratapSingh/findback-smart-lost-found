import { Link } from "react-router-dom";
import {
  Bell,
  CheckCircle,
  ClipboardList,
  Search,
  ShieldCheck,
} from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import StatsCard from "../components/StatsCard";
import { useAuth } from "../hooks/useAuth";

function DashboardPage() {
  const { user } = useAuth();

  const stats = [
    {
      title: "My Lost Reports",
      value: "3",
      description: "Items reported as lost",
      icon: ClipboardList,
    },
    {
      title: "My Found Reports",
      value: "2",
      description: "Items reported as found",
      icon: Search,
    },
    {
      title: "Possible Matches",
      value: "4",
      description: "Matches waiting for review",
      icon: Bell,
    },
    {
      title: "Pending Claims",
      value: "1",
      description: "Claims under verification",
      icon: ShieldCheck,
    },
    {
      title: "Returned Items",
      value: "5",
      description: "Items successfully returned",
      icon: CheckCircle,
    },
  ];

  return (
    <MainLayout>
      <section className="mb-8">
        <p className="text-sm font-medium text-blue-600">Welcome back</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          {user?.name || "User"} Dashboard
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Track lost reports, found reports, possible matches, and claim
          requests from one place.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            icon={stat.icon}
          />
        ))}
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Quick Actions</h2>
          <p className="mt-1 text-sm text-slate-500">
            Start a new report or check your item recovery progress.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Link
              to="/report-lost"
              className="rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Report Lost Item
            </Link>

            <Link
              to="/report-found"
              className="rounded-lg bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Report Found Item
            </Link>

            <Link
              to="/matches"
              className="rounded-lg border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              View Matches
            </Link>

            <Link
              to="/claims"
              className="rounded-lg border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              View Claims
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">How It Works</h2>

          <div className="mt-5 space-y-4">
            <div>
              <p className="font-semibold text-slate-800">
                1. Report lost or found item
              </p>
              <p className="text-sm text-slate-500">
                Add item details like category, color, location, and date.
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-800">
                2. System finds possible matches
              </p>
              <p className="text-sm text-slate-500">
                Matching is based on category, color, location, date, and
                description.
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-800">
                3. Claim and verify
              </p>
              <p className="text-sm text-slate-500">
                Submit proof and admin verifies before item return.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default DashboardPage;