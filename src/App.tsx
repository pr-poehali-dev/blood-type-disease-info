
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Diseases from "./pages/Diseases";
import BloodTypeOne from "./pages/BloodTypeOne";
import BloodTypeTwo from "./pages/BloodTypeTwo";
import BloodTypeThree from "./pages/BloodTypeThree";
import BloodTypeFour from "./pages/BloodTypeFour";
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
          <Route path="/diseases" element={<Diseases />} />
          <Route path="/blood-type/1" element={<BloodTypeOne />} />
          <Route path="/blood-type/2" element={<BloodTypeTwo />} />
          <Route path="/blood-type/3" element={<BloodTypeThree />} />
          <Route path="/blood-type/4" element={<BloodTypeFour />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
