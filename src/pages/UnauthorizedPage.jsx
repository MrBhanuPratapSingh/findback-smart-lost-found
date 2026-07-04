import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

const UnauthorizedPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="max-w-md text-center">
        <ShieldAlert className="mx-auto text-red-600" size={52} />
        <h1 className="mt-4 text-2xl font-bold">Unauthorized Access</h1>
        <p className="mt-2 text-slate-600">You do not have permission to access this page.</p>
        <Link to="/" className="mt-6 inline-block rounded-lg bg-slate-900 px-5 py-2.5 text-white">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;