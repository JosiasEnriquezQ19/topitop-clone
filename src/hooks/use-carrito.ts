import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { CarritoService } from '../services/carrito.service';
import type { AgregarCarritoRequest, ActualizarCarritoRequest } from '../services/carrito.service';
import { toast } from 'sonner';

// Query Keys
export const CARRITO_KEYS = {
  all: ['carrito'] as const,
  carrito: () => [...CARRITO_KEYS.all, 'data'] as const,
  total: () => [...CARRITO_KEYS.all, 'total'] as const,
  cantidad: () => [...CARRITO_KEYS.all, 'cantidad'] as const,
};

// Hook para obtener el carrito
export const useCarrito = () => {
  return useQuery({
    queryKey: CARRITO_KEYS.carrito(),
    queryFn: () => CarritoService.obtenerCarrito(),
    staleTime: 0, // Siempre refrescar el carrito
    retry: false,
  });
};

// Hook para obtener el total del carrito (calculado desde detalles)
export const useTotalCarrito = () => {
  const { data: carrito } = useCarrito();
  
  const total = carrito?.detalles?.reduce((sum, detalle) => 
    sum + (detalle.cantidad * detalle.precioUnitario), 0
  ) || 0;
  
  return { data: total };
};

// Hook para obtener la cantidad de items (calculado desde detalles)
export const useCantidadCarrito = () => {
  const { data: carrito } = useCarrito();
  
  const cantidad = carrito?.detalles?.reduce((sum, detalle) => 
    sum + detalle.cantidad, 0
  ) || 0;
  
  return { data: cantidad };
};

// Hook para agregar producto al carrito
export const useAgregarCarrito = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: AgregarCarritoRequest) => 
      CarritoService.agregarProducto(request),
    onSuccess: () => {
      // Invalidar todas las queries del carrito
      queryClient.invalidateQueries({ queryKey: CARRITO_KEYS.all });
      toast.success('Producto agregado al carrito');
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || 'Error al agregar producto al carrito');
    },
  });
};

// Hook para actualizar detalle del carrito
export const useActualizarCarrito = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ detalleId, request }: { detalleId: number; request: ActualizarCarritoRequest }) => 
      CarritoService.actualizarDetalle(detalleId, request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CARRITO_KEYS.all });
      toast.success('Carrito actualizado');
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || 'Error al actualizar carrito');
    },
  });
};

// Hook para eliminar detalle del carrito
export const useEliminarDetalleCarrito = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (detalleId: number) => CarritoService.eliminarDetalle(detalleId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CARRITO_KEYS.all });
      toast.success('Producto eliminado del carrito');
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || 'Error al eliminar producto');
    },
  });
};

// Hook para limpiar carrito
export const useLimpiarCarrito = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => CarritoService.limpiarCarrito(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CARRITO_KEYS.all });
      toast.success('Carrito limpiado');
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || 'Error al limpiar carrito');
    },
  });
};