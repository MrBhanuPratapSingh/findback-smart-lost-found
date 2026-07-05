import { Link } from "react-router-dom";
import { MapPin, CalendarDays } from "lucide-react";
import StatusBadge from "./StatusBadge";

function ItemCard({ item, dateLabel, type }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="h-44 w-full object-cover"
      />

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-500">{item.category}</p>
          </div>

          <StatusBadge status={item.status} />
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-slate-600">
          {item.description}
        </p>

        <div className="mt-4 space-y-2 text-sm text-slate-600">
          <p className="flex items-center gap-2">
            <MapPin size={16} />
            {item.location}
          </p>

          <p className="flex items-center gap-2">
            <CalendarDays size={16} />
            {dateLabel}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <p className="text-sm text-slate-500">
            Color:{" "}
            <span className="font-medium text-slate-700">{item.color}</span>
          </p>

          <Link
            to={`/item/${type}/${item.id}`}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ItemCard;