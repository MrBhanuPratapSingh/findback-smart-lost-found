function SearchFilter({ filters, onChange, onReset }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-3 md:grid-cols-4">
        <input
          type="text"
          name="keyword"
          placeholder="Search keyword"
          value={filters.keyword}
          onChange={onChange}
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-600"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={filters.category}
          onChange={onChange}
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-600"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={onChange}
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-blue-600"
        />

        <button
          type="button"
          onClick={onReset}
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default SearchFilter;