function AuthLayout({ children }) {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">
      <section className="w-full max-w-md">{children}</section>
    </main>
  );
}

export default AuthLayout;