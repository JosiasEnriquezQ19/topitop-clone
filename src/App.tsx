import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import NoEncontrado from "./pages/NoEncontrado";
import DetalleProducto from "./pages/DetalleProducto";
import Catalogo from "./pages/Catalogo";
import { BotonWhatsApp } from "./components/BotonWhatsApp";

import SeguimientoPedidos from "./pages/ayuda/SeguimientoPedidos";
import PoliticasEnvio from "./pages/ayuda/PoliticasEnvio";
import CambiosDevoluciones from "./pages/ayuda/CambiosDevoluciones";
import PreguntasFrecuentes from "./pages/ayuda/PreguntasFrecuentes";
import NuestrasTiendas from "./pages/ayuda/NuestrasTiendas";
import Contactanos from "./pages/ayuda/Contactanos";

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BotonWhatsApp />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/catalogo/:categoria" element={<Catalogo />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />

          {/* Ayuda Routes */}
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
  </QueryClientProvider>
);

export default App;
