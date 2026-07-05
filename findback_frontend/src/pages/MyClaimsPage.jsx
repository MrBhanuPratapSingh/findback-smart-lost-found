import { useEffect, useState } from "react";
import { Clock, FileText } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import StatusBadge from "../components/StatusBadge";
import { claims as defaultClaims } from "../data/mockData";

function MyClaimsPage() {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const savedClaims = JSON.parse(
      localStorage.getItem("findback_claims") || "[]"
    );

    setClaims([...savedClaims, ...defaultClaims]);
  }, []);

  return (
    <MainLayout>
      <section className="mb-6">
        <p className="text-sm font-medium text-blue-600">Claim requests</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">My Claims</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Track your submitted item claims and see whether they are pending,
          approved, or rejected.
        </p>
      </section>

      {claims.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">
            No claims submitted
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            When you claim a matched item, it will appear here.
          </p>
        </div>
      ) : (
        <section className="space-y-4">
          {claims.map((claim) => (
            <article
              key={claim.id}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Claim #{claim.id}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Match ID: {claim.matchId}
                  </p>
                </div>

                <StatusBadge status={claim.status} />
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="text-sm font-semibold text-blue-700">
                    Lost Item
                  </p>
                  <p className="mt-1 font-bold text-slate-900">
                    {claim.lostItemTitle}
                  </p>
                </div>

                <div className="rounded-lg bg-emerald-50 p-4">
                  <p className="text-sm font-semibold text-emerald-700">
                    Found Item
                  </p>
                  <p className="mt-1 font-bold text-slate-900">
                    {claim.foundItemTitle}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                <div className="flex gap-3">
                  <FileText className="mt-0.5 text-slate-500" size={18} />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Message
                    </p>
                    <p className="text-sm text-slate-600">{claim.message}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FileText className="mt-0.5 text-slate-500" size={18} />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Proof Description
                    </p>
                    <p className="text-sm text-slate-600">
                      {claim.proofDescription}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock className="mt-0.5 text-slate-500" size={18} />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Created Date
                    </p>
                    <p className="text-sm text-slate-600">{claim.createdAt}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}
    </MainLayout>
  );
}

export default MyClaimsPage;