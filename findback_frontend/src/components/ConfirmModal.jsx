import { X } from "lucide-react";

const ConfirmModal = ({ isOpen, title, message, confirmText = "Confirm", loading, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
        <div className="flex justify-between border-b p-5">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose}><X size={18} /></button>
        </div>
        <p className="p-5 text-sm text-slate-600">{message}</p>
        <div className="flex justify-end gap-3 border-t p-5">
          <button onClick={onClose} className="rounded-lg border px-4 py-2">Cancel</button>
          <button disabled={loading} onClick={onConfirm} className="rounded-lg bg-slate-900 px-4 py-2 text-white">
            {loading ? "Please wait..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;