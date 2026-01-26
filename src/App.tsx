import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Analyzes } from "./pages/Analyzes";
import Footer from "./layout/footer/index.js";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyzes" element={<Analyzes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
