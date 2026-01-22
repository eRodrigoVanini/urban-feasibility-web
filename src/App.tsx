import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HOME";
import { SimulationForm } from "./components/SimulationForm";
// Importe suas outras páginas aqui (Login, etc)

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/form-test" element={<SimulationForm />} />
      </Routes>
    </BrowserRouter>
  );
}
