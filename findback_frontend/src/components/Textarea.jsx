function Textarea({ label, error, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-slate-700">{label}</label>

      <textarea
        className={`min-h-28 w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none transition
        ${
          error
            ? "border-red-400 focus:border-red-500"
            : "border-slate-300 focus:border-blue-600"
        }`}
        {...props}
      />

      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

export default Textarea;