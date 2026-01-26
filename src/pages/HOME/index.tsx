import { SimulationForm } from "../../components/SimulationForm";
import "./style.css";

export function Home() {
  function handleSimulationSubmit(lot: any) {
    lot.data = [];

    fetch("http://localhost:3000/simulations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Simulação criada:", data);
      })
      .catch((error) => {
        console.error("Erro ao criar simulação:", error);
      });
  }

  return (
    <div className="home-container">
      <div className="hero-wrapper">
        <div className="hero-text">
          <h1>
            Descubra o potencial
            <br />
            do seu terreno.
          </h1>
          <p>
            Análise automática de viabilidade urbanística. Simples, rápido e
            preciso.
          </p>
        </div>

        <div className="hero-form-container">
          <SimulationForm
            btnText="Calcular Agora"
            handleSubmit={handleSimulationSubmit}
          />
        </div>
      </div>
    </div>
  );
}
