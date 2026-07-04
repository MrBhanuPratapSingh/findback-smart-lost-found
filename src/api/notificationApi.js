import axiosConfig from "./axiosConfig";

const NOTIFICATION_URL = "/notifications";

export const fetchNotifications = async () => {
  const response = await axiosConfig.get(NOTIFICATION_URL);
  return response.data;
};

export const markNotificationAsRead = async (notificationId) => {
  const response = await axiosConfig.put(`${NOTIFICATION_URL}/${notificationId}/read`);
  return response.data;
};

export const markAllNotificationsAsRead = async () => {
  const response = await axiosConfig.put(`${NOTIFICATION_URL}/read-all`);
  return response.data;
};