import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import apiClient from "@/lib/api-client";
import { toast } from "sonner";

export interface CartItem {
  id: number | string;
  brand: string;
  name: string;
  size: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  detalleId?: number; // ID del detalle en la BD
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => Promise<void>;
  removeFromCart: (detalleId: number) => Promise<void>;
  updateQuantity: (detalleId: number, quantity: number) => Promise<void>;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  carritoId: number | null;
  loadCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [carritoId, setCarritoId] = useState<number | null>(null);

  // Obtener o crear carrito del usuario al cargar
  const loadCart = async () => {
    try {
      const usuario = JSON.parse(localStorage.getItem("usuario") || "{}");
      if (!usuario.idUsuario) {
        // Si no hay usuario logueado, carrito vacío
        setCartItems([]);
        setCarritoId(null);
        // Limpiar localStorage antiguo
        localStorage.removeItem("cart");
        return;
      }

      // Obtener o crear carrito del usuario
      const response = await apiClient.get(`/api/carrito/usuario/${usuario.idUsuario}`);
      const carrito = response.data;
      setCarritoId(carrito.idCarrito);

      // Obtener items del carrito
      const itemsResponse = await apiClient.get(`/api/carrito/${carrito.idCarrito}/items`);
      const items = itemsResponse.data.map((detalle: any) => ({
        id: detalle.idProducto,
        detalleId: detalle.idDetalle,
        brand: "Topitop",
        name: detalle.nombreProducto,
        size: detalle.talla || "M",
        price: detalle.precioUnitario,
        quantity: detalle.cantidad,
        image: detalle.imagenProducto || "https://via.placeholder.com/300x400",
      }));
      setCartItems(items);
    } catch (error) {
      console.error("Error al cargar carrito:", error);
      setCartItems([]);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = async (product: CartItem) => {
    try {
      const usuario = JSON.parse(localStorage.getItem("usuario") || "{}");
      
      if (!usuario.idUsuario) {
        toast.error("Debes iniciar sesión para agregar productos al carrito");
        return;
      }

      // Si no tenemos carritoId, obtenerlo primero
      let currentCarritoId = carritoId;
      if (!currentCarritoId) {
        const response = await apiClient.get(`/api/carrito/usuario/${usuario.idUsuario}`);
        currentCarritoId = response.data.idCarrito;
        setCarritoId(currentCarritoId);
      }

      // Agregar producto al carrito en el backend
      const response = await apiClient.post(`/api/carrito/${currentCarritoId}/agregar`, {
        idProducto: Number(product.id),
        cantidad: product.quantity,
        precioUnitario: product.price,
        talla: product.size,
      });

      // Recargar carrito desde BD
      await loadCart();
      setIsCartOpen(true);
      toast.success("Producto agregado al carrito");
    } catch (error: any) {
      console.error("Error al agregar al carrito:", error);
      toast.error(error.response?.data?.message || "Error al agregar al carrito");
    }
  };

  const removeFromCart = async (detalleId: number) => {
    try {
      await apiClient.delete(`/api/carrito/item/${detalleId}`);
      await loadCart();
      toast.success("Producto eliminado del carrito");
    } catch (error) {
      console.error("Error al eliminar del carrito:", error);
      toast.error("Error al eliminar producto");
    }
  };

  const updateQuantity = async (detalleId: number, quantity: number) => {
    if (quantity < 1) return;
    try {
      await apiClient.put(`/api/carrito/item/${detalleId}`, {
        cantidad: quantity,
      });
      await loadCart();
    } catch (error) {
      console.error("Error al actualizar cantidad:", error);
      toast.error("Error al actualizar cantidad");
    }
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        carritoId,
        loadCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
