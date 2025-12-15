import { useQuery } from '@tanstack/react-query';
import { SubcategoriaService } from '../services/subcategoria.service';

// Query Keys
export const SUBCATEGORIA_KEYS = {
  all: ['subcategorias'] as const,
  lists: () => [...SUBCATEGORIA_KEYS.all, 'list'] as const,
  detail: (id: number) => [...SUBCATEGORIA_KEYS.all, 'detail', id] as const,
  categoria: (categoriaId: number) => [...SUBCATEGORIA_KEYS.all, 'categoria', categoriaId] as const,
};

// Hook para obtener todas las subcategorías
export const useSubcategorias = () => {
  return useQuery({
    queryKey: SUBCATEGORIA_KEYS.lists(),
    queryFn: () => SubcategoriaService.obtenerSubcategorias(),
    staleTime: 15 * 60 * 1000, // 15 minutos
    gcTime: 30 * 60 * 1000, // 30 minutos
  });
};

// Hook para obtener subcategoría por ID
export const useSubcategoria = (id: number) => {
  return useQuery({
    queryKey: SUBCATEGORIA_KEYS.detail(id),
    queryFn: () => SubcategoriaService.obtenerSubcategoriaPorId(id),
    enabled: !!id,
    staleTime: 15 * 60 * 1000,
  });
};

// Hook para obtener subcategorías por categoría
export const useSubcategoriasPorCategoria = (categoriaId: number) => {
  return useQuery({
    queryKey: SUBCATEGORIA_KEYS.categoria(categoriaId),
    queryFn: () => SubcategoriaService.obtenerSubcategoriasPorCategoria(categoriaId),
    enabled: !!categoriaId,
    staleTime: 15 * 60 * 1000,
  });
};