import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token d'authentification
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Gestion des erreurs dans les réponses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized - redirecting to login');
      // Ici vous pourriez ajouter une redirection vers la page de login
    }
    return Promise.reject(error);
  }
);

// Fonction de connexion
export const login = async (username: string, password: string) => {
  try {
    const response = await api.post('/auth/login/', { username, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Fonction d'inscription
export const register = async (username: string, password: string, email: string) => {
  try {
    const response = await api.post('/auth/register/', { username, password, email });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

// Récupérer les données de température avec gestion d'erreurs
export const fetchTemperatureData = async (timeRange: string) => {
  try {
    const response = await api.get(`/dht/temperature/?range=${timeRange}`);
    return response.data;
  } catch (error) {
    console.error('Temperature data fetch error:', error);
    throw error;
  }
};

// Récupérer les données d'humidité avec gestion d'erreurs
export const fetchHumidityData = async (timeRange: string) => {
  try {
    const response = await api.get(`/dht/humidity/?range=${timeRange}`);
    return response.data;
  } catch (error) {
    console.error('Humidity data fetch error:', error);
    throw error;
  }
};

export default api;
