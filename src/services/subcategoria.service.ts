import apiClient from '../lib/api-client';
import type { Subcategoria } from '../types/api';

export class SubcategoriaService {
  // Obtener todas las subcategorías
  static async obtenerSubcategorias(): Promise<Subcategoria[]> {
    const response = await apiClient.get<Subcategoria[]>('/api/subcategorias');
    return response.data;
  }

  // Obtener subcategoría por ID
  static async obtenerSubcategoriaPorId(id: number): Promise<Subcategoria> {
    const response = await apiClient.get<Subcategoria>(`/api/subcategorias/${id}`);
    return response.data;
  }

  // Obtener subcategorías por categoría
  static async obtenerSubcategoriasPorCategoria(categoriaId: number): Promise<Subcategoria[]> {
    const response = await apiClient.get<Subcategoria[]>(`/api/subcategorias/categoria/${categoriaId}`);
    return response.data;
  }

  // Crear nueva subcategoría
  static async crearSubcategoria(subcategoria: Omit<Subcategoria, 'idSubcategoria'>): Promise<Subcategoria> {
    const response = await apiClient.post<Subcategoria>('/api/subcategorias', subcategoria);
    return response.data;
  }

  // Actualizar subcategoría
  static async actualizarSubcategoria(id: number, subcategoria: Partial<Subcategoria>): Promise<Subcategoria> {
    const response = await apiClient.put<Subcategoria>(`/api/subcategorias/${id}`, subcategoria);
    return response.data;
  }

  // Eliminar subcategoría
  static async eliminarSubcategoria(id: number): Promise<void> {
    await apiClient.delete(`/api/subcategorias/${id}`);
  }
}