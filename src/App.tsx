import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SimulationForm } from "./components/SimulationForm";
import { Home } from "./pages/Home";
import Footer from "./layout/footer/index.js";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-test" element={<SimulationForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
