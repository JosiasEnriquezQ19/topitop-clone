import axios from 'axios';
import config from '../config';

// Configuración base de la API
const apiClient = axios.create({
  baseURL: config.api.baseUrl,
  timeout: config.api.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para requests (agregar token de autenticación)
apiClient.interceptors.request.use(
  (requestConfig) => {
    // Obtener token del localStorage o contexto de autenticación
    const token = localStorage.getItem(config.auth.tokenKey);
    if (token) {
      requestConfig.headers.Authorization = `Bearer ${token}`;
    }
    return requestConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para responses (manejo de errores globales)
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Manejo global de errores
    if (error.response?.status === 401) {
      // Token expirado o inválido
      localStorage.removeItem(config.auth.tokenKey);
      localStorage.removeItem(config.auth.userKey);
      window.location.href = config.routes.login;
    }
    
    if (error.response?.status === 500) {
      console.error('Error interno del servidor:', error.response.data);
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;