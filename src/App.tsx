import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Konfigurator from "./pages/Konfigurator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <main className="flex-1">
              <Routes>
                {/* Der Konfigurator ist jetzt die einzige und primäre Seite */}
                <Route path="/" element={<Konfigurator />} />
                {/* Fallback: Alles andere führt auch zum Konfigurator */}
                <Route path="*" element={<Konfigurator />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;