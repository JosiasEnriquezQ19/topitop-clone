import apiClient from '../lib/api-client';
import type { 
  Carrito, 
  CarritoDetalle 
} from '../types/api';

export interface AgregarCarritoRequest {
  idProducto: number;
  cantidad: number;
  precioUnitario: number;
}

export interface ActualizarCarritoRequest {
  cantidad: number;
  precioUnitario?: number;
}

export class CarritoService {
  // Obtener carrito del usuario actual (placeholder - implementar según tu API)
  static async obtenerCarrito(): Promise<Carrito> {
    const response = await apiClient.get<Carrito>('/api/carrito');
    return response.data;
  }

  // Agregar producto al carrito (placeholder - implementar según tu API)
  static async agregarProducto(request: AgregarCarritoRequest): Promise<CarritoDetalle> {
    const response = await apiClient.post<CarritoDetalle>('/api/carrito/agregar', request);
    return response.data;
  }

  // Actualizar detalle del carrito (placeholder - implementar según tu API)
  static async actualizarDetalle(
    detalleId: number, 
    request: ActualizarCarritoRequest
  ): Promise<CarritoDetalle> {
    const response = await apiClient.put<CarritoDetalle>(
      `/api/carrito/detalles/${detalleId}`,
      request
    );
    return response.data;
  }

  // Eliminar detalle del carrito (placeholder - implementar según tu API)
  static async eliminarDetalle(detalleId: number): Promise<void> {
    await apiClient.delete(`/api/carrito/detalles/${detalleId}`);
  }

  // Limpiar carrito (placeholder - implementar según tu API)
  static async limpiarCarrito(): Promise<void> {
    await apiClient.delete('/api/carrito/limpiar');
  }
}