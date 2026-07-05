import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, MapPin, Palette, Tag, User } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import StatusBadge from "../components/StatusBadge";
import { foundItems as defaultFoundItems, lostItems as defaultLostItems } from "../data/mockData";

function ItemDetailsPage() {
  const { type, id } = useParams();
  const navigate = useNavigate();

  const savedLostItems = JSON.parse(
    localStorage.getItem("findback_lost_items") || "[]"
  );

  const savedFoundItems = JSON.parse(
    localStorage.getItem("findback_found_items") || "[]"
  );

  const allLostItems = [...savedLostItems, ...defaultLostItems];
  const allFoundItems = [...savedFoundItems, ...defaultFoundItems];

  const items = type === "lost" ? allLostItems : allFoundItems;

  const item = items.find((currentItem) => String(currentItem.id) === String(id));

  if (!item) {
    return (
      <MainLayout>
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">Item not found</h1>
          <p className="mt-2 text-slate-500">
            The item you are looking for does not exist.
          </p>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mt-5 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </MainLayout>
    );
  }

  const dateLabel = type === "lost" ? "Lost Date" : "Found Date";
  const itemDate = type === "lost" ? item.lostDate : item.foundDate;
  const pageTitle = type === "lost" ? "Lost Item Details" : "Found Item Details";
  const backLink = type === "lost" ? "/lost-items" : "/found-items";

  return (
    <MainLayout>
      <section className="mb-6">
        <Link
          to={backLink}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft size={16} />
          Back to {type === "lost" ? "lost items" : "found items"}
        </Link>

        <p className="mt-5 text-sm font-medium text-blue-600">{pageTitle}</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">{item.title}</h1>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="h-80 w-full object-cover"
          />

          <div className="p-6">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm text-slate-500">{item.category}</p>
              </div>

              <StatusBadge status={item.status} />
            </div>

            <p className="text-slate-700">{item.description}</p>
          </div>
        </div>

        <aside className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Item Information</h2>

          <div className="mt-5 space-y-4">
            <div className="flex items-start gap-3">
              <Tag className="mt-0.5 text-slate-500" size={18} />
              <div>
                <p className="text-sm text-slate-500">Category</p>
                <p className="font-semibold text-slate-900">{item.category}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Palette className="mt-0.5 text-slate-500" size={18} />
              <div>
                <p className="text-sm text-slate-500">Color</p>
                <p className="font-semibold text-slate-900">{item.color}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 text-slate-500" size={18} />
              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-semibold text-slate-900">{item.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CalendarDays className="mt-0.5 text-slate-500" size={18} />
              <div>
                <p className="text-sm text-slate-500">{dateLabel}</p>
                <p className="font-semibold text-slate-900">{itemDate}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <User className="mt-0.5 text-slate-500" size={18} />
              <div>
                <p className="text-sm text-slate-500">Reported By</p>
                <p className="font-semibold text-slate-900">
                  {item.reportedBy || "Normal User"}
                </p>
              </div>
            </div>
          </div>

          {type === "found" && (
            <div className="mt-6 rounded-lg bg-emerald-50 p-4">
              <p className="text-sm font-semibold text-emerald-800">
                Is this your item?
              </p>
              <p className="mt-1 text-sm text-emerald-700">
                You can claim it after the matching and claim module is added.
              </p>
            </div>
          )}
        </aside>
      </section>
    </MainLayout>
  );
}

export default ItemDetailsPage;