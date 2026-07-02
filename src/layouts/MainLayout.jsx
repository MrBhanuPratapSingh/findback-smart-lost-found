import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}

export default MainLayout;