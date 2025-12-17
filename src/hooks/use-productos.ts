import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ProductoService } from '../services/producto.service';
import type { FiltrosProducto } from '../types/api';

// Query Keys
export const PRODUCTO_KEYS = {
  all: ['productos'] as const,
  lists: () => [...PRODUCTO_KEYS.all, 'list'] as const,
  list: (filtros?: FiltrosProducto) => [...PRODUCTO_KEYS.lists(), { filtros }] as const,
  details: () => [...PRODUCTO_KEYS.all, 'detail'] as const,
  detail: (id: number) => [...PRODUCTO_KEYS.details(), id] as const,
  categoria: (categoriaId: number) => [...PRODUCTO_KEYS.all, 'categoria', categoriaId] as const,
  busqueda: (termino: string) => [...PRODUCTO_KEYS.all, 'busqueda', termino] as const,
  relacionados: (id: number) => [...PRODUCTO_KEYS.all, 'relacionados', id] as const,
  masVendidos: () => [...PRODUCTO_KEYS.all, 'mas-vendidos'] as const,
  ofertas: () => [...PRODUCTO_KEYS.all, 'ofertas'] as const,
};

// Hook para obtener todos los productos
export const useProductos = () => {
  return useQuery({
    queryKey: PRODUCTO_KEYS.lists(),
    queryFn: () => ProductoService.obtenerProductos(),
    staleTime: 5 * 60 * 1000, // 5 minutos
    gcTime: 10 * 60 * 1000, // 10 minutos
  });
};

// Hook para obtener producto por ID
export const useProducto = (id: number) => {
  return useQuery({
    queryKey: PRODUCTO_KEYS.detail(id),
    queryFn: () => ProductoService.obtenerProductoPorId(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

// Hook para obtener productos por subcategoría
export const useProductosPorSubcategoria = (subcategoriaId: number) => {
  return useQuery({
    queryKey: [...PRODUCTO_KEYS.all, 'subcategoria', subcategoriaId],
    queryFn: () => ProductoService.obtenerProductosPorSubcategoria(subcategoriaId),
    enabled: !!subcategoriaId,
    staleTime: 5 * 60 * 1000, // 5 minutos de caché
    gcTime: 10 * 60 * 1000, // 10 minutos en garbage collection
  });
};

// Hook para buscar productos por nombre
export const useBuscarProductos = (nombre: string) => {
  return useQuery({
    queryKey: PRODUCTO_KEYS.busqueda(nombre),
    queryFn: () => ProductoService.buscarProductos(nombre),
    enabled: !!nombre && nombre.length >= 2,
    staleTime: 2 * 60 * 1000, // 2 minutos para búsquedas
  });
};

// Hook para obtener productos disponibles (con stock)
export const useProductosDisponibles = () => {
  return useQuery({
    queryKey: [...PRODUCTO_KEYS.all, 'disponibles'],
    queryFn: () => ProductoService.obtenerProductosDisponibles(),
    staleTime: 10 * 60 * 1000, // 10 minutos
  });
};

// Hook para obtener todos los productos de una categoría (todas sus subcategorías)
export const useProductosPorCategoria = (subcategoriaIds: number[]) => {
  return useQuery({
    queryKey: ['productos', 'categoria-completa', subcategoriaIds.sort().join(',')],
    queryFn: async () => {
      const productosPromesas = subcategoriaIds.map(id => 
        ProductoService.obtenerProductosPorSubcategoria(id)
      );
      const resultados = await Promise.all(productosPromesas);
      return resultados.flat();
    },
    enabled: subcategoriaIds.length > 0,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

// Hook para obtener productos por nombre de categoría (para las páginas de catálogo)
export const useProductosPorNombreCategoria = (nombreCategoria: string) => {
  return useQuery({
    queryKey: ['productos', 'categoria-nombre', nombreCategoria.toLowerCase()],
    queryFn: async () => {
      const { CategoriaService } = await import('../services/categoria.service');
      const { SubcategoriaService } = await import('../services/subcategoria.service');
      
      const categoria = await CategoriaService.obtenerCategoriaPorNombre(nombreCategoria);
      if (!categoria) {
        return [];
      }
      
      const subcategorias = await SubcategoriaService.obtenerSubcategoriasPorCategoria(categoria.idCategoria);
      
      const productosPromesas = subcategorias.map((sub: any) => 
        ProductoService.obtenerProductosPorSubcategoria(sub.idSubcategoria)
      );
      const resultados = await Promise.all(productosPromesas);
      return resultados.flat();
    },
    enabled: !!nombreCategoria && nombreCategoria.length > 0,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
