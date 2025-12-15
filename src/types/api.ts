// Tipos base
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}

// Tipos de productos (basado en ProductoEntity JPA)
export interface Producto {
  idProducto: number;
  nombre: string;
  descripcion?: string;
  precio: number;
  stock: number;
  imagenUrl?: string;
  fechaCreacion: string;
  activo: boolean;
  subcategoria: Subcategoria;
  
  // Campos adicionales para el frontend (no en JPA)
  precioOferta?: number;
  imagen?: string;  // alias para imagenUrl
  imagenes?: string[];
  tallas?: Talla[];
  colores?: Color[];
  fechaActualizacion?: string;
}

export interface Categoria {
  idCategoria: number;
  nombre: string;
  descripcion?: string;
  activo: boolean;
  subcategorias?: Subcategoria[];
  
  // Campos adicionales para el frontend
  imagen?: string;
}

export interface Subcategoria {
  idSubcategoria: number;
  nombre: string;
  descripcion?: string;
  activo: boolean;
  categoria?: Categoria;
  productos?: Producto[];
}

export interface Talla {
  id: number;
  nombre: string;
  descripcion?: string;
}

export interface Color {
  id: number;
  nombre: string;
  codigoHex: string;
}

// Tipos de carrito (basados en CarritoEntity y CarritoDetalleEntity)
export interface CarritoDetalle {
  idDetalle: number;
  carrito?: Carrito;
  producto: Producto;
  cantidad: number;
  precioUnitario: number;
  
  // Campos adicionales para el frontend
  talla?: Talla;
  color?: Color;
  subtotal?: number;
}

export interface Carrito {
  idCarrito: number;
  usuario?: Usuario;
  fechaCreacion: string;
  detalles: CarritoDetalle[];
  
  // Campos calculados para el frontend
  total?: number;
  items?: CarritoDetalle[];  // alias para detalles
}

// Tipos de usuario
export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  telefono?: string;
  direccion?: Direccion;
  fechaRegistro: string;
  activo: boolean;
}

export interface Direccion {
  id: number;
  calle: string;
  ciudad: string;
  estado: string;
  codigoPostal: string;
  pais: string;
  principal: boolean;
}

// Tipos de pedidos - Placeholder para futura implementación
// Nota: No implementado aún en el backend
export interface Pedido {
  id: number;
  // TODO: Implementar cuando se cree PedidoEntity
}

export interface PedidoItem {
  id: number;
  // TODO: Implementar cuando se cree PedidoItemEntity
}

// Tipos de filtros y búsqueda
export interface FiltrosProducto {
  categoria?: number;
  precioMin?: number;
  precioMax?: number;
  tallas?: number[];
  colores?: number[];
  busqueda?: string;
  ordenarPor?: 'precio_asc' | 'precio_desc' | 'nombre_asc' | 'nombre_desc' | 'fecha_desc';
}

// Tipos de autenticación - Simplificados
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  nombre: string;
  email: string;
  password?: string;
  telefono?: string;
}

export interface AuthResponse {
  usuario: Usuario;
  token?: string; // Opcional por ahora
  expiresIn?: number;
}

// Tipos de error
export interface ApiError {
  message: string;
  code: string;
  details?: any;
}