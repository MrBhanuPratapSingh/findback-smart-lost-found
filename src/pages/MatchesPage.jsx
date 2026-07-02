import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { CalendarDays, MapPin, XCircle } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import MatchScoreBadge from "../components/MatchScoreBadge";
import StatusBadge from "../components/StatusBadge";
import { matches as defaultMatches } from "../data/mockData";

function MatchesPage() {
  const savedMatches = JSON.parse(localStorage.getItem("findback_matches") || "[]");

  const [matches, setMatches] = useState([...savedMatches, ...defaultMatches]);

  const handleReject = (matchId) => {
    const updatedMatches = matches.map((match) =>
      match.id === matchId ? { ...match, status: "REJECTED" } : match
    );

    setMatches(updatedMatches);
    localStorage.setItem("findback_matches", JSON.stringify(updatedMatches));

    toast.success("Match rejected");
  };

  const handleCreateClaim = (match) => {
    const oldClaims = JSON.parse(localStorage.getItem("findback_claims") || "[]");

    const newClaim = {
      id: Date.now(),
      matchId: match.id,
      lostItemTitle: match.lostItem.title,
      foundItemTitle: match.foundItem.title,
      message: "This item may belong to me.",
      proofDescription: "Proof will be added in claim module.",
      status: "PENDING",
      createdAt: new Date().toISOString().slice(0, 10),
    };

    const updatedClaims = [newClaim, ...oldClaims];

    localStorage.setItem("findback_claims", JSON.stringify(updatedClaims));
    toast.success("Claim request created");
  };

  return (
    <MainLayout>
      <section className="mb-6">
        <p className="text-sm font-medium text-blue-600">Smart matching</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Possible Matches
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Review possible matches between lost and found item reports.
        </p>
      </section>

      {matches.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">
            No matches available
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Matches will appear here when lost and found reports are similar.
          </p>
        </div>
      ) : (
        <section className="space-y-5">
          {matches.map((match) => (
            <article
              key={match.id}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Match #{match.id}
                  </h2>
                  <p className="text-sm text-slate-500">
                    Created on {match.createdAt}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <MatchScoreBadge score={match.matchScore} />
                  <StatusBadge status={match.status} />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200 p-4">
                  <p className="mb-3 text-sm font-semibold text-blue-600">
                    Lost Item
                  </p>

                  <div className="flex gap-4">
                    <img
                      src={match.lostItem.imageUrl}
                      alt={match.lostItem.title}
                      className="h-24 w-24 rounded-lg object-cover"
                    />

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {match.lostItem.title}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {match.lostItem.category} | {match.lostItem.color}
                      </p>

                      <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                        <MapPin size={15} />
                        {match.lostItem.location}
                      </p>

                      <p className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                        <CalendarDays size={15} />
                        Lost on {match.lostItem.lostDate}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 p-4">
                  <p className="mb-3 text-sm font-semibold text-emerald-600">
                    Found Item
                  </p>

                  <div className="flex gap-4">
                    <img
                      src={match.foundItem.imageUrl}
                      alt={match.foundItem.title}
                      className="h-24 w-24 rounded-lg object-cover"
                    />

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {match.foundItem.title}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {match.foundItem.category} | {match.foundItem.color}
                      </p>

                      <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                        <MapPin size={15} />
                        {match.foundItem.location}
                      </p>

                      <p className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                        <CalendarDays size={15} />
                        Found on {match.foundItem.foundDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-100 pt-5">
                <button
                  type="button"
                  onClick={() => handleCreateClaim(match)}
                  disabled={match.status === "REJECTED"}
                  className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                >
                  Create Claim
                </button>

                <button
                  type="button"
                  onClick={() => handleReject(match.id)}
                  disabled={match.status === "REJECTED"}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <XCircle size={16} />
                  Reject Match
                </button>

                <Link
                  to="/claims"
                  className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  View Claims
                </Link>
              </div>
            </article>
          ))}
        </section>
      )}
    </MainLayout>
  );
}

export default MatchesPage;