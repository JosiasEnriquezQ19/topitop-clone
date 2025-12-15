import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./pages/Inicio";
import NoEncontrado from "./pages/NoEncontrado";
import DetalleProducto from "./pages/DetalleProducto";
import Catalogo from "./pages/Catalogo";
import TestAPI from "./pages/TestAPI";
import ProductosAPI from "./pages/ProductosAPI";
import { BotonWhatsApp } from "./components/BotonWhatsApp";
import APIDebugger from "./components/APIDebugger";
import { AbrigosBlazers } from "./pages/AbrigosBlazers";

import SeguimientoPedidos from "./pages/ayuda/SeguimientoPedidos";
import PoliticasEnvio from "./pages/ayuda/PoliticasEnvio";
import CambiosDevoluciones from "./pages/ayuda/CambiosDevoluciones";
import PreguntasFrecuentes from "./pages/ayuda/PreguntasFrecuentes";
import NuestrasTiendas from "./pages/ayuda/NuestrasTiendas";
import Contactanos from "./pages/ayuda/Contactanos";

import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos
      retry: (failureCount, error: any) => {
        console.log(`🔄 Query retry ${failureCount}:`, error?.message);
        return failureCount < 2;
      },
      onError: (error: any) => {
        console.error('❌ Query Error:', error);
      },
    },
    mutations: {
      onError: (error: any) => {
        console.error('❌ Mutation Error:', error);
      },
    },
  },
});


const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <APIDebugger />
        <BrowserRouter>
        <BotonWhatsApp />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/test-api" element={<TestAPI />} />
          <Route path="/productos-api" element={<ProductosAPI />} />
          <Route path="/abrigos-blazers" element={<AbrigosBlazers />} />
          <Route path="/catalogo/:categoria" element={<Catalogo />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />

          <Route path="/ayuda" element={<Navigate to="/ayuda/preguntas-frecuentes" replace />} />
          <Route path="/ayuda/seguimiento" element={<SeguimientoPedidos />} />
          <Route path="/ayuda/politicas-envio" element={<PoliticasEnvio />} />
          <Route path="/ayuda/cambios-devoluciones" element={<CambiosDevoluciones />} />
          <Route path="/ayuda/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/ayuda/nuestras-tiendas" element={<NuestrasTiendas />} />
          <Route path="/ayuda/contactanos" element={<Contactanos />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
