import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X, ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { ReactNode } from "react";
import { useCart } from "@/context/CartContext"; // Import context hook

interface CarritoLateralProps {
    children: ReactNode;
}

export const CarritoLateral = ({ children }: CarritoLateralProps) => {
    const { cartItems, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen } = useCart();

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = subtotal;

    return (
        <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-[400px] p-0 border-l-0 [&>button]:hidden bg-white z-[60]">
                <div className="flex flex-col h-full">
                    {/* Header Part 1: Close Button */}
                    <div className="flex items-center px-4 py-2 border-b border-gray-100">
                        <SheetClose asChild>
                            <Button variant="ghost" size="icon" className="hover:bg-transparent -ml-2">
                                <X className="w-6 h-6 text-black" />
                            </Button>
                        </SheetClose>
                    </div>

                    {/* Header Part 2: Title */}
                    <div className="bg-red-600 text-white px-6 py-3">
                        <h2 className="text-lg font-bold">Tu carrito</h2>
                    </div>

                    {/* Body */}
                    {cartItems.length === 0 ? (
                        /* Empty State */
                        <div className="flex-1 flex flex-col items-center justify-center gap-4 bg-white">
                            <ShoppingCart className="w-20 h-20 text-gray-400 fill-gray-400/20" />
                            <p className="text-gray-500 text-sm font-medium">Tu carrito está vacío</p>
                        </div>
                    ) : (
                        /* Cart Items */
                        <>
                            <div className="flex-1 overflow-y-auto px-4 py-4">
                                {cartItems.map((item) => (
                                    <div key={`${item.id}-${item.size}`} className="flex gap-4 pb-4 mb-4 border-b border-gray-100">
                                        {/* Product Image */}
                                        <div className="w-20 h-28 flex-shrink-0 bg-gray-50 border border-gray-200">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1 pr-2">
                                                    <p className="text-xs text-gray-500 uppercase">{item.brand}</p>
                                                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-xs text-gray-500 mt-1">Talla: {item.size}</p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-500 hover:text-red-700 p-1"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="text-base font-bold">S/ {item.price.toFixed(2)}</span>
                                                {item.originalPrice && (
                                                    <span className="text-xs text-gray-400 line-through">
                                                        S/ {item.originalPrice.toFixed(2)}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Quantity */}
                                            <div className="flex items-center mt-3">
                                                <div className="flex items-center border border-gray-300">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="px-2 py-1 hover:bg-gray-100"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="px-3 py-1 text-sm border-x border-gray-300">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="px-2 py-1 hover:bg-gray-100"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer - Totals */}
                            <div className="border-t border-gray-200 px-4 py-4 bg-white">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-600">Subtotal</span>
                                    <span className="text-sm font-medium">S/ {subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-medium">Total</span>
                                    <span className="text-lg font-bold">S/ {total.toFixed(2)}</span>
                                </div>
                                <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-none py-6 font-bold tracking-widest">
                                    FINALIZA TU COMPRA
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};
