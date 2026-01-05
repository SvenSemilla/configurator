import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Katalog from "./pages/Katalog";
import ProductDetail from "./pages/ProductDetail";
import Stoffe from "./pages/Stoffe";
import Anfrage from "./pages/Anfrage";
import Warenkorb from "./pages/Warenkorb";
import Konfigurator from "./pages/Konfigurator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/katalog" element={<Katalog />} />
                <Route path="/produkt/:slug" element={<ProductDetail />} />
                <Route path="/stoffe" element={<Stoffe />} />
                <Route path="/anfrage" element={<Anfrage />} />
                <Route path="/warenkorb" element={<Warenkorb />} />
                <Route path="/konfigurator" element={<Konfigurator />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
