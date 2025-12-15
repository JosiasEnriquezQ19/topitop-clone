// Configuración global de la aplicación
export const config = {
  // URLs de la API
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8092',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '10000'),
  },
  
  // Configuración de autenticación
  auth: {
    tokenKey: 'authToken',
    userKey: 'usuario',
    refreshTokenKey: 'refreshToken',
  },
  
  // Configuración de React Query
  queryClient: {
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutos
        gcTime: 10 * 60 * 1000, // 10 minutos (antes cacheTime)
        retry: 2,
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: 1,
      },
    },
  },
  
  // Configuración de paginación
  pagination: {
    defaultPageSize: 12,
    maxPageSize: 50,
  },
  
  // Configuración de la aplicación
  app: {
    name: 'Topitop',
    version: '1.0.0',
    description: 'Ecommerce de moda y estilo',
  },
  
  // URLs y rutas
  routes: {
    home: '/',
    products: '/productos',
    categories: '/categorias',
    cart: '/carrito',
    checkout: '/checkout',
    profile: '/perfil',
    orders: '/pedidos',
    login: '/login',
    register: '/registro',
  },
  
  // Configuración de notificaciones
  notifications: {
    position: 'top-right' as const,
    duration: 4000,
  },
  
  // Configuración de imágenes
  images: {
    placeholder: '/images/placeholder.jpg',
    noImage: '/images/no-image.png',
  },
  
  // Configuración de formatos
  formats: {
    currency: 'PEN',
    currencySymbol: 'S/.',
    dateFormat: 'dd/MM/yyyy',
    timeFormat: 'HH:mm',
  },
};

export default config;