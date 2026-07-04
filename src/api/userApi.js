import axiosConfig from "./axiosConfig";

const USER_URL = "/users";

export const fetchProfile = async () => {
  const response = await axiosConfig.get(`${USER_URL}/profile`);
  return response.data;
};

export const updateProfile = async (profileData) => {
  const response = await axiosConfig.put(`${USER_URL}/profile`, profileData);
  return response.data;
};

export const changePassword = async (passwordData) => {
  const response = await axiosConfig.put(`${USER_URL}/change-password`, passwordData);
  return response.data;
};