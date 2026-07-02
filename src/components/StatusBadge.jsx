function StatusBadge({ status }) {
  const styles = {
    OPEN: "bg-blue-50 text-blue-700",
    MATCHED: "bg-amber-50 text-amber-700",
    RETURNED: "bg-emerald-50 text-emerald-700",
    CLOSED: "bg-slate-100 text-slate-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || styles.OPEN
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;