function MatchScoreBadge({ score }) {
  let style = "bg-slate-100 text-slate-700";

  if (score >= 80) {
    style = "bg-emerald-50 text-emerald-700";
  } else if (score >= 60) {
    style = "bg-amber-50 text-amber-700";
  } else {
    style = "bg-red-50 text-red-700";
  }

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-bold ${style}`}>
      {score}% Match
    </span>
  );
}

export default MatchScoreBadge;