import { useState } from "react";
import { X } from "lucide-react";

const AdminClaimActionModal = ({ isOpen, action, claim, loading, onClose, onConfirm }) => {
  const [remarks, setRemarks] = useState("");

  if (!isOpen || !claim) return null;

  const isApprove = action === "APPROVE";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
      <div className="w-full max-w-lg rounded-lg bg-white shadow-xl">
        <div className="flex justify-between border-b p-5">
          <h2 className="text-lg font-semibold">{isApprove ? "Approve Claim" : "Reject Claim"}</h2>
          <button onClick={onClose}><X size={18} /></button>
        </div>

        <div className="space-y-4 p-5">
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Claim #{claim.id}</p>
            <p className="font-semibold">{claim.itemTitle}</p>
          </div>

          <textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            placeholder="Write admin remarks"
            rows={4}
            className="w-full rounded-lg border p-3 outline-none focus:border-slate-900"
          />
        </div>

        <div className="flex justify-end gap-3 border-t p-5">
          <button onClick={onClose} className="rounded-lg border px-4 py-2">Cancel</button>
          <button
            disabled={loading}
            onClick={() => onConfirm(remarks)}
            className={`rounded-lg px-4 py-2 text-white ${isApprove ? "bg-emerald-600" : "bg-red-600"}`}
          >
            {loading ? "Saving..." : isApprove ? "Approve" : "Reject"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminClaimActionModal;