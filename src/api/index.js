import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const loginUser = async (credentials) => {
  return axios.post(`${API_BASE_URL}/auth/login`, credentials);
};

export const getJobs = async () => {
  return axios.get(`${API_BASE_URL}/jobs`);
};

export const updateProfile = async (profileData) => {
  return axios.put(`${API_BASE_URL}/profile`, profileData);
};

export const sendMessage = async (messageData) => {
  return axios.post(`${API_BASE_URL}/chat/send`, messageData);
};
