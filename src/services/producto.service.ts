import apiClient from '../lib/api-client';
import type { 
  Producto, 
  ApiResponse, 
  PaginatedResponse, 
  FiltrosProducto 
} from '../types/api';

export class ProductoService {
  // Obtener todos los productos
  static async obtenerProductos(): Promise<Producto[]> {
    const response = await apiClient.get<Producto[]>('/api/productos');
    return response.data;
  }

  // Obtener producto por ID
  static async obtenerProductoPorId(id: number): Promise<Producto> {
    const response = await apiClient.get<Producto>(`/api/productos/${id}`);
    return response.data;
  }

  // Obtener productos por subcategoría  
  static async obtenerProductosPorSubcategoria(subcategoriaId: number): Promise<Producto[]> {
    const response = await apiClient.get<Producto[]>(`/api/productos/subcategoria/${subcategoriaId}`);
    return response.data;
  }

  // Buscar productos por nombre
  static async buscarProductos(nombre: string): Promise<Producto[]> {
    const response = await apiClient.get<Producto[]>(`/api/productos/buscar?nombre=${encodeURIComponent(nombre)}`);
    return response.data;
  }

  // Obtener productos disponibles (con stock)
  static async obtenerProductosDisponibles(): Promise<Producto[]> {
    const response = await apiClient.get<Producto[]>('/api/productos/disponibles');
    return response.data;
  }

  // Crear nuevo producto
  static async crearProducto(producto: Omit<Producto, 'idProducto' | 'fechaCreacion'>): Promise<Producto> {
    const response = await apiClient.post<Producto>('/api/productos', producto);
    return response.data;
  }

  // Actualizar producto
  static async actualizarProducto(id: number, producto: Partial<Producto>): Promise<Producto> {
    const response = await apiClient.put<Producto>(`/api/productos/${id}`, producto);
    return response.data;
  }

  // Eliminar producto
  static async eliminarProducto(id: number): Promise<void> {
    await apiClient.delete(`/api/productos/${id}`);
  }
}