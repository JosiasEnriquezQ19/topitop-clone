import apiClient from '../lib/api-client';
import type { 
  LoginRequest, 
  RegisterRequest, 
  AuthResponse, 
  Usuario,
  ApiResponse 
} from '../types/api';

export class AuthService {
  // Iniciar sesión
  static async login(request: LoginRequest): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/api/auth/login', request);
    
    // Guardar token en localStorage si existe
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
    }
    localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
    
    return response.data;
  }

  // Registrarse
  static async register(request: RegisterRequest): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/api/auth/register', request);
    
    // Guardar token en localStorage si existe
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
    }
    localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
    
    return response.data;
  }

  // Cerrar sesión
  static async logout(): Promise<void> {
    try {
      await apiClient.post('/api/auth/logout');
    } finally {
      // Limpiar datos locales independientemente del resultado
      localStorage.removeItem('authToken');
      localStorage.removeItem('usuario');
    }
  }

  // Obtener perfil del usuario actual
  static async obtenerPerfil(): Promise<Usuario> {
    const response = await apiClient.get<Usuario>('/api/auth/perfil');
    return response.data;
  }

  // Actualizar perfil
  static async actualizarPerfil(usuario: Partial<Usuario>): Promise<Usuario> {
    const response = await apiClient.put<Usuario>('/api/auth/perfil', usuario);
    
    // Actualizar usuario en localStorage
    localStorage.setItem('usuario', JSON.stringify(response.data));
    
    return response.data;
  }

  // Verificar si el usuario está autenticado
  static isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Obtener usuario desde localStorage
  static getUsuario(): Usuario | null {
    const usuarioStr = localStorage.getItem('usuario');
    return usuarioStr ? JSON.parse(usuarioStr) : null;
  }

  // Obtener token desde localStorage
  static getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Refrescar token
  static async refrescarToken(): Promise<string> {
    const response = await apiClient.post<{ token: string }>('/api/auth/refresh');
    const nuevoToken = response.data.token;
    
    localStorage.setItem('authToken', nuevoToken);
    return nuevoToken;
  }
}