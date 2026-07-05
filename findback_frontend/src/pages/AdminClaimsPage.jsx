import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { ClipboardCheck, RefreshCcw, Search } from "lucide-react";
import AdminClaimActionModal from "../components/AdminClaimActionModal";
import AdminClaimDetailsModal from "../components/AdminClaimDetailsModal";
import AdminClaimRow from "../components/AdminClaimRow";
import { approveAdminClaim, fetchAdminClaims, rejectAdminClaim } from "../api/adminApi";
import { adminClaimsMockData } from "../data/adminClaimsMockData";

const AdminClaimsPage = () => {
  const [claims, setClaims] = useState([]);
  const [filters, setFilters] = useState({ keyword: "", status: "ALL" });
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [actionModal, setActionModal] = useState({ open: false, action: "", claim: null });

  const loadClaims = async () => {
    try {
      setLoading(true);
      const response = await fetchAdminClaims(filters.status);
      setClaims(Array.isArray(response) ? response : response?.data || response?.content || []);
    } catch {
      setClaims(adminClaimsMockData);
      toast.error("Backend not connected. Showing sample claims.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClaims();
  }, [filters.status]);

  const filteredClaims = useMemo(() => {
    const keyword = filters.keyword.toLowerCase();
    return claims.filter((claim) => {
      const matchesStatus = filters.status === "ALL" || claim.status === filters.status;
      const text = `${claim.id} ${claim.claimantName} ${claim.claimantEmail} ${claim.itemTitle} ${claim.category} ${claim.location}`.toLowerCase();
      return matchesStatus && text.includes(keyword);
    });
  }, [claims, filters]);

  const updateLocalStatus = (id, status, remarks) => {
    setClaims((prev) =>
      prev.map((claim) => claim.id === id ? { ...claim, status, adminRemarks: remarks } : claim)
    );
  };

  const handleConfirmAction = async (remarks) => {
    const { claim, action } = actionModal;
    try {
      setActionLoading(true);
      if (action === "APPROVE") {
        await approveAdminClaim(claim.id, remarks);
        updateLocalStatus(claim.id, "APPROVED", remarks);
      } else {
        await rejectAdminClaim(claim.id, remarks);
        updateLocalStatus(claim.id, "REJECTED", remarks);
      }
      toast.success("Claim updated successfully");
      setActionModal({ open: false, action: "", claim: null });
    } catch {
      updateLocalStatus(claim.id, action === "APPROVE" ? "APPROVED" : "REJECTED", remarks);
      toast.success("Claim updated in sample data");
      setActionModal({ open: false, action: "", claim: null });
    } finally {
      setActionLoading(false);
    }
  };

  const stats = {
    total: claims.length,
    pending: claims.filter((c) => c.status === "PENDING").length,
    approved: claims.filter((c) => c.status === "APPROVED").length,
    rejected: claims.filter((c) => c.status === "REJECTED").length,
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">Admin Module</p>
          <h1 className="text-2xl font-bold">Claims Approval</h1>
        </div>
        <button onClick={loadClaims} className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white">
          <RefreshCcw size={16} /> Refresh
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard title="Total Claims" value={stats.total} />
        <StatsCard title="Pending" value={stats.pending} />
        <StatsCard title="Approved" value={stats.approved} />
        <StatsCard title="Rejected" value={stats.rejected} />
      </div>

      <div className="grid gap-3 rounded-lg border bg-white p-4 md:grid-cols-[1fr_180px]">
        <label className="relative">
          <Search className="absolute left-3 top-3 text-slate-400" size={18} />
          <input
            value={filters.keyword}
            onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
            placeholder="Search claims"
            className="h-11 w-full rounded-lg border pl-10 pr-3"
          />
        </label>
        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="h-11 rounded-lg border px-3"
        >
          <option value="ALL">All Claims</option>
          <option value="PENDING">Pending</option>
          <option value="APPROVED">Approved</option>
          <option value="REJECTED">Rejected</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-lg border bg-white">
        {loading ? (
          <div className="flex h-60 items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900" />
          </div>
        ) : filteredClaims.length === 0 ? (
          <div className="flex h-60 flex-col items-center justify-center">
            <ClipboardCheck size={40} className="text-slate-400" />
            <p className="mt-3 font-semibold">No claims found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3">Claim</th>
                  <th className="px-4 py-3">Claimant</th>
                  <th className="px-4 py-3">Item</th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClaims.map((claim) => (
                  <AdminClaimRow
                    key={claim.id}
                    claim={claim}
                    onView={setSelectedClaim}
                    onApprove={(c) => setActionModal({ open: true, action: "APPROVE", claim: c })}
                    onReject={(c) => setActionModal({ open: true, action: "REJECT", claim: c })}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <AdminClaimDetailsModal isOpen={Boolean(selectedClaim)} claim={selectedClaim} onClose={() => setSelectedClaim(null)} />
      <AdminClaimActionModal {...actionModal} loading={actionLoading} onClose={() => setActionModal({ open: false, action: "", claim: null })} onConfirm={handleConfirmAction} />
    </div>
  );
};

const StatsCard = ({ title, value }) => (
  <div className="rounded-lg border bg-white p-4">
    <p className="text-sm text-slate-500">{title}</p>
    <p className="mt-2 text-2xl font-bold">{value}</p>
  </div>
);

export default AdminClaimsPage;