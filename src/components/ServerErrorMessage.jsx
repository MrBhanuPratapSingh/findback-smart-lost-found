import { AlertTriangle, RefreshCcw } from "lucide-react";

const ServerErrorMessage = ({ message = "Something went wrong.", onRetry }) => {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-5 text-center">
      <AlertTriangle className="mx-auto text-red-600" size={32} />
      <p className="mt-3 font-semibold text-red-700">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white"
        >
          <RefreshCcw size={16} />
          Retry
        </button>
      )}
    </div>
  );
};

export default ServerErrorMessage;