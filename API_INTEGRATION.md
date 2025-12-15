# API Integration Documentation

## Configuración Completada

Tu proyecto React ahora está completamente preparado para consumir tu servicio backend Spring Boot. Aquí tienes todo lo que se ha configurado:

### 📁 Estructura de archivos creados:

```
src/
├── lib/
│   └── api-client.ts          # Configuración base de Axios
├── types/
│   └── api.ts                 # Tipos TypeScript para la API
├── services/
│   ├── auth.service.ts        # Servicio de autenticación
│   ├── producto.service.ts    # Servicio de productos
│   ├── categoria.service.ts   # Servicio de categorías
│   ├── carrito.service.ts     # Servicio del carrito
│   └── pedido.service.ts      # Servicio de pedidos y direcciones
└── hooks/
    ├── use-auth.ts           # Hooks para autenticación
    ├── use-productos.ts      # Hooks para productos
    ├── use-categorias.ts     # Hooks para categorías
    ├── use-carrito.ts        # Hooks para carrito
    └── use-pedidos.ts        # Hooks para pedidos
```

### 🔧 Variables de entorno:

Se crearon los archivos `.env`, `.env.development` y `.env.production` con las configuraciones necesarias.

## 📚 Ejemplos de uso:

### 1. Obtener productos con filtros:

```tsx
import { useProductos } from '../hooks/use-productos';

function ProductList() {
  const filtros = {
    categoria: 1,
    precioMin: 50,
    precioMax: 200,
    busqueda: 'camiseta'
  };
  
  const { data: productos, isLoading, error } = useProductos(0, 12, filtros);

  if (isLoading) return <div>Cargando productos...</div>;
  if (error) return <div>Error al cargar productos</div>;

  return (
    <div>
      {productos?.content.map(producto => (
        <div key={producto.id}>
          <h3>{producto.nombre}</h3>
          <p>S/. {producto.precio}</p>
        </div>
      ))}
    </div>
  );
}
```

### 2. Agregar producto al carrito:

```tsx
import { useAgregarCarrito } from '../hooks/use-carrito';

function ProductCard({ producto }) {
  const agregarCarrito = useAgregarCarrito();

  const handleAddToCart = () => {
    agregarCarrito.mutate({
      productoId: producto.id,
      cantidad: 1,
      tallaId: selectedTalla.id,
      colorId: selectedColor.id
    });
  };

  return (
    <button 
      onClick={handleAddToCart}
      disabled={agregarCarrito.isPending}
    >
      {agregarCarrito.isPending ? 'Agregando...' : 'Agregar al carrito'}
    </button>
  );
}
```

### 3. Login de usuario:

```tsx
import { useLogin } from '../hooks/use-auth';

function LoginForm() {
  const login = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login.mutate({
      email: 'usuario@example.com',
      password: 'password123'
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* formulario */}
      <button type="submit" disabled={login.isPending}>
        {login.isPending ? 'Iniciando sesión...' : 'Iniciar sesión'}
      </button>
    </form>
  );
}
```

### 4. Obtener categorías para el menú:

```tsx
import { useCategoriasActivas } from '../hooks/use-categorias';

function Navigation() {
  const { data: categorias, isLoading } = useCategoriasActivas();

  return (
    <nav>
      {categorias?.map(categoria => (
        <a key={categoria.id} href={`/categoria/${categoria.id}`}>
          {categoria.nombre}
        </a>
      ))}
    </nav>
  );
}
```

### 5. Ver carrito completo:

```tsx
import { useCarrito, useEliminarItemCarrito } from '../hooks/use-carrito';

function Cart() {
  const { data: carrito, isLoading } = useCarrito();
  const eliminarItem = useEliminarItemCarrito();

  if (isLoading) return <div>Cargando carrito...</div>;

  return (
    <div>
      <h2>Mi Carrito (Total: S/. {carrito?.total})</h2>
      {carrito?.items.map(item => (
        <div key={item.id}>
          <span>{item.producto.nombre}</span>
          <span>Cantidad: {item.cantidad}</span>
          <span>Subtotal: S/. {item.subtotal}</span>
          <button onClick={() => eliminarItem.mutate(item.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}
```

## 🚀 Siguientes pasos:

1. **Asegúrate que tu backend esté corriendo** en `http://localhost:8080`
2. **Actualiza las URLs** en los archivos `.env` si tu backend usa diferentes endpoints
3. **Integra los hooks** en tus componentes existentes
4. **Maneja la autenticación** - los tokens se guardan automáticamente en localStorage
5. **Personaliza los mensajes** de toast según tu diseño

## 🛡️ Características incluidas:

- ✅ **Interceptores de Axios** para manejo automático de tokens
- ✅ **Manejo de errores** centralizado con notificaciones
- ✅ **Cache inteligente** con React Query
- ✅ **TypeScript completo** para mayor seguridad
- ✅ **Variables de entorno** para diferentes ambientes
- ✅ **Invalidación automática** del cache cuando es necesario
- ✅ **Loading y error states** manejados automáticamente

¡Tu proyecto está listo para consumir la API! 🎉