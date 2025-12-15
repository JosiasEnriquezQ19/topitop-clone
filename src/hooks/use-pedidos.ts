import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { PedidoService, DireccionService } from '../services/pedido.service';
// import type { CrearPedidoRequest, Direccion } from '../types/api';
import { toast } from 'sonner';

// NOTA: Los pedidos no están implementados aún en el backend
// Este archivo está preparado para cuando implementes la funcionalidad de pedidos

// Query Keys
export const PEDIDO_KEYS = {
  all: ['pedidos'] as const,
  lists: () => [...PEDIDO_KEYS.all, 'list'] as const,
  list: (page: number) => [...PEDIDO_KEYS.lists(), page] as const,
  details: () => [...PEDIDO_KEYS.all, 'detail'] as const,
  detail: (id: number) => [...PEDIDO_KEYS.details(), id] as const,
};

export const DIRECCION_KEYS = {
  all: ['direcciones'] as const,
  list: () => [...DIRECCION_KEYS.all, 'list'] as const,
};

// Hooks para Pedidos (PLACEHOLDER - No implementado en backend)
export const useMisPedidos = (page: number = 0, size: number = 10) => {
  return useQuery({
    queryKey: PEDIDO_KEYS.list(page),
    queryFn: () => Promise.resolve([]), // Placeholder
    enabled: false, // Deshabilitado hasta implementar en backend
    staleTime: 2 * 60 * 1000, // 2 minutos
  });
};

export const usePedido = (id: number) => {
  return useQuery({
    queryKey: PEDIDO_KEYS.detail(id),
    queryFn: () => Promise.resolve(null), // Placeholder
    enabled: false, // Deshabilitado hasta implementar en backend
    staleTime: 5 * 60 * 1000,
  });
};

export const useCrearPedido = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: any) => Promise.resolve({}), // Placeholder
    onSuccess: () => {
      toast.info('Funcionalidad de pedidos no implementada aún');
    },
    onError: () => {
      toast.error('Funcionalidad de pedidos no implementada aún');
    },
  });
};

export const useCancelarPedido = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => Promise.resolve(), // Placeholder
    onSuccess: () => {
      toast.info('Funcionalidad de pedidos no implementada aún');
    },
    onError: () => {
      toast.error('Funcionalidad de pedidos no implementada aún');
    },
  });
};

// Hooks para Direcciones (PLACEHOLDER - No implementado en backend)
export const useMisDirecciones = () => {
  return useQuery({
    queryKey: DIRECCION_KEYS.list(),
    queryFn: () => Promise.resolve([]), // Placeholder
    enabled: false, // Deshabilitado hasta implementar en backend
    staleTime: 5 * 60 * 1000,
  });
};

// Funciones placeholder para direcciones
export const useCrearDireccion = () => {
  return useMutation({
    mutationFn: (direccion: any) => Promise.resolve({}),
    onSuccess: () => toast.info('Funcionalidad de direcciones no implementada aún'),
  });
};

export const useActualizarDireccion = () => {
  return useMutation({
    mutationFn: ({ id, direccion }: { id: number; direccion: any }) => Promise.resolve({}),
    onSuccess: () => toast.info('Funcionalidad de direcciones no implementada aún'),
  });
};

export const useEliminarDireccion = () => {
  return useMutation({
    mutationFn: (id: number) => Promise.resolve(),
    onSuccess: () => toast.info('Funcionalidad de direcciones no implementada aún'),
  });
};

export const useEstablecerDireccionPrincipal = () => {
  return useMutation({
    mutationFn: (id: number) => Promise.resolve({}),
    onSuccess: () => toast.info('Funcionalidad de direcciones no implementada aún'),
  });
};