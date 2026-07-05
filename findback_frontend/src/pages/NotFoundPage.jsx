import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-slate-900">404</h1>
        <p className="mt-4 text-xl font-semibold">Page not found</p>
        <p className="mt-2 text-slate-600">The page you are trying to open does not exist.</p>
        <Link to="/" className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-white">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;