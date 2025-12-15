import apiClient from '../lib/api-client';
import type { 
  Pedido, 
  PaginatedResponse,
  ApiResponse,
  Direccion 
} from '../types/api';

export interface CrearPedidoRequest {
  direccionEnvioId: number;
  metodoPago: 'TARJETA' | 'EFECTIVO' | 'TRANSFERENCIA';
  notas?: string;
}

export class PedidoService {
  // Crear pedido desde carrito
  static async crearPedido(request: CrearPedidoRequest): Promise<Pedido> {
    const response = await apiClient.post<ApiResponse<Pedido>>('/api/pedidos', request);
    return response.data.data;
  }

  // Obtener pedidos del usuario
  static async obtenerMisPedidos(
    page: number = 0,
    size: number = 10
  ): Promise<PaginatedResponse<Pedido>> {
    const response = await apiClient.get(
      `/api/pedidos/mis-pedidos?page=${page}&size=${size}`
    );
    return response.data;
  }

  // Obtener pedido por ID
  static async obtenerPedidoPorId(id: number): Promise<Pedido> {
    const response = await apiClient.get<ApiResponse<Pedido>>(`/api/pedidos/${id}`);
    return response.data.data;
  }

  // Cancelar pedido
  static async cancelarPedido(id: number): Promise<Pedido> {
    const response = await apiClient.put<ApiResponse<Pedido>>(`/api/pedidos/${id}/cancelar`);
    return response.data.data;
  }
}

export class DireccionService {
  // Obtener direcciones del usuario
  static async obtenerMisDirecciones(): Promise<Direccion[]> {
    const response = await apiClient.get<ApiResponse<Direccion[]>>('/api/direcciones');
    return response.data.data;
  }

  // Crear nueva dirección
  static async crearDireccion(direccion: Omit<Direccion, 'id'>): Promise<Direccion> {
    const response = await apiClient.post<ApiResponse<Direccion>>('/api/direcciones', direccion);
    return response.data.data;
  }

  // Actualizar dirección
  static async actualizarDireccion(id: number, direccion: Partial<Direccion>): Promise<Direccion> {
    const response = await apiClient.put<ApiResponse<Direccion>>(`/api/direcciones/${id}`, direccion);
    return response.data.data;
  }

  // Eliminar dirección
  static async eliminarDireccion(id: number): Promise<void> {
    await apiClient.delete(`/api/direcciones/${id}`);
  }

  // Establecer dirección como principal
  static async establecerDireccionPrincipal(id: number): Promise<Direccion> {
    const response = await apiClient.put<ApiResponse<Direccion>>(`/api/direcciones/${id}/principal`);
    return response.data.data;
  }
}