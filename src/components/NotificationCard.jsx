import { Bell, CheckCircle } from "lucide-react";

const NotificationCard = ({ notification, onMarkRead }) => {
  return (
    <div className={`rounded-lg border p-4 ${notification.read ? "bg-white" : "bg-blue-50 border-blue-200"}`}>
      <div className="flex items-start gap-3">
        <Bell className="mt-1 text-blue-600" size={20} />
        <div className="flex-1">
          <p className="font-semibold text-slate-900">{notification.title}</p>
          <p className="mt-1 text-sm text-slate-600">{notification.message}</p>
          <p className="mt-2 text-xs text-slate-500">{notification.createdAt}</p>
        </div>
        {!notification.read && (
          <button onClick={() => onMarkRead(notification.id)} className="text-emerald-600">
            <CheckCircle size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default NotificationCard;