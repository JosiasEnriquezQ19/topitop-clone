import apiClient from '../lib/api-client';
import type { Categoria, ApiResponse } from '../types/api';

export class CategoriaService {
  // Obtener todas las categorías
  static async obtenerCategorias(): Promise<Categoria[]> {
    const response = await apiClient.get<Categoria[]>('/api/categorias');
    return response.data;
  }

  // Obtener categoría por ID
  static async obtenerCategoriaPorId(id: number): Promise<Categoria> {
    const response = await apiClient.get<Categoria>(`/api/categorias/${id}`);
    return response.data;
  }

  // Obtener categoría por nombre
  static async obtenerCategoriaPorNombre(nombre: string): Promise<Categoria | null> {
    const response = await apiClient.get<Categoria[]>('/api/categorias');
    const categorias = response.data;
    const categoria = categorias.find(
      (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
    );
    return categoria || null;
  }

  // Crear nueva categoría
  static async crearCategoria(categoria: Omit<Categoria, 'idCategoria'>): Promise<Categoria> {
    const response = await apiClient.post<Categoria>('/api/categorias', categoria);
    return response.data;
  }

  // Actualizar categoría
  static async actualizarCategoria(id: number, categoria: Partial<Categoria>): Promise<Categoria> {
    const response = await apiClient.put<Categoria>(`/api/categorias/${id}`, categoria);
    return response.data;
  }

  // Eliminar categoría
  static async eliminarCategoria(id: number): Promise<void> {
    await apiClient.delete(`/api/categorias/${id}`);
  }
}