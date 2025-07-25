import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ForensicDispute from "./pages/ForensicDispute";
import TaxConsulting from "./pages/TaxConsulting";
import FinancialAccounting from "./pages/FinancialAccounting";
import TheFirm from "./pages/TheFirm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/forensic-dispute" element={<ForensicDispute />} />
          <Route path="/tax-consulting" element={<TaxConsulting />} />
          <Route path="/financial-accounting" element={<FinancialAccounting />} />
          <Route path="/the-firm" element={<TheFirm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
