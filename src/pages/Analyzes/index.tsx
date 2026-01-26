import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

export function Analyzes() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const resultData = location.state;

  if (!resultData) {
    return (
      <div className="analyzes-container">
        <h2>Nenhum resultado encontrado.</h2>
        <button onClick={() => navigate("/")}>Voltar para o Início</button>
      </div>
    );
  }

  return (
    <div className="analyzes-container">
      <div className="analyzes-card">
        <h1>Resultado da Viabilidade</h1>
        
        <div className="data-grid">
          {Object.entries(resultData).map(([key, value]) => (
            <div key={key} className="data-item">
              <strong>{key}:</strong>
              <span>{String(value)}</span>
            </div>
          ))}
        </div>

        <button className="back-btn" onClick={() => navigate("/")}>
          Nova Simulação
        </button>
      </div>
    </div>
  );
}