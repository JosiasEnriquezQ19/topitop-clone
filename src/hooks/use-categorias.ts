import { useQuery } from '@tanstack/react-query';
import { CategoriaService } from '../services/categoria.service';

// Query Keys
export const CATEGORIA_KEYS = {
  all: ['categorias'] as const,
  activas: () => [...CATEGORIA_KEYS.all, 'activas'] as const,
  detail: (id: number) => [...CATEGORIA_KEYS.all, 'detail', id] as const,
};

// Hook para obtener todas las categorías
export const useCategorias = () => {
  return useQuery({
    queryKey: CATEGORIA_KEYS.all,
    queryFn: () => CategoriaService.obtenerCategorias(),
    staleTime: 15 * 60 * 1000, // 15 minutos
    gcTime: 30 * 60 * 1000, // 30 minutos
  });
};

// Hook para obtener categorías activas (filtradas en el frontend)
export const useCategoriasActivas = () => {
  const { data: todasCategorias, ...rest } = useCategorias();
  
  return {
    ...rest,
    data: todasCategorias?.filter(categoria => categoria.activo) || [],
  };
};

// Hook para obtener categoría por ID
export const useCategoria = (id: number) => {
  return useQuery({
    queryKey: CATEGORIA_KEYS.detail(id),
    queryFn: () => CategoriaService.obtenerCategoriaPorId(id),
    enabled: !!id,
    staleTime: 15 * 60 * 1000,
  });
};