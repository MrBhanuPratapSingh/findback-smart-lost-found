import { X } from "lucide-react";

const InfoBlock = ({ label, value }) => (
  <div>
    <p className="text-xs font-semibold uppercase text-slate-500">{label}</p>
    <p className="mt-1 text-sm text-slate-900">{value || "N/A"}</p>
  </div>
);

const AdminClaimDetailsModal = ({ isOpen, claim, onClose }) => {
  if (!isOpen || !claim) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white shadow-xl">
        <div className="flex justify-between border-b p-5">
          <h2 className="text-lg font-semibold">Claim #{claim.id}</h2>
          <button onClick={onClose}><X size={18} /></button>
        </div>

        <div className="space-y-6 p-5">
          <section className="grid gap-4 rounded-lg border p-4 md:grid-cols-2">
            <InfoBlock label="Name" value={claim.claimantName} />
            <InfoBlock label="Email" value={claim.claimantEmail} />
            <InfoBlock label="Phone" value={claim.claimantPhone} />
            <InfoBlock label="Status" value={claim.status} />
          </section>

          <section className="grid gap-4 rounded-lg border p-4 md:grid-cols-2">
            <InfoBlock label="Item" value={claim.itemTitle} />
            <InfoBlock label="Category" value={claim.category} />
            <InfoBlock label="Location" value={claim.location} />
            <InfoBlock label="Match Score" value={claim.matchScore ? `${claim.matchScore}%` : "N/A"} />
          </section>

          <section className="rounded-lg border p-4">
            <InfoBlock label="Message" value={claim.message} />
            <div className="mt-4">
              <InfoBlock label="Proof Description" value={claim.proofDescription} />
            </div>
            <div className="mt-4">
              <InfoBlock label="Admin Remarks" value={claim.adminRemarks} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminClaimDetailsModal;