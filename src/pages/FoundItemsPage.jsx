import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ItemCard from "../components/ItemCard";
import SearchFilter from "../components/SearchFilter";
import { foundItems as defaultFoundItems } from "../data/mockData";

function FoundItemsPage() {
  const [foundItems, setFoundItems] = useState([]);
  const [filters, setFilters] = useState({
    keyword: "",
    category: "",
    location: "",
  });

  useEffect(() => {
    const savedItems = JSON.parse(
      localStorage.getItem("findback_found_items") || "[]"
    );

    setFoundItems([...savedItems, ...defaultFoundItems]);
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      keyword: "",
      category: "",
      location: "",
    });
  };

  const filteredItems = foundItems.filter((item) => {
    const keywordMatch =
      item.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
      item.description.toLowerCase().includes(filters.keyword.toLowerCase());

    const categoryMatch = item.category
      .toLowerCase()
      .includes(filters.category.toLowerCase());

    const locationMatch = item.location
      .toLowerCase()
      .includes(filters.location.toLowerCase());

    return keywordMatch && categoryMatch && locationMatch;
  });

  return (
    <MainLayout>
      <section className="mb-6">
        <p className="text-sm font-medium text-emerald-600">Found items</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Found Item Reports
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          View all items reported as found. Newly submitted found reports are
          loaded from local storage for now.
        </p>
      </section>

      <SearchFilter
        filters={filters}
        onChange={handleFilterChange}
        onReset={handleReset}
      />

      {filteredItems.length === 0 ? (
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">
            No found items available
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Try changing the search filters or submit a new found item report.
          </p>
        </div>
      ) : (
        <section className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              dateLabel={`Found on ${item.foundDate}`}
            />
          ))}
        </section>
      )}
    </MainLayout>
  );
}

export default FoundItemsPage;