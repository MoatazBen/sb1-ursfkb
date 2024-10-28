import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (username: string, password: string) => {
  const response = await api.post('/auth/login/', { username, password });
  return response.data;
};

export const register = async (username: string, password: string, email: string) => {
  const response = await api.post('/auth/register/', { username, password, email });
  return response.data;
};

export const fetchTemperatureData = async (timeRange: string) => {
  const response = await api.get(`/dht/temperature/?range=${timeRange}`);
  return response.data;
};

export const fetchHumidityData = async (timeRange: string) => {
  const response = await api.get(`/dht/humidity/?range=${timeRange}`);
  return response.data;
};

export default api;