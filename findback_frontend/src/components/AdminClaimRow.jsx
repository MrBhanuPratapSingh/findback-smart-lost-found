import { CheckCircle, Eye, XCircle } from "lucide-react";

const badgeStyles = {
  PENDING: "bg-amber-50 text-amber-700 ring-amber-200",
  APPROVED: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  REJECTED: "bg-red-50 text-red-700 ring-red-200",
};

const ClaimBadge = ({ status }) => (
  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${badgeStyles[status]}`}>
    {status}
  </span>
);

const AdminClaimRow = ({ claim, onView, onApprove, onReject }) => {
  const isPending = claim.status === "PENDING";

  return (
    <tr className="border-b border-slate-200 hover:bg-slate-50">
      <td className="px-4 py-4">
        <p className="font-semibold text-slate-900">#{claim.id}</p>
        <p className="text-xs text-slate-500">{claim.createdAt}</p>
      </td>
      <td className="px-4 py-4">
        <p className="font-medium text-slate-900">{claim.claimantName}</p>
        <p className="text-xs text-slate-500">{claim.claimantEmail}</p>
      </td>
      <td className="px-4 py-4">
        <p className="font-medium text-slate-900">{claim.itemTitle}</p>
        <p className="text-xs text-slate-500">{claim.category}</p>
      </td>
      <td className="px-4 py-4 text-sm text-slate-700">{claim.location}</td>
      <td className="px-4 py-4">
        <ClaimBadge status={claim.status} />
      </td>
      <td className="px-4 py-4">
        <div className="flex justify-end gap-2">
          <button onClick={() => onView(claim)} className="rounded-md border p-2">
            <Eye size={16} />
          </button>
          <button disabled={!isPending} onClick={() => onApprove(claim)} className="rounded-md border border-emerald-200 p-2 text-emerald-700 disabled:opacity-40">
            <CheckCircle size={16} />
          </button>
          <button disabled={!isPending} onClick={() => onReject(claim)} className="rounded-md border border-red-200 p-2 text-red-700 disabled:opacity-40">
            <XCircle size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AdminClaimRow;