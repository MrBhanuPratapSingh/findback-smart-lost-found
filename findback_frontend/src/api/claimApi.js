import axiosConfig from "./axiosConfig";

const CLAIM_BASE_URL = "/claims";

export const createClaimRequest = async (claimData) => {
  const response = await axiosConfig.post(CLAIM_BASE_URL, claimData);
  return response.data;
};

export const fetchMyClaims = async () => {
  const response = await axiosConfig.get(`${CLAIM_BASE_URL}/my`);
  return response.data;
};

export const fetchClaimById = async (claimId) => {
  const response = await axiosConfig.get(`${CLAIM_BASE_URL}/${claimId}`);
  return response.data;
};

export const cancelClaimRequest = async (claimId) => {
  const response = await axiosConfig.delete(`${CLAIM_BASE_URL}/${claimId}`);
  return response.data;
};