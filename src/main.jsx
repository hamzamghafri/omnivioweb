import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "@/index.css";
import OmnivioHome from "@/pages/omnivio/OmnivioHome";
import OmnivioPricing from "@/pages/omnivio/OmnivioPricing";
import OmnivioFAQ from "@/pages/omnivio/OmnivioFAQ";
import OmnivioContact from "@/pages/omnivio/OmnivioContact";
import OmnivioIndustries from "@/pages/omnivio/OmnivioIndustries";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OmnivioHome />} />
        <Route path="/pricing" element={<OmnivioPricing />} />
        <Route path="/faq" element={<OmnivioFAQ />} />
        <Route path="/contact" element={<OmnivioContact />} />
        <Route path="/industries" element={<OmnivioIndustries />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
