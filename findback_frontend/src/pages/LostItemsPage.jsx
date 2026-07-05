import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ItemCard from "../components/ItemCard";
import SearchFilter from "../components/SearchFilter";
import { lostItems as defaultLostItems } from "../data/mockData";

function LostItemsPage() {
  const [lostItems, setLostItems] = useState([]);
  const [filters, setFilters] = useState({
    keyword: "",
    category: "",
    location: "",
  });

  useEffect(() => {
    const savedItems = JSON.parse(
      localStorage.getItem("findback_lost_items") || "[]"
    );

    setLostItems([...savedItems, ...defaultLostItems]);
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

  const filteredItems = lostItems.filter((item) => {
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
        <p className="text-sm font-medium text-blue-600">Lost items</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Lost Item Reports
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          View all lost items reported by users. Newly submitted reports are
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
          <h2 className="text-lg font-bold text-slate-900">No lost items found</h2>
          <p className="mt-2 text-sm text-slate-500">
            Try changing the search filters or submit a new lost item report.
          </p>
        </div>
      ) : (
        <section className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              dateLabel={`Lost on ${item.lostDate}`}
            />
          ))}
        </section>
      )}
    </MainLayout>
  );
}

export default LostItemsPage;