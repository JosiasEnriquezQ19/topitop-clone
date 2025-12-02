import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X, ShoppingCart } from "lucide-react";
import { ReactNode } from "react";

interface CartSidebarProps {
    children: ReactNode;
}

export const CartSidebar = ({ children }: CartSidebarProps) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-[400px] p-0 border-l-0 [&>button]:hidden bg-white">
                <div className="flex flex-col h-full">
                    {/* Header Part 1: Close Button */}
                    <div className="flex items-center px-4 py-2">
                        <SheetClose asChild>
                            <Button variant="ghost" size="icon" className="hover:bg-transparent -ml-2">
                                <X className="w-6 h-6 text-black" />
                            </Button>
                        </SheetClose>
                    </div>

                    {/* Header Part 2: Title */}
                    <div className="bg-black text-white px-6 py-3">
                        <h2 className="text-lg font-bold">Tu carrito</h2>
                    </div>

                    {/* Body: Empty State */}
                    <div className="flex-1 flex flex-col items-center justify-center gap-4 bg-white">
                        <ShoppingCart className="w-20 h-20 text-gray-400 fill-gray-400/20" />
                        <p className="text-gray-500 text-sm font-medium">Tu carrito está vacío</p>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};
