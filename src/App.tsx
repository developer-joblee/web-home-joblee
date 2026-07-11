import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollManager } from "./components/ScrollManager";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { BecomeProfessional } from "./pages/BecameProfessional";
import { Safety } from "./pages/Safety";
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/privacy";
import { DeleteAccount } from "./pages/DeleteAccount";
import { AccountDeletion } from "./pages/AccountDeletion";
import { About } from "./pages/About";
import { Pricing } from "./pages/Pricing";
import { Careers } from "./pages/Careers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profissional" element={<BecomeProfessional />} />
          <Route path="/seguranca" element={<Safety />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/precos" element={<Pricing />} />
          <Route path="/carreiras" element={<Careers />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/account-deletion" element={<AccountDeletion />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
