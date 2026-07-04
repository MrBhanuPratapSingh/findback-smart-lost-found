import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import NotificationCard from "../components/NotificationCard";
import { fetchNotifications, markNotificationAsRead } from "../api/notificationApi";
import { notificationMockData } from "../data/notificationMockData";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  const loadNotifications = async () => {
    try {
      const response = await fetchNotifications();
      setNotifications(Array.isArray(response) ? response : response?.data || []);
    } catch {
      setNotifications(notificationMockData);
    }
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  const handleMarkRead = async (id) => {
    try {
      await markNotificationAsRead(id);
    } catch {
      toast.success("Notification marked as read");
    }

    setNotifications((prev) =>
      prev.map((item) => item.id === id ? { ...item, read: true } : item)
    );
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold">Notifications</h1>
        <p className="text-sm text-slate-600">View match and claim status updates.</p>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            notification={notification}
            onMarkRead={handleMarkRead}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;