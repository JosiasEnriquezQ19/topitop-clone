import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthService } from '../services/auth.service';
import type { LoginRequest, RegisterRequest, Usuario } from '../types/api';
import { toast } from 'sonner';

// Query Keys
export const AUTH_KEYS = {
  all: ['auth'] as const,
  perfil: () => [...AUTH_KEYS.all, 'perfil'] as const,
};

// Hook para obtener perfil del usuario
export const usePerfil = () => {
  return useQuery({
    queryKey: AUTH_KEYS.perfil(),
    queryFn: () => AuthService.obtenerPerfil(),
    enabled: AuthService.isAuthenticated(),
    staleTime: 5 * 60 * 1000, // 5 minutos
    retry: false,
  });
};

// Hook para login
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: LoginRequest) => AuthService.login(request),
    onSuccess: (data) => {
      // Invalidar queries relacionadas con auth
      queryClient.invalidateQueries({ queryKey: AUTH_KEYS.all });
      // También invalidar carrito ya que puede cambiar con el usuario
      queryClient.invalidateQueries({ queryKey: ['carrito'] });
      toast.success(`¡Bienvenido, ${data.usuario.nombre}!`);
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || 'Error al iniciar sesión');
    },
  });
};

// Hook para registro
export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: RegisterRequest) => AuthService.register(request),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: AUTH_KEYS.all });
      queryClient.invalidateQueries({ queryKey: ['carrito'] });
      toast.success(`¡Bienvenido, ${data.usuario.nombre}! Tu cuenta ha sido creada.`);
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || 'Error al crear cuenta');
    },
  });
};

// Hook para logout
export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => AuthService.logout(),
    onSuccess: () => {
      // Limpiar todas las queries en cache
      queryClient.clear();
      toast.success('Sesión cerrada exitosamente');
    },
    onError: (error: any) => {
      // Aún así limpiar el cache local en caso de error
      queryClient.clear();
      toast.error(error?.response?.data?.message || 'Error al cerrar sesión');
    },
  });
};

// Hook para actualizar perfil
export const useActualizarPerfil = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (usuario: Partial<Usuario>) => AuthService.actualizarPerfil(usuario),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: AUTH_KEYS.perfil() });
      toast.success('Perfil actualizado exitosamente');
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || 'Error al actualizar perfil');
    },
  });
};

// Hook para verificar si el usuario está autenticado
export const useIsAuthenticated = () => {
  return AuthService.isAuthenticated();
};

// Hook para obtener usuario desde localStorage
export const useUsuario = () => {
  return AuthService.getUsuario();
};