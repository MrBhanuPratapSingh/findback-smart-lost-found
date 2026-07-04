import axiosConfig from "./axiosConfig";

const ADMIN_BASE_URL = "/admin";

export const fetchAdminClaims = async (status = "ALL") => {
  const params = status && status !== "ALL" ? { status } : {};
  const response = await axiosConfig.get(`${ADMIN_BASE_URL}/claims`, { params });
  return response.data;
};

export const approveAdminClaim = async (claimId, remarks = "") => {
  const response = await axiosConfig.put(
    `${ADMIN_BASE_URL}/claims/${claimId}/approve`,
    { remarks }
  );
  return response.data;
};

export const rejectAdminClaim = async (claimId, remarks = "") => {
  const response = await axiosConfig.put(
    `${ADMIN_BASE_URL}/claims/${claimId}/reject`,
    { remarks }
  );
  return response.data;
};

export const fetchAdminDashboardStats = async () => {
  const response = await axiosConfig.get(`${ADMIN_BASE_URL}/dashboard`);
  return response.data;
};